import { styled } from 'styled-components';
import { bodyContainer } from 'styles/common';
import Input from 'components/@common/Input';

const Container = styled.div`
	${bodyContainer}
	padding-top: 5.25rem;
`;
const ApplyCard = styled.div`
	width: 400px;
	height: 489px;
	text-align: center;
	margin: 0 auto;
`;
const Title = styled.h2`
	line-height: normal;
	margin-bottom: 0.5rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	margin-bottom: 64px;
`;
const SubTitle = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	text-align: left;
`;
const ContentArea = styled.div`
	text-align: left;
	> div:nth-child(2) {
		margin-top: 32px;
	}
	> div:nth-child(3) {
		margin-bottom: 40px;
	}
`;
const ContentBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	margin-top: 16px;
	> span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

const ImageBox = styled.div`
	margin-top: 32px;
	display: flex;
	align-items: center;
	gap: 16px;
	> span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		width: 60px;
	}
	> input {
		width: 228px;
		pointer-events: none;
	}
	> input:nth-child(4) {
		display: none;
	}
`;
const FileButton = styled.button`
	width: 80px;
	height: 42px;
	background-color: #585858;
	border-radius: 4px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	color: ${({ theme }) => theme.PALETTE.white};
	cursor: pointer;
`;
const ButtonArea = styled.div`
	margin-top: 64px;
	> button {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
	> button + button {
		margin-left: 16px;
	}
`;
const Button = styled.button`
	width: 160px;
	height: 50px;
	padding: 0 50px;
	border-radius: 4px;
	color: ${({ theme }) => theme.PALETTE.fontColor};
	background: ${({ theme }) => theme.PALETTE.mainColor};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export {
	Container,
	ApplyCard,
	Title,
	ContentArea,
	SubTitle,
	ContentBox,
	ImageBox,
	FileButton,
	ButtonArea,
	Button,
};
