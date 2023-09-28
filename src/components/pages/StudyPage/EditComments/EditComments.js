import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './EditComments.styles';
import Button from '../../../@common/Button';
import useApi from '../../../../hooks/useApi';

import MESSAGE from '../../../../constants/message';
import SignUpModal from '../../../pages/SignUp/Modal/SignUpModal';

function EditComments({ isLoggedIn, userData, title }) {
	const [openModal, setOpenModal] = useState(false);
	const { postId } = useParams();
	const navigate = useNavigate();

	const [comment, setComment] = useState({
		author: '',
		ownerId: '',
		content: '',
	});

	useEffect(() => {
		if (userData) {
			setComment(prev => ({
				...prev,
				author: userData.nickName,
				ownerId: userData._id,
			}));
		}
	}, [userData]);

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

	const handleSignupClose = () => {
		setOpenModal(false);
	};

	const handleCommentSubmit = async () => {
		if (!isLoggedIn) {
			alert(MESSAGE.LOGIN.REQUIRED);
			setOpenModal(true);
			return;
		}
		if (comment.content.trim() === '') {
			alert(MESSAGE.CHECK.DESCRIPTION);
			return;
		}
		if (comment.content.length > 200) {
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
		<>
			<S.Container>
				<S.CommentWrapper>
					<textarea
						placeholder={`${title}${particle} 등록하세요.`}
						value={comment.content}
						maxLength={200}
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
			{openModal && <SignUpModal onClose={handleSignupClose} />}
		</>
	);
}

export default EditComments;
