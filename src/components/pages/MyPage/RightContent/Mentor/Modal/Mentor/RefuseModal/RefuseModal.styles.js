import styled from 'styled-components';

export const Modal = styled.div`
	display: flex;
	width: 120rem;
	min-height: 67.5rem;
	heigth: 100vh;
	padding: 0.625rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;

	z-index: 999;

	background: rgba(0, 0, 0, 0.2);

	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	& form {
		display: flex;
		padding: 3.75rem 6.25rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		border-radius: 0.625rem;
		background: var(--grey-white, #fff);
	}
`;

export const ModalWrapper = styled.div``;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

export const InfoTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
`;

export const InfoSubTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	width: 25rem;

	& textarea {
		width: 100%;
		height: 6.25em;
		border: 1px solid rgba(0, 0, 0, 0.1);
		resize: none;
		padding-top: 0.81rem;
		padding-left: 0.75rem;

		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const InfoSubTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};

	& span {
		color: #757575;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	width: 25rem;
	align-items: flex-start;
	gap: 1rem;
`;

export const CancleButton = styled.button`
	width: 12rem;
	height: 3rem;
	flex-shrink: 0;
	cursor: pointer;
	border-radius: 0.25rem;
	background: #e9e9e9;

	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	color: #000;
`;

export const CompleteButton = styled.button`
	width: 12rem;
	height: 3rem;
	flex-shrink: 0;
	background: #37f;
	border-radius: 4px;
	cursor: pointer;

	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	color: #fff;
`;
