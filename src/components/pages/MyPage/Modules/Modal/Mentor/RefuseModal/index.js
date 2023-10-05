import { useState, useEffect, useRef } from 'react';
import * as RM from './index.styles';
import Textarea from 'components/@common/Textarea';
import useApi from 'hooks/useApi';
import { useNavigate } from 'react-router-dom';

// 멘토 - 멘토링 거절 사유 작성 모달
function RefuseModal({ setRefuseModalOpenState, item }) {
	const navigate = useNavigate();
	const [textValue, setTextValue] = useState({
		message: '',
		action: 'reject',
	}); // 작성한 거절 내용 (멘토)

	// 유저가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextValue({
			...textValue,
			[name]: value,
		});
	};

	const { result, trigger } = useApi({
		path: `/users`,
		shouldFetch: true,
	});

	// 멘토
	const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
	const requestId = item._id; // 멘토가 신청 받은 id
	const postsData = textValue; // 수락할때 보내줄 데이터,

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();

		// 빈값 체크
		if (!textValue?.message) {
			alert(`항목이 비었습니다.\n다시 한번 확인해주세요.`);
		} else {
			// 유저 작성한 신청서 post로 전달
			trigger({
				method: 'post',
				path: `/portfolios/mentor/respondToMentoringRequest/${portfolioId}/${requestId}`,
				data: postsData,
				shouldFetch: true,
			});

			alert('거절되었습니다.');
			navigate('/mypage');
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
