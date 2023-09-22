import styled, { css } from 'styled-components';
import { flexAlignCenter } from '../../../../styles/common';

export const Container = styled.div``;
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
export const CommentWrapper = styled.div`
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

export const ButtonWrapper = styled.div`
	text-align: end;
`;
