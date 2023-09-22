import styled, { css } from 'styled-components';
import { flexAlignCenter } from '../../../styles/common';

export const ChipBox = styled.div`
	padding: 7px 14px;
	border-radius: 15px;
	width: fit-content;

	/* 프로젝트*/
	${props =>
		props.$category === '프로젝트' &&
		css`
			background-color: ${({ theme }) => theme.PALETTE.mainColor};
			color: ${({ theme }) => theme.PALETTE.white};
		`}

	/* 스터디 */
  ${props =>
		props.$category === '스터디' &&
		css`
			border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
			color: ${({ theme }) => theme.PALETTE.mainColor};
		`}
`;

export const ChipText = styled.p`
	font-size: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
