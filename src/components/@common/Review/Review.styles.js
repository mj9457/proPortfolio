import { styled } from 'styled-components';
import {
	flexAlignCenter,
	flexColumn,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const ReviewBox = styled.div`
	${flexColumn}
	gap: 16px;
`;

export const SemiTopBox = styled.div`
	margin: 70px 0 10px 0;
	${flexAlignCenter}
	gap: 8px;

	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};

	& span {
		color: ${({ theme }) => theme.PALETTE.gray[300]};
	}
`;

export const LastBox = styled.div`
	${flexAlignCenter}
	justify-content: end;
`;

export const BottomBox = styled.div`
	${flexColumn}
	margin-top: 32px;
	gap: 32px;
`;

export const MiddleBox = styled.div`
	${flexSpaceBetweenCenter}
	width: 1080px;
	align-items: flex-end;
`;

export const CommentBox = styled.div`
	${flexColumn}
	gap: 24px;
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
		color: ${({ theme }) => theme.PALETTE.gray[300]};
		cursor: pointer;
	}
`;

export const Contents = styled.pre`
	width: 1080px;
	white-space: pre-wrap;
	line-height: 1.5;
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const Title = styled.div`
	${flexAlignCenter}
	gap: 8px;
	margin-bottom: 8px;

	p {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}

	span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		color: #ccc;
	}
`;
export const TopBox = styled.div`
	width: 100%;

	textarea {
		width: 100%;
		height: 100px;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
		border-radius: 5px;
		padding: 13px 12px;
		resize: none;
		margin-bottom: 16px;
	}
`;

export const ButtonBox = styled.div`
	text-align: end;
`;
