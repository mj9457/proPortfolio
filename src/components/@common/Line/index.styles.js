import { css, styled } from 'styled-components';

const sizeCSS = {
	small: css`
		height: 1px;
		width: 1080px;
	`,
	medium: css`
		height: 2px;
		width: 1080px;
	`,
	height: css`
		width: 1px;
		height: 18px;
	`,
};

export const Lines = styled.div`
	${({ size }) => sizeCSS[size]}

	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
`;
