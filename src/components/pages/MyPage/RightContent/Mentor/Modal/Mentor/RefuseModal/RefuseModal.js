import { useState, useEffect, useRef } from 'react';
import * as RM from './RefuseModal.styles';
import axios from 'axios';
import Textarea from '../../../../../../../@common/Textarea/Textarea';
import useApi from '../../../../../../../../hooks/useApi';

// 멘토 - 멘토링 거절 사유 작성 모달
function RefuseModal({ setRefuseModalOpenState, item }) {
	const [textareaValue, setTextareaValue] = useState({
		message: '',
		action: 'reject',
	}); // 작성한 거절 내용 (멘토)

	// 유저가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextareaValue({
			...textareaValue,
			[name]: value,
		});
	};

	const { result, trigger } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 멘토
	const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
	const requestId = item._id; // 멘토가 신청 받은 id
	const postData = textareaValue; // 수락할때 보내줄 데이터,

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();

		// 빈값 체크
		if (!textareaValue?.message) {
			alert(`항목이 비었습니다.\n다시 한번 확인해주세요.`);
		} else {
			// 유저 작성한 신청서 post로 전달
			console.log(portfolioId, requestId, postData);
			trigger({
				method: 'post',
				path: `/portfolio/mentor/respondToMentoringRequest/${portfolioId}/${requestId}`,
				data: postData,
				shouldFetch: true,
			});

			alert('거절되었습니다.');
			closeModal();
			window.location.replace('/mypage');
		}
	};

	// 모달 끄기
	const closeModal = () => {
		setRefuseModalOpenState(false);
	};

	return (
		<>
			<RM.Modal>
				<form onSubmit={handleSubmit}>
					<RM.InfoWrapper>
						<RM.InfoTitle>거절 사유 작성</RM.InfoTitle>
						<RM.InfoBox>
							<RM.InfoSubTitleBox>
								<RM.InfoSubTitle>거절 사유</RM.InfoSubTitle>
								<Textarea
									name={'message'}
									size={'regular'}
									placeholder={'거절 사유를 적어주세요'}
									onChange={handleChange}
								/>
							</RM.InfoSubTitleBox>
						</RM.InfoBox>
					</RM.InfoWrapper>
					<RM.ButtonBox>
						<RM.CancelButton onClick={closeModal}>
							취소
						</RM.CancelButton>
						<RM.CompleteButton type="submit">
							완료
						</RM.CompleteButton>
					</RM.ButtonBox>
				</form>
			</RM.Modal>
		</>
	);
}

export default RefuseModal;
