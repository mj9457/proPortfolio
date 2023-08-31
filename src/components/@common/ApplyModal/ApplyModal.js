import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';

import * as AM from './ApplyModal.styles';

import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import MESSAGE from '../../../constants/message';

function ApplyModal(props) {
	// path 가 params 에 있는 아이디 값 - 확인하려면 portfolioPost.js 확인 바람
	const { setInfoModalOpenState, action, path, nowData } = props;

	// 유저가 입력한 정보 state
	const [textValue, setTextValue] = useState({
		status: 'requested',
		email: '',
		portfolioAddress: '',
		title: '',
		content: '',
	});

	// axios 통신 → 화면에 그려주는 작업
	const { result, trigger, isLoading, error } = useApi({
		path: '/portfolio/', // 본인이 신청한 글 볼 수 있는 api
		shouldFetch: true,
	});

	useEffect(() => {
		if (result) {
			setTextValue(prev => ({
				...prev,
				status: 'requested',
				email: result.email,
				portfolioAddress: result.portfolioAddress,
				title: result.title,
				content: result.content,
			}));

			console.log(error);
		}
	}, [result]);

	// 유저가 입력한 정보 change
	const handleChange = e => {
		const { name, value } = e.target;

		setTextValue({
			...textValue,
			[name]: value,
		});
	};

	const { title, content, email, portfolioAddress } = textValue;

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();

		// 빈값 체크
		if (!title || !content || !email || !portfolioAddress) {
			alert(MESSAGE.CHECK.MODAL);
		} else {
			// action 이 수정일 때는 api method 가 put
			if (action === '수정') {
				trigger({
					method: 'put',
					path: `/portfolio/${nowData._id}/mentoringRequests`,
					data: textValue,
				});
				alert(MESSAGE.MYPAGE.EDIT.COMPLETE);
				closeModal();
			} else {
				// action 이 완료일 때는 api method 가 post
				trigger({
					method: 'post',
					path: `/portfolio/${path}/mentoringRequests`,
					data: textValue,
				});
				alert(MESSAGE.APPLY.COMPLETE);
				closeModal();
			}
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
									placeholder="신청 제목을 작성해 주세요!"
									defaultValue={
										result?.title
											? result?.title
											: nowData?.title
									}
									onChange={handleChange}
								/>
							</AM.InfoSubTitleBox>
							<AM.InfoSubTitleBox>
								<AM.InfoSubTitle>질문 내용</AM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={
										'질문할 내용을 자세하게 작성해 주세요!'
									}
									defaultValue={
										result?.content
											? result?.content
											: nowData?.content
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
									defaultValue={
										result?.email
											? result?.email
											: nowData?.email
									}
									onChange={handleChange}
								/>
							</AM.InfoSubTitleBox>
							<AM.InfoSubTitleBox>
								<AM.InfoSubTitle>
									포트폴리오 주소
								</AM.InfoSubTitle>
								<Input
									type="text"
									name="portfolioAddress"
									size={'regular'}
									placeholder="https://github/example"
									defaultValue={
										result?.portfolioAddress
											? result?.portfolioAddress
											: nowData?.portfolioAddress
									}
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
