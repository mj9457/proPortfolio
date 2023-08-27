import { styled } from 'styled-components';
import { flexAlignCenter, flexColumn } from '../../../../styles/common';

export const InfoBox = styled.div`
	${flexColumn}
	gap: 16px;
`;

export const Contents = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
`;

export const ContentsTitle = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const Input = styled.input`
	width: 324px;
	height: 42px;
	padding: 0 0 0 12px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;
