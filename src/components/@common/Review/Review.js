import { useEffect, useState } from 'react';

import * as S from './Review.styles';

import Line from '../Line/Line';
import useApi from '../../../hooks/useApi';
import MESSAGE from '../../../constants/message';
import Textarea from '../Textarea/Textarea';
import Pagination from '../Pagination/Pagination';
import LoadingBar from '../Loading/LoadingBar';

function Review(props) {
	const { title, getUrl } = props;

	// review && comments 데이터
	const [review, setReview] = useState([]);

	// 수정시 데이터 보낼 state
	const [editReview, setEditReview] = useState({
		author: '',
		content: '',
		ownerId: '',
		createdAt: '',
	});

	const [userInfo, setUserInfo] = useState();
	const [edit, setEdit] = useState(false);

	// 페이지네이션
	const itemsPerPage = 10; // 페이지 당 표시될 아이템 개수
	const [currentPage, setCurrentPage] = useState(1); // 초기값을 1로 설정

	// api 통신
	const { result, trigger, isLoading } = useApi({
		path: `${getUrl}/comments`,
		shouldFetch: true,
	});

	const { result: userResult } = useApi({
		path: '/user',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.comments) {
			setReview(result.comments);
		}

		setUserInfo(userResult._id);
	}, [result.comments, userResult]);

	// 댓글 바뀌는 값
	const handleChange = e => {
		const { name, value } = e.target;

		setEditReview(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	// 댓글 수정
	const handleEdit = id => {
		const selectedComment = review.find(comment => comment._id === id);
		const { ...newEditReview } = selectedComment;

		const alertMessage =
			title === '후기' ? MESSAGE.REVIEW.EDIT : MESSAGE.COMMENT.EDIT;

		if (selectedComment.ownerId === userInfo) {
			if (confirm(alertMessage)) {
				setEditReview(newEditReview);
				setEdit(id);
			}
		} else {
			alert('수정할 권한이 없습니다.');
		}
	};

	// 댓글 수정 완료
	const handleComplete = async () => {
		await trigger({
			method: 'put',
			path: `${getUrl}/comments/${edit}`,
			data: editReview, // review data 들어갈 곳
		});

		alert('수정이 완료되었습니다.');

		await trigger({
			params: {
				skip: currentPage * 10 - 10,
			},
			applyResult: true,
		});

		setEdit(null);
	};

	// 페이지 변경 핸들러
	const handlePageChange = async pageNumber => {
		await trigger({
			params: {
				skip: pageNumber * 10 - 10,
				limit: 10,
			},

			applyResult: true,
		});

		setReview(result.comments);
		setCurrentPage(pageNumber);
	};

	// 댓글 삭제
	const handleDelete = async id => {
		const selectedComment = review.find(comment => comment._id === id);

		if (selectedComment.ownerId === userInfo) {
			if (confirm(MESSAGE.COMMENT.DELETE)) {
				await trigger({
					method: 'delete',
					path: `${getUrl}/comments/${id}`,
					data: selectedComment, // 삭제할 review data 들어갈 곳
					applyResult: true,
				});

				setReview(prev => [...prev, ...result.comments]);

				if (result.comments.length === 1) {
					alert(MESSAGE.DELETE.COMPLETE);
					await trigger({
						params: {
							skip: (currentPage - 1) * 10 - 10,
						},
						applyResult: true,
					});

					setCurrentPage(prev => prev - 1);
				} else {
					await trigger({
						params: {
							skip: currentPage * 10 - 10,
						},
						applyResult: true,
					});

					alert(MESSAGE.DELETE.COMPLETE);
				}
			}
		} else {
			alert('삭제할 권한이 없습니다.');
		}
	};

	// 시간이랑 날짜 변환해 주는 함수
	const dateAndTime = createdAt => {
		const serverDate = new Date(createdAt);
		const date = serverDate.toLocaleDateString('ko-KR');
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		};
		const time = serverDate.toLocaleTimeString('en-US', options);

		return `${date} ${time}`;
	};

	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>{title}</strong>
				<span>{result.total}</span>
			</S.TopBox>

			<S.BottomBox>
				{isLoading ? (
					<LoadingBar />
				) : (
					<>
						{review.map((comment, idx) => (
							<S.CommentBox key={idx}>
								<S.MiddleBox>
									<S.NamingBox>
										<strong>{comment.author}</strong>
										<span>
											{dateAndTime(comment.createdAt)}
										</span>
									</S.NamingBox>
									{edit === comment._id ? (
										<S.Buttons>
											<button onClick={handleComplete}>
												완료
											</button>
											<button
												onClick={() => setEdit(null)}
											>
												취소
											</button>
										</S.Buttons>
									) : (
										<S.Buttons>
											<button
												onClick={() =>
													handleEdit(comment._id)
												}
											>
												수정
											</button>
											<button
												onClick={() =>
													handleDelete(comment._id)
												}
											>
												삭제
											</button>
										</S.Buttons>
									)}
								</S.MiddleBox>

								<div>
									{edit && edit === comment._id ? (
										<Textarea
											maxLength="200"
											size={'full'}
											name="content"
											defaultValue={editReview.content}
											onChange={handleChange}
										/>
									) : (
										<S.Contents>
											{comment.content}
										</S.Contents>
									)}
								</div>

								<Line size={'small'} />
							</S.CommentBox>
						))}
					</>
				)}
			</S.BottomBox>

			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={result.totalPages}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</S.ReviewBox>
	);
}

export default Review;
