import { useEffect, useState } from 'react';

import * as S from './Review.styles';

import Line from '../Line/Line';
import useApi from '../../../hooks/useApi';
import MESSAGE from '../../../constants/message';
import Textarea from '../Textarea/Textarea';
import { checkToken } from '../../../utils/cookie';

function Review(props) {
	// 댓글 페이지네이션 처리 필요
	// 댓글도 댓글 작성자인 경우만 수정/삭제 버튼 오픈

	const { title, getUrl } = props;
	const [review, setReview] = useState([]);

	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());

	const [editReview, setEditReview] = useState({
		author: '',
		content: '',
		ownerId: '',
		createdAt: '',
	});

	const [userInfo, setUserInfo] = useState({});
	const [edit, setEdit] = useState(false);

	// user Info
	const { result: userResult } = useApi({
		path: isLoggedIn ? '/user' : '',
		shouldFetch: isLoggedIn,
	});

	// 댓글 목록
	const { result, trigger, isLoading, error } = useApi({
		path: `${getUrl}`,
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

	// 댓글 수정하기
	const handleChange = e => {
		const { name, value } = e.target;

		setEditReview(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

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

	const handleComplete = () => {
		trigger({
			method: 'put',
			path: `${getUrl}/comments/${edit}`,
			data: editReview, // review data 들어갈 곳
		});

		alert('수정이 완료되었습니다.');
	};

	// 댓글 삭제하기
	const handleDelete = id => {
		const selectedComment = review.find(comment => comment._id === id);

		if (selectedComment.ownerId === userInfo._id) {
			if (confirm(MESSAGE.COMMENT.DELETE)) {
				trigger({
					method: 'delete',
					path: `${getUrl}/comments/${id}`,
					data: selectedComment, // 삭제할 review data 들어갈 곳
				});

				alert(MESSAGE.DELETE.COMPLETE);
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
				<span>{review.length}</span>
			</S.TopBox>

			<S.BottomBox>
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
									<button onClick={() => handleEdit(comment._id)}>수정</button>
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
			</S.BottomBox>
		</S.ReviewBox>
	);
}

export default Review;
