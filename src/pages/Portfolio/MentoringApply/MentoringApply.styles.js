import { styled } from 'styled-components';
import { bodyContainer } from '../../../styles/common';

export const ApplyWrapper = styled.div`
	${bodyContainer}
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	padding: 120px 0;
`;

export const ApplyTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	}
`;

export const ApplyContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`;

export const BasicInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 400px;

	& span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
	}
`;

export const InfoSelect = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
`;

export const InfoSelectTitle = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const Input = styled.input`
	width: 324px;
	height: 42px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 0 0 0 12px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Inputs = styled.input`
	width: 400px;
	height: 42px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 0 0 0 12px;
`;

export const Textarea = styled.textarea`
	width: 400px;
	height: 130px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 12px;
`;

export const Button = styled.button`
	width: 400px;
	height: 48px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	color: ${({ theme }) => theme.PALETTE.fontColor};
`;
