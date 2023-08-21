import { useState, useRef, useEffect } from 'react';
import * as EVM from './EditViewModal.styles';

function InfoViewModal({ setEditModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState(
		'여기에 서버에서 저장된 첨삭 내용을 가져와야함',
	); // text

	// 모달 끄기
	const closeModal = () => {
		setEditModalOpenState(false);
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
			setEditModalOpenState(false);
		}
	};

	return (
		<>
			<EVM.Modal ref={wrapperRef}>
				<EVM.ModalWrapper>
					<EVM.InfoWrapper>
						<EVM.InfoTitle>첨삭 하기</EVM.InfoTitle>
						<EVM.InfoBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>신청 제목</EVM.InfoSubTitle>
								<span>신입입니다. 잘부탁드립니다</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>질문 내용</EVM.InfoSubTitle>
								<span>
									안녕하세요. 김현규입니다. 포트폴리오가 잘
									작성되었는지 무언가 부족한 부분은 없는지
									알려주시면 좋겠습니다. 잘부탁드립니다.
								</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>이메일 주소</EVM.InfoSubTitle>
								<span>sdfsdfsdfsdf@naver.com</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>
									포트폴리오 주소
								</EVM.InfoSubTitle>
								<span>http://github......</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>첨삭 내용</EVM.InfoSubTitle>
								<span value={textareaValue}></span>
							</EVM.InfoSubTitleBox>
						</EVM.InfoBox>
					</EVM.InfoWrapper>
					<EVM.ModalButton onClick={closeModal}>닫기</EVM.ModalButton>
				</EVM.ModalWrapper>
			</EVM.Modal>
		</>
	);
}

export default InfoViewModal;
