import { styled } from 'styled-components';
import {
	flexColumn,
	flexSpaceBetweenCenter,
} from '../../../../../styles/common';

export const CommentBox = styled.div`
	${flexColumn}
	gap: 24px;
`;

export const TopBox = styled.div`
	${flexSpaceBetweenCenter}
	width: 1080px;
	align-items: flex-end;
`;

export const NamingBox = styled.div`
	${flexColumn}
	gap: 8px;

	& strong {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}

	& span {
		color: ${({ theme }) => theme.PALETTE.gray[300]};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 16px;

	& button {
		background: none;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`;

export const Contents = styled.div`
	line-height: 1.5;
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const Input = styled.input`
	width: 100%;
`;
