import { useState, useRef, useEffect } from 'react';
import * as EVM from './EditViewModal.styles';
import axios from 'axios';

// 멘티 - 첨삭 보기 모달
function InfoViewModal({ setEditModalOpenState }) {
	const [mentoringValue, setMentoringValue] = useState([]); // get 요청으로 받은 데이터 담을 state
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getMentoringValue() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1',
				); // axios로 비동기 get으로 받은 데이터
				setMentoringValue(response.data); // get요청으로 받은 데이터 담기
			} catch (err) {
				setError(err); // 에러 state에 담기
			}
		}
		getMentoringValue(); // 해당 컴포넌트가 브라우저에 그려질때 1회실행
	}, []);

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
								<span>{`멘토링 신청 제목${mentoringValue.userId}`}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>질문 내용</EVM.InfoSubTitle>
								<span>
									{`멘토링 신청 질문 내용${mentoringValue.title}`}
								</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>이메일 주소</EVM.InfoSubTitle>
								<span>{`멘토링 신청 이메일${mentoringValue.title}`}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>
									포트폴리오 주소
								</EVM.InfoSubTitle>
								<span>{`멘토링 신청 포트폴리오 주소${mentoringValue.title}`}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>첨삭 내용</EVM.InfoSubTitle>
								<span>{`멘토링 첨삭 내용${mentoringValue.title}`}</span>
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
