import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../../styles/common';

export const Wrap = styled.div`
	width: 100%;
	${flexCenter};
`;

export const Contents = styled.div`
	margin: 120px 0 150px;
	${flexColumn};
	gap: 50px;
	> img {
		width: 400px;
	}
	> div > p {
		text-align: center;
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

		+ p {
			margin-top: 8px;
		}
	}
`;
