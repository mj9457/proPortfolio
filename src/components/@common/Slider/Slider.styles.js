import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
`;

export const SliderWrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;

export const SlideContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	transition: transform 0.5s ease-in-out;
	> div {
		margin-right: 20px;
	}
`;

export const Controls = styled.div`
	position: absolute;
	width: 102%;
	top: 44%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Button = styled.button`
	background-color: white;
	width: 25px;
	height: 25px;
	border-radius: 100%;
	cursor: pointer;
	box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
	> img {
		width: 30%;
	}
`;
