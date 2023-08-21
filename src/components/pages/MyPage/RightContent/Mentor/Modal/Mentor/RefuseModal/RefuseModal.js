import { useState, useEffect, useRef } from 'react';
import * as RM from './RefuseModal.styles';

function RefuseModal({ setRefuseModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState(''); // text

	// textarea 수정
	const textareaHandle = e => {
		setTextareaValue(e.target.value);
	};

	// 모달 끄기
	const closeModal = () => {
		setRefuseModalOpenState(false);
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
			setRefuseModalOpenState(false);
		}
	};

	return (
		<>
			<RM.Modal>
				<RM.ModalWrapper>
					<RM.InfoWrapper>
						<RM.InfoTitle>거절 사유 작성</RM.InfoTitle>
						<RM.InfoBox>
							<RM.InfoSubTitleBox>
								<RM.InfoSubTitle>거절사유</RM.InfoSubTitle>
								<textarea
									placeholder="사유를 적어주세요."
									value={textareaValue}
									onChange={textareaHandle}
								></textarea>
							</RM.InfoSubTitleBox>
						</RM.InfoBox>
					</RM.InfoWrapper>
					<RM.ButtonBox>
						<RM.CancleButton onClick={closeModal}>
							취소
						</RM.CancleButton>
						<RM.CompleteButton
							onClick={() => {
								console.log('완료된 내용: ' + textareaValue);
								closeModal();
							}}
						>
							완료
						</RM.CompleteButton>
					</RM.ButtonBox>
				</RM.ModalWrapper>
			</RM.Modal>
		</>
	);
}

export default RefuseModal;
