import { useState, useRef, useEffect } from 'react';
import * as EM from './EditModal.styles';
import axios from 'axios';
import Textarea from '../../../../../../../@common/Textarea/Textarea';

function EditModal({ categoryKey, setEditModalOpenState }) {
	const [textareaValue, setTextareaValue] = useState({ content: '' }); // 작성한 첨삭 내용 (멘토)
	const [signupData, setSignupData] = useState([]); // 멘토링 신청 정보 (일반 유저)
	const [mentoringData, setMentoringData] = useState([]); // 멘토링 작성 정보 (멘토)
	const [error, setError] = useState(null); // 에러 state

	// 유저가 작성한 신청 정보 받아오기 (GET)
	useEffect(() => {
		async function getSignupData() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1',
				);
				setSignupData(response.data);
			} catch (err) {
				setError(err);
			}
		}
		getSignupData();
	}, []);

	// 멘토가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextareaValue({
			...textareaValue,
			[name]: value,
		});
	};

	// 멘토가 입력한 정보 submit => post로 서버에 전달
	const handleSubmit = e => {
		e.preventDefault();
		if (e.target[0].value === mentoringData.title) {
			alert('변경 내용이 없습니다.');
			closeModal();
		} else {
			axios
				.post(
					'https://jsonplaceholder.typicode.com/posts',
					textareaValue,
				)
				.then(res => console.log(res))
				.then(alert('수정 완료되었습니다.'))
				.then(closeModal);
		}
	};

	// 리뷰 완료처리된 첨삭 내용 불러오기
	if (categoryKey === 'completed') {
		useEffect(() => {
			async function getMentoringData() {
				try {
					const response = await axios.get(
						'https://jsonplaceholder.typicode.com/todos/1',
					);
					setMentoringData(response.data);
					console.log(response.data);
				} catch (err) {
					setError(err);
				}
			}
			getMentoringData();
		}, []);
	}

	// 모달 끄기
	const closeModal = () => {
		setEditModalOpenState(false);
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
								<span>{signupData.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>질문 내용</EM.InfoSubTitle>
								<span>{signupData.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>이메일 주소</EM.InfoSubTitle>
								<span>{signupData.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>
									포트폴리오 주소
								</EM.InfoSubTitle>
								<span>{signupData.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>첨삭 내용</EM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={'첨삭 내용 작성'}
									defaultValue={mentoringData.title}
									onChange={handleChange}
								/>
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
