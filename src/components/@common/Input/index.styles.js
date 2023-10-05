import { css, styled } from 'styled-components';

const sizeCSS = {
	small: css`
		width: 272px;
	`,
	regular: css`
		width: 324px;
	`,
	medium: css`
		width: 360px;
	`,
	large: css`
		width: 400px;
	`,
};

export const TextInput = styled.input`
	${({ size }) => sizeCSS[size]}
	height: 42px;
	padding: 0 12px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	color: ${({ theme }) => theme.PALETTE.gray[300]};

	&:read-only {
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		pointer-events: none;
	}
`;
