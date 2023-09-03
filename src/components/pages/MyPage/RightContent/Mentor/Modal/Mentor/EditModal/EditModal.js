import { useState, useRef, useEffect } from 'react';
import * as EM from './EditModal.styles';
import Textarea from '../../../../../../../@common/Textarea/Textarea';
import useApi from '../../../../../../../../hooks/useApi';

function EditModal({ categoryKey, setEditModalOpenState, item }) {
	const [textareaValue, setTextareaValue] = useState({
		advice: '',
		action: 'complete',
	}); // 작성한 첨삭 내용 (멘토)
	// const [signupData, setSignupData] = useState([]); // 멘토링 신청 정보 (일반 유저)
	// const [mentoringData, setMentoringData] = useState([]); // 멘토링 작성 정보 (멘토)
	// const [error, setError] = useState(null); // 에러 state

	// 멘토가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;
		setTextareaValue({
			...textareaValue,
			[name]: value,
		});
	};

	// 유저 정보 통신(GET)
	const { result, trigger } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 멘토
	const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id

	const requestId = item._id; // 멘토가 신청 받은 id

	const postData = textareaValue; // 수락할때 보내줄 데이터,

	// 멘토가 입력한 정보 submit => post로 서버에 전달
	const handleSubmit = e => {
		e.preventDefault();

		if (e.target[0].value === item.title) {
			alert('변경 내용이 없습니다.');
			closeModal();
		} else {
			// console.log(textareaValue);
			// console.log('🚀 ~ 멘토가 올린 신청 게시글의 id:', portfolioId);
			// console.log('🚀 ~ 멘토가 신청 받은 id: ', requestId);
			// console.log('🚀 ~ 수락할때 보내줄 데이터: ', postData);
			trigger({
				method: 'post',
				path: `/portfolio/mentor/respondToMentoringRequest/${portfolioId}/${requestId}`,
				data: postData,
				shouldFetch: true,
			});
			alert('첨삭 되었습니다.');
			window.location.replace('/mypage');
		}
	};

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
								<span>{item.title}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>질문 내용</EM.InfoSubTitle>
								<span>{item.content}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>이메일 주소</EM.InfoSubTitle>
								<span>{item.email}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>
									포트폴리오 주소
								</EM.InfoSubTitle>
								<span>{item.portfolioAddress}</span>
							</EM.InfoSubTitleBox>
							<EM.InfoSubTitleBox>
								<EM.InfoSubTitle>첨삭 내용</EM.InfoSubTitle>
								<Textarea
									name={'advice'}
									size={'regular'}
									placeholder={'첨삭 내용 작성'}
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
