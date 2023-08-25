import { useState, useEffect, useRef } from 'react';
import * as RVM from './RefuseViewModal.styles';
import axios from 'axios';
import Textarea from '../../../../../../../@common/Textarea/Textarea';

// 멘티 - 거절 사유 보기 모달
function RefuseViewModal({ setRefuseModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState(''); // 서버에 저장된 거절 사유 받아오기
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getRefuseValue() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1',
				);
				setTextareaValue(response.data);
			} catch (err) {
				setError(err);
			}
		}
		getRefuseValue();
	}, []);

	// 모달 끄기
	const closeModal = () => {
		setRefuseModalOpenState(false);
	};

	return (
		<>
			<RVM.Modal>
				<form>
					<RVM.InfoWrapper>
						<RVM.InfoTitle>거절 사유</RVM.InfoTitle>
						<RVM.InfoBox>
							<RVM.InfoSubTitleBox>
								<RVM.InfoSubTitle>거절사유</RVM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={'거절 사유 입니다.'}
									value={
										textareaValue.title === undefined
											? ''
											: `거절 사유: ${textareaValue.title}`
									}
									readOnly
								/>
							</RVM.InfoSubTitleBox>
						</RVM.InfoBox>
					</RVM.InfoWrapper>
					<RVM.ButtonBox>
						<RVM.CancleButton onClick={closeModal}>
							닫기
						</RVM.CancleButton>
						<RVM.CompleteButton onClick={closeModal}>
							완료
						</RVM.CompleteButton>
					</RVM.ButtonBox>
				</form>
			</RVM.Modal>
		</>
	);
}

export default RefuseViewModal;
