import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './EditComments.styles';
import Button from '../../../components/@common/Button/Button';
import useApi from '../../../hooks/useApi';
import MESSAGE from '../../../constants/message';

function EditComments({ isLoggedIn, userData, title }) {
	const { postId } = useParams();
	const navigate = useNavigate();

	const [comment, setComment] = useState({
		author: '',
		ownerId: '',
		content: '',
	});

	if (userData) {
		comment.author = userData.nickName;
		comment.ownerId = userData._id;
	}
	const { trigger, isLoading, error, result } = useApi({
		path: `/projectStudy/${postId}/comments`,
		method: 'post',
		shouldFetch: false,
	});

	const handleCommentChange = e => {
		const newComment = {
			...comment,
			content: e.target.value,
		};
		setComment(newComment);
	};

	const handleCommentSubmit = async () => {
		if (!isLoggedIn) {
			alert(MESSAGE.LOGIN.REQUIRED);
			return;
		}
		if (comment.content.trim() === '') {
			alert(MESSAGE.CHECK.DESCRIPTION);
			return;
		}
		if (comment.content.length > 1000) {
			alert(MESSAGE.CHECK.DESCRIPTIONLENGTH);
			return;
		}

		const commentData = {
			...comment,
		};
		await trigger({
			data: commentData,
		});

		setComment(prevComment => ({
			...prevComment,
			content: '',
		}));

		// 임시
		navigate(0);
	};

	const particle = title === '후기' ? '를' : '을';

	return (
		<S.Container>
			<S.CommentWrapper>
				<textarea
					placeholder={`${title}${particle} 등록하세요.`}
					value={comment.content}
					maxLength={1000}
					onChange={handleCommentChange}
				></textarea>
				<S.ButtonWrapper>
					<Button
						variant={'add'}
						size={'comment'}
						shape={'medium'}
						onClick={handleCommentSubmit}
					>
						{`${title} 등록`}
					</Button>
				</S.ButtonWrapper>
			</S.CommentWrapper>
		</S.Container>
	);
}

export default EditComments;
