import styled from 'styled-components';
import {
	ModalBackground,
	flexCenter,
	flexColumn,
} from '../../../styles/common';

export const Modal = styled.div`
	${flexCenter}
	${ModalBackground}

	& form {
		${flexColumn}
		padding: 60px 100px;
		border-radius: 10px;
		background: ${({ theme }) => theme.PALETTE.white};
		gap: 32px;
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
	${flexColumn}
	gap: 16px;
`;

export const InfoSubTitleBox = styled(InfoBox)`
	& input {
		height: 42px;
		width: 400px;
		padding: 0 12px;
		border-radius: 4px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};

		color: ${({ theme }) => theme.PALETTE.black};
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

export const CancelButton = styled.button`
	width: 192px;
	height: 48px;
	cursor: pointer;
	border-radius: 4px;
	color: ${({ theme }) => theme.PALETTE.black};
	background: ${({ theme }) => theme.PALETTE.gray[200]};

	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const CompleteButton = styled(CancelButton)`
	background: ${({ theme }) => theme.PALETTE.mainColor};
	color: ${({ theme }) => theme.PALETTE.white};
`;
