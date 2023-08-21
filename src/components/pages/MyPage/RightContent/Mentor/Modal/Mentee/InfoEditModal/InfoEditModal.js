import { useState, useEffect, useRef } from 'react';
import * as IEM from './InfoEditModal.styles';

function InfoEditModal({ setInfoModalOpenState }) {
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
	const handleSubmit = () => {
		alert(JSON.stringify(textValue, null, 2));
		// 여기서 백엔드와 통신(POST로 textValue값 넘겨주기)
	};

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
			<IEM.Modal>
				<IEM.ModalWrapper>
					<IEM.InfoWrapper>
						<IEM.InfoTitle>신청 정보</IEM.InfoTitle>
						<IEM.InfoBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>신청 제목</IEM.InfoSubTitle>
								<input
									type="text"
									name="title"
									placeholder="신입입니다. 잘부탁드립니다"
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>질문 내용</IEM.InfoSubTitle>
								<textarea
									name="content"
									placeholder=" 안녕하세요. 김현규입니다. 포트폴리오가 잘
									작성되었는지 무언가 부족한 부분은 없는지
									알려주시면 좋겠습니다. 잘부탁드립니다."
									onChange={handleChange}
								></textarea>
							</IEM.InfoSubTitleBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>이메일 주소</IEM.InfoSubTitle>
								<input
									type="email"
									name="email"
									placeholder="sdfsdfsdfsdf@naver.com"
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>
									포트폴리오 주소
								</IEM.InfoSubTitle>
								<input
									type="text"
									name="portfolio"
									placeholder="http://github......"
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
						</IEM.InfoBox>
					</IEM.InfoWrapper>
					<IEM.ButtonBox>
						<IEM.CancleButton onClick={closeModal}>
							닫기
						</IEM.CancleButton>
						<IEM.CompleteButton
							onClick={() => {
								handleSubmit();
								closeModal();
							}}
						>
							수정
						</IEM.CompleteButton>
					</IEM.ButtonBox>
				</IEM.ModalWrapper>
			</IEM.Modal>
		</>
	);
}

export default InfoEditModal;
