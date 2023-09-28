import { styled } from 'styled-components';
import { flexCenter } from 'styles/common';

export const PaginationBox = styled.div`
	${flexCenter}
	gap: 10px;
`;

export const Number = styled.div`
	margin: 5px;
	padding: 5px 10px;
	cursor: pointer;
	font-size: large;
`;

export const Button = styled.div`
	& img {
		width: 10px;
		height: 12px;
	}
`;
