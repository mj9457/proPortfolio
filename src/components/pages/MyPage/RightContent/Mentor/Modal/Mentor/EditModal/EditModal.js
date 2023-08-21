import { useState, useRef, useEffect } from 'react';
import * as EM from './EditModal.styles';
import axios from 'axios';

function EditModal({ setEditModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState({ content: '' });
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
				console.log(response.data);
			} catch (err) {
				setError(err);
			}
		}
		getMentoringValue();
	}, []);

	// 유저가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextareaValue({
			...textareaValue,
			[name]: value,
		});
	};

	// 유저가 입력한 정보 submit => post로 서버에 전달
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('https://jsonplaceholder.typicode.com/posts', textareaValue)
			.then(res => console.log(res))
			.then(alert('수정 완료되었습니다.'))
			.then(closeModal);
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
				<form onSubmit={handleSubmit}>
					<EM.InfoWrapper>
						<EM.InfoTitle>첨삭 하기</EM.InfoTitle>
						<EM.InfoBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>신청 제목</EM.InfoSubTitle>
								<span>{mentoringValue.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>질문 내용</EM.InfoSubTitle>
								<span>{mentoringValue.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>이메일 주소</EM.InfoSubTitle>
								<span>{mentoringValue.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>
									포트폴리오 주소
								</EM.InfoSubTitle>
								<span>{mentoringValue.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>첨삭 내용</EM.InfoSubTitle>
								<textarea
									name="content"
									value={textareaValue.content}
									placeholder="첨삭 내용 작성"
									onChange={handleChange}
								></textarea>
							</EM.InfoSubTitleBox>
						</EM.InfoBox>
					</EM.InfoWrapper>
					<EM.ButtonBox>
						<EM.CancleButton onClick={closeModal}>
							취소
						</EM.CancleButton>
						<EM.CompleteButton type="submit">
							완료
						</EM.CompleteButton>
					</EM.ButtonBox>
				</form>
			</EM.Modal>
		</>
	);
}

export default EditModal;
