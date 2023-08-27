import { styled } from 'styled-components';
import { flexColumn } from '../../../styles/common';

export const ButtonBox = styled.div`
	${flexColumn}
	justify-content: space-between;

	& div {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}
`;
