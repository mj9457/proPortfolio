import { useState, useEffect, useRef } from 'react';
import * as IM from './InfoViewModal.styles';
import axios from 'axios';
import Input from '../../../../../../../@common/Input/Input';
import Textarea from '../../../../../../../@common/Textarea/Textarea';

// 멘토 - 멘토링 신청서 보기 모달
function InfoViewModal({ setInfoModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState(''); //
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getInfo() {
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
		getInfo();
	}, []);

	// 모달 끄기
	const closeModal = () => {
		setInfoModalOpenState(false);
	};

	return (
		<>
			<IM.Modal>
				<form>
					<IM.InfoWrapper>
						<IM.InfoTitle>신청 정보</IM.InfoTitle>
						<IM.InfoBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>신청 제목</IM.InfoSubTitle>
								<span>{textareaValue.title || undefined}</span>
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
				</form>
			</IM.Modal>
		</>
	);
}

export default InfoViewModal;
