import { useState } from 'react';
import * as IEM from './InfoEditModal.styles';
import Textarea from '../../../../../../@common/Textarea/Textarea';
import Input from '../../../../../../@common/Input/Input';
import useApi from '../../../../../../../hooks/useApi';

function InfoEditModal({ setInfoModalOpenState, nowData }) {
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
			// 유저 작성한 신청서 put로 전달
			const { result, trigger, isLoading, error } = useApi({
				method: 'put',
				path: `/portfolio/${nowData.userId}/mentoringRequests`,
				data: textValue,
			});
		}
	};

	// 모달 끄기
	const closeModal = () => {
		setInfoModalOpenState(false);
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
								<Input
									type="text"
									name="title"
									size={'regular'}
									placeholder="신청 제목"
									defaultValue={nowData.title}
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>질문 내용</IEM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={
										'질문할 내용을 자세하게 적어주세요!'
									}
									defaultValue={nowData.content}
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>이메일 주소</IEM.InfoSubTitle>
								<Input
									type="email"
									name="email"
									size={'regular'}
									placeholder="example@naver.com"
									defaultValue={nowData.email}
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
							<IEM.InfoSubTitleBox>
								<IEM.InfoSubTitle>
									포트폴리오 주소
								</IEM.InfoSubTitle>
								<Input
									type="text"
									name="portfolio"
									size={'regular'}
									placeholder="https://github/example"
									defaultValue={nowData.portfolioAddress}
									onChange={handleChange}
								/>
							</IEM.InfoSubTitleBox>
						</IEM.InfoBox>
					</IEM.InfoWrapper>
					<IEM.ButtonBox>
						<IEM.CancelButton onClick={closeModal}>
							닫기
						</IEM.CancelButton>
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
