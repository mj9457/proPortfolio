import styled from 'styled-components';
import {
	ModalBackground,
	flexCenter,
	flexColumn,
} from '../../../../../../../styles/common';

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
`;

export const InfoSubTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const ButtonBox = styled.div`
	display: flex;
	gap: 16px;
`;

export const ModalButton = styled.button`
	width: 25rem;
	height: 3rem;
	flex-shrink: 0;
	background: #37f;
	border-radius: 4px;
	cursor: pointer;

	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	color: #fff;
`;
