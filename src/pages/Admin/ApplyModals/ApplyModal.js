import { useState } from 'react';
import {
	ApplyModalWrap,
	ButtonArea,
	CloseIcon,
	ContentArea,
	IconBox,
	ImgBox,
	MainTitle,
	SubTitle,
	TextArea,
	TextWrap,
} from './ApplyModal.styles';
// import IMG from 'assets/img/banner/banner01.png';

const ApplyModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<ApplyModalWrap>
				<MainTitle>멘토 전환 신청서</MainTitle>
				<ContentArea>
					<TextWrap>
						<TextArea>
							<SubTitle>이름</SubTitle>
						</TextArea>
						<span>김기범</span>
						<TextWrap></TextWrap>
						<TextArea>
							<SubTitle>닉네임</SubTitle>
						</TextArea>
						<span>엘리스랩</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>이메일주소</SubTitle>
						</TextArea>
						<span>eilce@naver.com</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>직무</SubTitle>
						</TextArea>
						<span>프론트 엔드 개발</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>기업명</SubTitle>
						</TextArea>
						<span>엘리스</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>경력</SubTitle>
						</TextArea>
						<span>3년차</span>
					</TextWrap>
					<TextWrap>
						<TextArea long>
							<SubTitle>사원증 및 재직증명서</SubTitle>
						</TextArea>
					</TextWrap>
					<ImgBox>
						<img
							src="/assets/img/banner/banner01.png"
							onClick={() => {
								console.log('CLICK');
							}}
						/>
					</ImgBox>
					<ButtonArea>
						<button>거절</button>
						<button>승인</button>
					</ButtonArea>
				</ContentArea>
				<IconBox>
					<CloseIcon />
				</IconBox>
			</ApplyModalWrap>
		</div>
	);
};
export default ApplyModal;
