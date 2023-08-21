import { useState, useEffect, useRef } from 'react';
import * as IEM from './InfoEditModal.styles';
import axios from 'axios';

// 멘티 - 멘토링 신청 모달
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
		const { name, value } = e.target;
		setTextValue({
			...textValue,
			[name]: value,
		});
	};

	// 유저가 입력한 정보 submit => post로 서버에 전달
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('https://jsonplaceholder.typicode.com/posts', textValue)
			.then(res => console.log(res))
			.then(alert('수정 완료되었습니다.'));
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
				<form onSubmit={handleSubmit}>
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
						<IEM.CompleteButton type="submit">
							수정
						</IEM.CompleteButton>
					</IEM.ButtonBox>
				</form>
			</IEM.Modal>
		</>
	);
}

export default InfoEditModal;
