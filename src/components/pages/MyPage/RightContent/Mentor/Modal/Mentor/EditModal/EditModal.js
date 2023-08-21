import { useState, useRef, useEffect } from 'react';
import * as EM from './EditModal.styles';

function InfoViewModal({ setEditModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState(''); // text

	// textarea 수정
	const textareaHandle = e => {
		setTextareaValue(e.target.value);
	};

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
			<EM.Modal>
				<EM.ModalWrapper>
					<EM.InfoWrapper>
						<EM.InfoTitle>첨삭 하기</EM.InfoTitle>
						<EM.InfoBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>신청 제목</EM.InfoSubTitle>
								<span>신입입니다. 잘부탁드립니다</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>질문 내용</EM.InfoSubTitle>
								<span>
									안녕하세요. 김현규입니다. 포트폴리오가 잘
									작성되었는지 무언가 부족한 부분은 없는지
									알려주시면 좋겠습니다. 잘부탁드립니다.
								</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>이메일 주소</EM.InfoSubTitle>
								<span>sdfsdfsdfsdf@naver.com</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>
									포트폴리오 주소
								</EM.InfoSubTitle>
								<span>http://github......</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>첨삭 내용</EM.InfoSubTitle>
								<textarea
									value={textareaValue}
									onChange={textareaHandle}
								></textarea>
							</EM.InfoSubTitleBox>
						</EM.InfoBox>
					</EM.InfoWrapper>
					<EM.ButtonBox>
						<EM.CancleButton onClick={closeModal}>
							취소
						</EM.CancleButton>
						<EM.CompleteButton
							onClick={e => {
								console.log('완료된 내용: ' + textareaValue);
								closeModal();
							}}
						>
							완료
						</EM.CompleteButton>
					</EM.ButtonBox>
				</EM.ModalWrapper>
			</EM.Modal>
		</>
	);
}

export default InfoViewModal;
