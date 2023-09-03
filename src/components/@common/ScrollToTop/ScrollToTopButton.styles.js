import styled from 'styled-components';
import { flexCenter } from '../../../styles/common';

export const ScrollButton = styled.button`
	${flexCenter};
	flex-direction: column;
	gap: 8px;
	position: fixed;
	bottom: 100px;
	right: 100px;
	width: 50px;
	height: 50px;
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	border-radius: 2px;
	cursor: pointer;
	transition: opacity 0.3s;
	background-color: ${({ theme }) => theme.PALETTE.white};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	box-sizing: border-box;
	padding: 10px;
	opacity: 0.7;
	svg {
		fill: #7d7d7d;
		width: 9px;
	}

	&.show {
		display: block;
	}
	&:hover {
		background-color: ${({ theme }) => theme.PALETTE.gray[300]};
		color: ${({ theme }) => theme.PALETTE.white};
		svg {
			fill: #ffffff;
		}
	}
`;
