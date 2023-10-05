import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Wrap = styled.div`
	width: 100%;
	${flexCenter};
`;

export const RegisterForm = styled.form`
	margin: 120px 0 150px;
	width: 360px;
	text-align: center;

	> p {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 64px;
	}
	> div {
		${flexColumn};
		text-align: left;
		gap: 16px;
		margin-bottom: 16px;
		> div {
			font-size: ${({ theme }) => theme.FONT_SIZE.sm};
			font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
			color: ${({ theme }) => theme.PALETTE.gray[300]};
		}
		> label {
			font-size: ${({ theme }) => theme.FONT_SIZE.md};
		}
	}
	> button {
		width: 360px;
		margin-top: 32px;
	}
`;

export const NickNameCheck = styled.div`
	display: flex;
	gap: 8px;
	> button {
		width: 80px;
		height: 42px;
		padding: 0;
	}
`;
export const StyledError = styled.span`
	color: ${({ theme }) => theme.PALETTE.mainColor};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
