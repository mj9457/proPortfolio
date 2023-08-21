import { useState, useEffect, useRef } from 'react';
import * as IM from './InfoViewModal.styles';
import axios from 'axios';

function InfoViewModal({ setInfoModalOpenState }) {
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
				console.log(response.data);
			} catch (err) {
				setError(err);
			}
		}
		getRefuseValue();
	}, []);

	// 모달 끄기
	const closeModal = () => {
		setInfoModalOpenState(false);
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
			setInfoModalOpenState(false);
		}
	};

	return (
		<>
			<IM.Modal ref={wrapperRef}>
				<IM.ModalWrapper>
					<IM.InfoWrapper>
						<IM.InfoTitle>신청 정보</IM.InfoTitle>
						<IM.InfoBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>신청 제목</IM.InfoSubTitle>
								<span>{textareaValue.title}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>질문 내용</IM.InfoSubTitle>
								<span>{textareaValue.title}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>이메일 주소</IM.InfoSubTitle>
								<span>{textareaValue.title}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									포트폴리오 주소
								</IM.InfoSubTitle>
								<span>{textareaValue.title}</span>
							</IM.InfoSubTitleBox>
						</IM.InfoBox>
					</IM.InfoWrapper>
					<IM.ModalButton onClick={closeModal}>닫기</IM.ModalButton>
				</IM.ModalWrapper>
			</IM.Modal>
		</>
	);
}

export default InfoViewModal;
