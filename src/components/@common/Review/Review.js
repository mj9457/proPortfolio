import { useEffect, useState } from 'react';

import * as S from './Review.styles';

import Line from '../Line/Line';
import useApi from '../../../hooks/useApi';
import MESSAGE from '../../../constants/message';
import Textarea from '../Textarea/Textarea';
import { checkToken } from '../../../utils/cookie';
import Pagination from '../Pagination/Pagination';

function Review(props) {
	const { title, getUrl } = props;

	// review && comments 데이터
	const [review, setReview] = useState([]);

	// 로그인 체크
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());

	// 수정시 데이터 보낼 state
	const [editReview, setEditReview] = useState({
		author: '',
		content: '',
		ownerId: '',
		createdAt: '',
	});

	const [userInfo, setUserInfo] = useState({});
	const [edit, setEdit] = useState(false);

	// 페이지네이션
	const itemsPerPage = 10; // 페이지 당 표시될 아이템 개수
	const [currentPage, setCurrentPage] = useState(1); // 초기값을 1로 설정

	// api 통신
	const { result: userResult } = useApi({
		path: isLoggedIn ? '/user' : '',
		shouldFetch: isLoggedIn,
	});

	const { result, trigger, isLoading, error } = useApi({
		path: `${getUrl}/comments`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (userResult) {
			setUserInfo(userResult);
		}

		if (result.comments && result.comments.length > 0) {
			setReview(result.comments);
			console.log(error);
		}
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
		const alertMessage =
			title === '후기' ? MESSAGE.REVIEW.EDIT : MESSAGE.COMMENT.EDIT;

		if (selectedComment.ownerId === userInfo._id) {
			if (confirm(alertMessage)) {
				setEditReview({
					author: selectedComment.author,
					content: selectedComment.content,
					ownerId: selectedComment.ownerId,
					createdAt: selectedComment.createdAt,
				});

				setEdit(id);
			}
		} else {
			alert('수정할 권한이 없습니다.');
		}
	};

	// 댓글 수정 완료
	const handleComplete = () => {
		trigger({
			method: 'put',
			path: `${getUrl}/comments/${edit}`,
			data: editReview, // review data 들어갈 곳
		});

		alert('수정이 완료되었습니다.');
	};

	// 페이지 변경 핸들러
	const handlePageChange = pageNumber => {
		trigger({
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

		if (selectedComment.ownerId === userInfo._id) {
			if (confirm(MESSAGE.COMMENT.DELETE)) {
				await trigger({
					method: 'delete',
					path: `${getUrl}/comments/${id}`,
					data: selectedComment, // 삭제할 review data 들어갈 곳
					applyResult: true,
				});

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
					<h2>로딩 중입니다.</h2>
				) : (
					<>
						{review.map((comment, idx) => (
							<S.CommentBox key={idx}>
								<S.MiddleBox>
									<S.NamingBox>
										<strong>{comment.author}</strong>
										<span>{dateAndTime(comment.createdAt)}</span>
									</S.NamingBox>

									{edit === comment._id ? (
										<S.Buttons>
											<button onClick={handleComplete}>완료</button>
											<button onClick={() => setEdit(null)}>취소</button>
										</S.Buttons>
									) : (
										<S.Buttons>
											<button onClick={() => handleEdit(comment._id)}>
												수정
											</button>
											<button onClick={() => handleDelete(comment._id)}>
												삭제
											</button>
										</S.Buttons>
									)}
								</S.MiddleBox>

								<div>
									{edit === comment._id ? (
										<Textarea
											size={'full'}
											name="content"
											defaultValue={editReview.content}
											onChange={handleChange}
										/>
									) : (
										<S.Contents>{comment.content}</S.Contents>
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
