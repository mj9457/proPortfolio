import styled, { css } from 'styled-components';
import { flexCenter } from '../../../styles/common';

export const IndicatorContainer = styled.div`
	position: absolute;
	bottom: -32px;
	${flexCenter};
	width: 100%;
`;

export const Indicator = styled.button`
	width: 8px;
	height: 8px;
	margin: 0 5px;
	padding: 0;
	background-color: ${({ $active }) => ($active ? '#3377FF' : '#C8C8C8')};
	border: 1px solid ${({ $active }) => ($active ? '#3377FF' : '#C8C8C8')};
	border-radius: 50%;
	cursor: pointer;
	outline: none;
`;

export const SliderContainer = styled.div`
	position: relative;
	width: 1080px;
	height: 300px;
	margin-bottom: 64px;
`;

export const SliderItem = styled.div`
	position: absolute;
	top: 0;
	left: 100%;
	display: none;
	width: 1080px;
	height: 300px;
	overflow: hidden;
	transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	${({ $active }) =>
		$active &&
		css`
			left: 0;
			display: block;
		`}
	${({ prev }) =>
		prev &&
		css`
			left: -100%;
		`}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
