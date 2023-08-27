import { useState } from 'react';
import * as AM from './ApplyModal.styles';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import axios from 'axios';

function ApplyModal({ setInfoModalOpenState, postAddress, action }) {
	// 유저가 입력한 정보 state
	const [textValue, setTextValue] = useState({
		title: '',
		content: '',
		email: '',
		portfolio: '',
	});

	// 유저가 입력한 정보 change
	const handleChange = e => {
		setTextValue({
			...textValue,
			[e.target.name]: e.target.value,
		});
	};

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();

		// 빈값 체크
		if (
			!textValue.title ||
			!textValue.content ||
			!textValue.email ||
			!textValue.portfolio
		) {
			alert(`항목이 비었습니다.\n다시 한번 확인해주세요.`);
		} else {
			// 유저 작성한 신청서 post로 전달
			axios
				.post(postAddress, textValue)
				.then(res => console.log(res))
				.then(alert(`${action} 완료되었습니다.`))
				.then(closeModal);
		}
	};

	// 모달 끄기
	const closeModal = () => {
		setInfoModalOpenState(false);
	};

	return (
		<>
			<AM.Modal>
				<form onSubmit={handleSubmit}>
					<AM.InfoWrapper>
						<AM.InfoTitle>신청 정보</AM.InfoTitle>
						<AM.InfoBox>
							<AM.InfoSubTitleBox>
								<AM.InfoSubTitle>신청 제목</AM.InfoSubTitle>
								<Input
									type="text"
									name="title"
									size={'regular'}
									placeholder="신청 제목"
									onChange={handleChange}
								/>
							</AM.InfoSubTitleBox>
							<AM.InfoSubTitleBox>
								<AM.InfoSubTitle>질문 내용</AM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={
										'질문할 내용을 자세하게 적어주세요!'
									}
									onChange={handleChange}
								/>
							</AM.InfoSubTitleBox>
							<AM.InfoSubTitleBox>
								<AM.InfoSubTitle>이메일 주소</AM.InfoSubTitle>
								<Input
									type="email"
									name="email"
									size={'regular'}
									placeholder="example@naver.com"
									onChange={handleChange}
								/>
							</AM.InfoSubTitleBox>
							<AM.InfoSubTitleBox>
								<AM.InfoSubTitle>
									포트폴리오 주소
								</AM.InfoSubTitle>
								<Input
									type="text"
									name="portfolio"
									size={'regular'}
									placeholder="https://github/example"
									onChange={handleChange}
								/>
							</AM.InfoSubTitleBox>
						</AM.InfoBox>
					</AM.InfoWrapper>
					<AM.ButtonBox>
						<AM.CancelButton onClick={closeModal}>
							닫기
						</AM.CancelButton>
						<AM.CompleteButton type="submit">
							{action}
						</AM.CompleteButton>
					</AM.ButtonBox>
				</form>
			</AM.Modal>
		</>
	);
}

export default ApplyModal;
