import { css } from 'styled-components';

export const ModalBackground = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
`;

export const bodyContainer = css`
	margin: 0 auto;
	width: 1080px;
`;

export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexAlignCenter = css`
	display: flex;
	align-items: center;
`;

export const flexColumn = css`
	display: flex;
	flex-direction: column;
`;

export const flexSpaceBetweenCenter = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
