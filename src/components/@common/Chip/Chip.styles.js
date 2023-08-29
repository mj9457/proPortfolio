import styled, { css } from 'styled-components';
import { flexAlignCenter } from '../../../styles/common';

export const ChipBox = styled.div`
	padding: 0.45rem 0.9rem;
	border-radius: 0.9375rem;
	width: fit-content;

	/* 프로젝트*/
	${props =>
		props.classification === '프로젝트' &&
		css`
			background-color: ${({ theme }) => theme.PALETTE.mainColor};
			color: ${({ theme }) => theme.PALETTE.white};
		`}

	/* 스터디 */
  ${props =>
		props.classification === '스터디' &&
		css`
			border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
			color: ${({ theme }) => theme.PALETTE.mainColor};
		`}
`;

export const ChipText = styled.p`
	font-size: 1rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
