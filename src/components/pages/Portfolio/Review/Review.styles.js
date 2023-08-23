import { styled } from 'styled-components';
import { flexAlignCenter, flexColumn } from '../../../../styles/common';

export const ReviewBox = styled.div`
	margin: 40px 0 10px 0;
	${flexColumn}
	gap: 16px;
`;

export const TopBox = styled.div`
	${flexAlignCenter}
	gap: 8px;

	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};

	& span {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}
`;

export const LastBox = styled.div`
	${flexAlignCenter}
	justify-content: end;
`;

export const CommentBox = styled.div`
	${flexColumn}
	margin-top: 32px;
	gap: 32px;
`;
