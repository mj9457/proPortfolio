import { css, styled } from 'styled-components';

const sizeCSS = {
	regular: css`
		width: 400px;
		height: 130px;
	`,
	large: css`
		width: 1077px;
		height: 568px;
	`,
	full: css`
		width: 1080px;
		height: 100px;
	`,
};

export const TextSpace = styled.textarea`
	${({ size }) => sizeCSS[size]}
	padding: 12px;
	border-radius: 4px;
	resize: none;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;
