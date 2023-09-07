import { useState, useEffect, useRef } from 'react';
import * as RVM from './ReviewModal.styles';
import Textarea from '../../../../../../@common/Textarea/Textarea';
import useApi from '../../../../../../../hooks/useApi';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../../../../../../../recoil/atoms/index.atom';

// 멘토 - 멘토링 거절 사유 작성 모달
function ReviewModal({ setReviewModalOpenState, item }) {
	const userData = useRecoilValue(userAtom);
	const navigate = useNavigate();
	const [textValue, setTextValue] = useState({
		author: '',
		ownerId: '',
		content: '',
	});

	useEffect(() => {
		if (userData) {
			textValue.author = userData.nickName;
			textValue.ownerId = userData._id;
		}
		console.log(userData);
	}, [userData]);

	// 유저가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextValue({
			...textValue,
			[name]: value,
		});
	};

	const { result, trigger } = useApi({});

	// 멘토
	const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
	const requestId = item._id; // 멘토가 신청 받은 id
	const postsData = textValue; // 수락할때 보내줄 데이터,

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();

		// 빈값 체크
		if (!textValue?.content) {
			alert(`항목이 비었습니다.\n다시 한번 확인해주세요.`);
		} else {
			// 유저 작성한 신청서 post로 전달
			console.log(portfolioId, requestId, postsData);
			trigger({
				method: 'post',
				path: `/portfolio/${portfolioId}/comments`,
				data: postsData,
				shouldFetch: true,
			});

			alert('후기를 작성했습니다.');
			navigate('/mypage');
		}
	};

	// 모달 끄기
	const closeModal = () => {
		setReviewModalOpenState(false);
	};

	return (
		<>
			<RVM.Modal>
				<form onSubmit={handleSubmit}>
					<RVM.InfoWrapper>
						<RVM.InfoTitle>후기 작성</RVM.InfoTitle>
						<RVM.InfoBox>
							<RVM.InfoSubTitleBox>
								<RVM.InfoSubTitle>후기</RVM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={'후기를 적어주세요'}
									onChange={handleChange}
								/>
							</RVM.InfoSubTitleBox>
						</RVM.InfoBox>
					</RVM.InfoWrapper>
					<RVM.ButtonBox>
						<RVM.CancelButton onClick={closeModal}>
							취소
						</RVM.CancelButton>
						<RVM.CompleteButton type="submit">
							완료
						</RVM.CompleteButton>
					</RVM.ButtonBox>
				</form>
			</RVM.Modal>
		</>
	);
}

export default ReviewModal;
