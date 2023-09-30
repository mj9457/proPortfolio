import styled from 'styled-components';
import { ModalBackground, flexCenter, flexColumn } from 'styles/common';

export const ModalWrapper = styled.div`
	${ModalBackground}
	${flexCenter};
	z-index: 9999;
`;

export const ModalContentWrapper = styled.div`
	${flexColumn};
	background-color: ${({ theme }) => theme.PALETTE.white};
	position: fixed;
	padding: 30px;
	width: 500px;
	height: 400px;
	border-radius: 10px;

	> button {
		background: none;
		align-self: flex-end;
		margin-bottom: 30px;
		cursor: pointer;

		> img {
			width: 30px;
		}
	}
`;
export const Contents = styled.div`
	font-size: 16px;
	font-weight: 400;
	text-align: center;

	> button {
		background: none;
		cursor: pointer;

		> img {
			width: 80px;
			margin-bottom: 16px;
		}
	}
`;

export const Title = styled.p`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 64px;
`;
