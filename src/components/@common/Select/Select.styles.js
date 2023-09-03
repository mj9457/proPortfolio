import { css, styled } from 'styled-components';

const variantCSS = {
	default: css`
		border-radius: 4px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	`,
	none: css`
		border: none;
	`,
};

const sizeCSS = {
	regular: css`
		width: 324px;
	`,
	medium: css`
		width: 360px;
	`,
	large: css`
		width: 400px;
	`,
	full: css`
		width: 415px;
	`,
};

const fontCSS = {
	regular: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	`,

	medium: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	`,
};

export const Selected = styled.select`
	${({ variant }) => variantCSS[variant]}
	${({ font }) => fontCSS[font]}
	${({ size }) => sizeCSS[size]}
	height: 42px;
	padding: 0 8px;
`;
