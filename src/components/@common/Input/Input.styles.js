import { css, styled } from 'styled-components';

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
};

export const TextInput = styled.input`
	${({ size }) => sizeCSS[size]}
	height: 42px;
	padding: 0 12px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};

	&:read-only {
		background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		color: ${({ theme }) => theme.PALETTE.gray[300]};
		pointer-events: none;
	}
`;
