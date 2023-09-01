import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../styles/common';

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

		> label {
			font-size: ${({ theme }) => theme.FONT_SIZE.md};
		}
		> select {
			width: 360px;
			height: 42px;
			padding: 0 12px 0 6px;
			border: 1px solid #0000001a;
			border-radius: 4px;
		}
	}
	> button {
		width: 360px;
		margin-top: 32px;
	}
`;

export const StyledError = styled.span`
	color: ${({ theme }) => theme.PALETTE.mainColor};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
