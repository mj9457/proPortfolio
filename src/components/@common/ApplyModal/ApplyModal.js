import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';

import * as S from './ApplyModal.styles';

import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Button from '../Button/Button';
import MESSAGE from '../../../constants/message';
import { checkModal } from '../../../utils/check';

function ApplyModal(props) {
	// path 가 params 에 있는 아이디 값 - 확인하려면 portfolioPost.js 확인 바람
	const { setIsModalOpen, path } = props;

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
			const { ...newTextValue } = result;
			setTextValue(prev => ({
				...prev,
				...newTextValue,
			}));
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

	// 유저가 입력한 정보 submit
	const handleSubmit = e => {
		e.preventDefault();
		const fail = checkModal(textValue).filter(el => el.checked);

		// 빈값 체크
		if (fail.length > 0) {
			const errorMessage = fail[0].message;
			alert(errorMessage);
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
	};

	// 모달 끄기
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<S.Modal>
			<form onSubmit={handleSubmit}>
				<S.InfoWrapper>
					<S.InfoTitle>신청 정보</S.InfoTitle>

					<S.InfoBox>
						<S.InfoSubTitleBox>
							<S.InfoSubTitle>신청 제목</S.InfoSubTitle>
							<Input
								type="text"
								name="title"
								size={'regular'}
								placeholder="신청 제목을 작성해 주세요!"
								onChange={handleChange}
							/>
						</S.InfoSubTitleBox>

						<S.InfoSubTitleBox>
							<S.InfoSubTitle>질문 내용</S.InfoSubTitle>
							<Textarea
								name={'content'}
								size={'regular'}
								placeholder={
									'질문할 내용을 자세하게 작성해 주세요!'
								}
								onChange={handleChange}
							/>
						</S.InfoSubTitleBox>
						<S.InfoSubTitleBox>
							<S.InfoSubTitle>이메일 주소</S.InfoSubTitle>
							<Input
								type="email"
								name="email"
								size={'regular'}
								placeholder="example@naver.com"
								onChange={handleChange}
							/>
						</S.InfoSubTitleBox>

						<S.InfoSubTitleBox>
							<S.InfoSubTitle>포트폴리오 주소</S.InfoSubTitle>
							<Input
								type="text"
								name="portfolioAddress"
								size={'regular'}
								placeholder="https://github/example"
								onChange={handleChange}
							/>
						</S.InfoSubTitleBox>
					</S.InfoBox>
				</S.InfoWrapper>

				<S.ButtonBox>
					<Button
						variant={'cancel'}
						shape={'default'}
						size={'bigger'}
						onClick={closeModal}
					>
						닫기
					</Button>

					<Button
						variant={'primary'}
						shape={'default'}
						size={'bigger'}
						type="submit"
					>
						완료
					</Button>
				</S.ButtonBox>
			</form>
		</S.Modal>
	);
}

export default ApplyModal;
