import { styled } from 'styled-components';
import { bodyContainer, flexColumn } from '../../../styles/common';

export const ApplyBox = styled.div`
	${bodyContainer}
	${flexColumn}
	align-items: center;
	gap: 64px;
	padding: 120px 0;
`;

export const TitleBox = styled.div`
	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.lg};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const InfoContentsBox = styled.div`
	${flexColumn}
	width: 400px;
	gap: 40px;
`;

export const ContentsBox = styled.div`
	${flexColumn}
	gap: 32px;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const Inputs = styled.input`
	height: 42px;
	padding: 0 0 0 12px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const Button = styled.button`
	height: 48px;
	border-radius: 4px;
	color: ${({ theme }) => theme.PALETTE.fontColor};
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
`;
