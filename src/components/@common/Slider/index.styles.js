import styled from 'styled-components';
import { flexCenter, flexSpaceBetweenCenter } from '../../../styles/common';

export const Wrap = styled.div`
	width: 100%;
	position: relative;
	${flexCenter};
`;

export const SliderWrapper = styled.div`
	width: 100%;
`;

export const SlideContainer = styled.div`
	display: flex;
	justify-content: flex-start;

	> div {
		margin-right: 19px;
	}
`;

export const Controls = styled.div`
	position: absolute;
	width: 102%;
	top: 44%;
	${flexSpaceBetweenCenter};
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.PALETTE.white};
	width: 25px;
	height: 25px;
	border-radius: 100%;
	cursor: pointer;
	box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
	> img {
		width: 30%;
	}
`;
