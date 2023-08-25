import { useState, useEffect, useRef } from 'react';
import * as RM from './RefuseModal.styles';
import axios from 'axios';

// 멘토 - 멘토링 거절 사유 작성 모달
function RefuseModal({ setRefuseModalOpenState }) {
	const [textValue, setTextValue] = useState({
		content: '',
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
			.then(res => {
				console.log(res.data);
				alert(`거절되었습니다. 사유는 ${res.data.content}입니다.`);
				closeModal();
			});
	};

	// 모달 끄기
	const closeModal = () => {
		setRefuseModalOpenState(false);
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
			setRefuseModalOpenState(false);
		}
	};

	return (
		<>
			<RM.Modal>
				<form onSubmit={handleSubmit}>
					<RM.InfoWrapper>
						<RM.InfoTitle>거절 사유 작성</RM.InfoTitle>
						<RM.InfoBox>
							<RM.InfoSubTitleBox>
								<RM.InfoSubTitle>거절사유</RM.InfoSubTitle>
								<textarea
									placeholder="사유를 적어주세요."
									name="content"
									onChange={handleChange}
								></textarea>
							</RM.InfoSubTitleBox>
						</RM.InfoBox>
					</RM.InfoWrapper>
					<RM.ButtonBox>
						<RM.CancelButton onClick={closeModal}>
							취소
						</RM.CancelButton>
						<RM.CompleteButton type="submit">
							완료
						</RM.CompleteButton>
					</RM.ButtonBox>
				</form>
			</RM.Modal>
		</>
	);
}

export default RefuseModal;
