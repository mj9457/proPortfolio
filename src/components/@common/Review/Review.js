import { useState } from 'react';
import useApi from '../../../hooks/useApi';

import * as S from './Review.styles';

import Line from '../Line/Line';
import MESSAGE from '../../../constants/message';

function Review(props) {
	// 댓글 페이지네이션 처리 필요
	// 댓글도 댓글 작성자인 경우만 수정/삭제 버튼 오픈

	const { title, putUrl, delUrl } = props;
	const [review, setReview] = useState([]);

	// 댓글 및 후기 수정하기
	const { result, trigger, isLoading, error } = useApi({
		path: `${putUrl}`,
		method: 'put',
		shouldFetch: true,
	});

	const handleEdit = async e => {
		const { name, value } = e.target;

		setReview(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	// 댓글 및 후기 삭제하기
	const handleDelete = async () => {
		const checkCommentAndReview =
			title === '후기' ? MESSAGE.COMMENT.DELETE : MESSAGE.REVIEW.DELETE;

		if (confirm(checkCommentAndReview) === true) {
			trigger({
				path: `${delUrl}`,
				method: 'delete',
			});

			alert(MESSAGE.DELETE.COMPLETE);
		}
	};

	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>{title}</strong>
				<span>{review.length}</span>
			</S.TopBox>

			<S.BottomBox>
				{review.map((review, idx) => (
					<S.CommentBox key={idx} id={review.reviewId}>
						<S.MiddleBox>
							<S.NamingBox>
								<strong>{review.nickName}</strong>
								<span>{review.createdAt}</span>
							</S.NamingBox>

							<S.Buttons>
								<button onClick={handleEdit}>수정</button>
								<button onClick={handleDelete}>삭제</button>
							</S.Buttons>
						</S.MiddleBox>

						<div>
							{/* <Textarea size={'full'} value={review.content} /> */}
							<S.Contents>{review.content}</S.Contents>
						</div>

						<Line size={'small'} />
					</S.CommentBox>
				))}
			</S.BottomBox>
		</S.ReviewBox>
	);
}

export default Review;
