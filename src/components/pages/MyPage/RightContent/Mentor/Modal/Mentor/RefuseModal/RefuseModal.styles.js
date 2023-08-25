import styled from 'styled-components';
import {
	ModalBackground,
	flexCenter,
	flexColumn,
} from '../../../../../../../../styles/common';

export const Modal = styled.div`
	${flexCenter}
	${ModalBackground}
	
	& form {
		${flexColumn}
		padding: 6.25rem;
		border-radius: 0.625rem;
		background: ${({ theme }) => theme.PALETTE.white};
		gap: 2rem;
	}
`;

export const ModalWrapper = styled.form``;

export const InfoWrapper = styled.div`
	${flexColumn}
	width: 100%;
	align-items: center;
	gap: 2rem;
	align-items: center;
	* {
		width: 100%;
	}
`;

export const InfoTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	text-align: center;
`;

export const InfoBox = styled.div`
	${flexColumn}
	gap: 1rem;
`;

export const InfoSubTitleBox = styled(InfoBox)`
	& input {
		height: 42px;
		width: 100%;
		padding: 0 12px;
		border-radius: 4px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};

		color: ${({ theme }) => theme.PALETTE.black};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}

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
