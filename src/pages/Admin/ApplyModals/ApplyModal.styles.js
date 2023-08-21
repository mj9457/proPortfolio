import { styled } from 'styled-components';

const ApplyModalWrap = styled.div`
	position: relative;
	background-color: #fff;
	width: 600px;
	margin: 0 auto;
	height: 836px;
	border-radius: 10px;
	padding: 100px 100px 60px;
`;
const ContentArea = styled.div``;
const MainTitle = styled.h2`
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-weight: 700;
	text-align: center;
	margin-bottom: 32px;
`;
const SubTitle = styled.h2`
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-weight: 700;
	text-align: left;
`;
const IconBox = styled.div`
	position: absolute;
	right: 40px;
	top: 40px;
`;
const CloseIcon = styled.i`
	background: url('/assets/img/icons/close-icon.svg') no-repeat;
	display: inline-block;
	width: 20px;
	height: 20px;
`;
const TextArea = styled.div`
	display: inline-block;
	text-align: left;
	margin-right: 16px;
	width: 80px;
	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
		font-weight: 700;
		line-height: normal;
	}
	${props =>
		props.long &&
		`
			width: 100%;
		`}
`;
const TextWrap = styled.div`
	margin-bottom: 34px;

	> span {
		color: #757575;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
		font-weight: 400;
	}
`;
const ImgBox = styled.div`
	width: 260px;
	height: 180px;
	background-color: #fff;
	> img {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
`;
const ButtonArea = styled.div`
	margin-top: 32px;
	> button {
		border-radius: 4px;
		width: 192px;
		height: 48px;
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
	> button:last-child {
		margin-left: 16px;
		background-color: ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.white};
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
	}
`;
export {
	ApplyModalWrap,
	MainTitle,
	SubTitle,
	IconBox,
	CloseIcon,
	ContentArea,
	TextArea,
	TextWrap,
	ImgBox,
	ButtonArea,
};
