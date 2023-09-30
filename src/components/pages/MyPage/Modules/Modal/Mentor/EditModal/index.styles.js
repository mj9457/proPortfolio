import styled from 'styled-components';
import { ModalBackground, flexCenter, flexColumn } from 'styles/common';

export const Modal = styled.div`
	${flexCenter}
	${ModalBackground}

	& form {
		${flexColumn}
		padding: 60px 100px;
		border-radius: 10px;
		background: ${({ theme }) => theme.PALETTE.white};
		gap: 4rem;
	}
`;

export const InfoWrapper = styled.div`
	${flexColumn}
	width: 400px;
	align-items: center;
	gap: 32px;
`;

export const InfoTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const InfoBox = styled.div`
	width: 100%;
	${flexColumn}
	gap: 2rem;
`;

export const InfoSubTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	& span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		color: #757575;
	}

	& textarea {
		height: 6.25em;
		border: 1px solid rgba(0, 0, 0, 0.1);
		resize: none;

		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const InfoSubTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const ButtonBox = styled.div`
	display: flex;
	gap: 16px;
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
