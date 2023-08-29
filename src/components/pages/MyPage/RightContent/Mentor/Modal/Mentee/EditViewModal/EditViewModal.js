import { useState, useRef, useEffect } from 'react';
import * as EVM from './EditViewModal.styles';
import axios from 'axios';

// 멘티 - 첨삭 보기 모달
function InfoViewModal({ setEditModalOpenState, item }) {
	const [mentoringValue, setMentoringValue] = useState([]); // get 요청으로 받은 데이터 담을 state
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getMentoringValue() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1',
				);
				setMentoringValue(response.data);
			} catch (err) {
				setError(err);
			}
		}
		getMentoringValue();
	}, []);

	// 모달 끄기
	const closeModal = () => {
		setEditModalOpenState(false);
	};

	return (
		<>
			<EVM.Modal>
				<form>
					<EVM.InfoWrapper>
						<EVM.InfoTitle>첨삭 하기</EVM.InfoTitle>
						<EVM.InfoBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>신청 제목</EVM.InfoSubTitle>
								{/* <span>{`멘토링 신청 제목${mentoringValue.userId}`}</span> */}
								<span>{item.title}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>질문 내용</EVM.InfoSubTitle>
								{/* <span>{`멘토링 신청 질문 내용${mentoringValue.title}`}</span> */}
								<span>{item.body}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>이메일 주소</EVM.InfoSubTitle>
								{/* <span>{`멘토링 신청 이메일${mentoringValue.title}`}</span> */}
								<span>{item.userId}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>
									포트폴리오 주소
								</EVM.InfoSubTitle>
								{/* <span>{`멘토링 신청 포트폴리오 주소${mentoringValue.title}`}</span> */}
								<span>{item.id}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>첨삭 내용</EVM.InfoSubTitle>
								{/* <span>{`멘토링 첨삭 내용${mentoringValue.title}`}</span> */}
								<span>{item.body}</span>
							</EVM.InfoSubTitleBox>
						</EVM.InfoBox>
					</EVM.InfoWrapper>
					<EVM.ModalButton onClick={closeModal}>닫기</EVM.ModalButton>
				</form>
			</EVM.Modal>
		</>
	);
}

export default InfoViewModal;
