import { useState, useEffect, useRef } from 'react';
import * as RM from './RefuseModal.styles';
import axios from 'axios';
import Textarea from '../../../../../../../@common/Textarea/Textarea';
import useApi from '../../../../../../../../hooks/useApi';

// 멘토 - 멘토링 거절 사유 작성 모달
function RefuseModal({ setRefuseModalOpenState }) {
	const [textValue, setTextValue] = useState({
		refuseContent: '',
	});

	// 유저가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextValue({
			...textValue,
			[name]: value,
		});
	};

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();

		// 빈값 체크
		if (!textValue?.refuseContent) {
			alert(`항목이 비었습니다.\n다시 한번 확인해주세요.`);
		} else {
			// 유저 작성한 신청서 post로 전달
			console.log(textValue);
			const { result, trigger, isLoading, error } = useApi({
				method: 'put',
				path: '/portfolio/mentor/mentoringRequests',
				data: textValue,
				shouldFetch: true,
			});
			console.log(result);

			alert('거절되었습니다.');
			closeModal();
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
									name={'refuseContent'}
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
