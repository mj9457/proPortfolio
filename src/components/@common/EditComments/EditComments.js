import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './EditComments.styles';
import Button from '../../../components/@common/Button/Button';
import useApi from '../../../hooks/useApi';

function EditComments({ isLoggedIn }) {
	const { postId } = useParams();

	const [comment, setComment] = useState('');

	const { trigger, isLoading, error, result } = useApi({
		path: `/projectStudy/${postId}/comments`,
		method: 'post',
		shouldFetch: false,
	});

	const handleCommentChange = event => {
		setComment(event.target.value);
	};

	const handleCommentSubmit = async () => {
		if (!isLoggedIn) {
			alert('로그인한 회원만 댓글을 입력할 수 있어요.');
			return;
		}
		if (comment.trim() === '') {
			alert('댓글 내용을 입력해주세요.');
			return;
		}
		try {
			await trigger({ data: { content: comment } });
			console.log('comment', comment);
			setComment('');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<S.Container>
			<S.CommentWrapper>
				<textarea
					placeholder="댓글을 등록하세요."
					onChange={handleCommentChange}
				></textarea>
				<S.ButtonWrapper>
					<Button
						variant={'add'}
						size={'comment'}
						shape={'medium'}
						onClick={handleCommentSubmit}
					>
						댓글 등록
					</Button>
				</S.ButtonWrapper>
			</S.CommentWrapper>
		</S.Container>
	);
}

export default EditComments;
