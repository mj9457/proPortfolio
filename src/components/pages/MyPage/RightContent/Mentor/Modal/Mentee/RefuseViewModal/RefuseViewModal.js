import { useState, useEffect, useRef } from 'react';
import * as RVM from './RefuseViewModal.styles';

function RefuseViewModal({ setRefuseViewModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState(''); // 서버에 저장된 거절 사유 받아오기

	// 모달 끄기
	const closeModal = () => {
		setRefuseViewModalOpenState(false);
	};

	// 모달창 가장 바깥쪽 태그를 감싸주는 역할
	const wrapperRef = useRef();

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
	const handleClickOutside = event => {
		if (event.target === wrapperRef.current) {
			setRefuseViewModalOpenState(false);
		}
	};

	return (
		<>
			<RVM.Modal ref={wrapperRef}>
				<RVM.ModalWrapper>
					<RVM.InfoWrapper>
						<RVM.InfoTitle>거절 사유</RVM.InfoTitle>
						<RVM.InfoBox>
							<RVM.InfoSubTitleBox>
								<RVM.InfoSubTitle>거절사유</RVM.InfoSubTitle>
								<textarea
									placeholder="거절 사유 입니다."
									value={textareaValue}
								></textarea>
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
				</RVM.ModalWrapper>
			</RVM.Modal>
		</>
	);
}

export default RefuseViewModal;
