import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Container = styled.div`
	width: 100%;
	padding: 5px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	${flexAlignCenter}
	justify-content: space-between;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const ArrowButton = styled.button`
	background: transparent;
	cursor: pointer;
	${flexAlignCenter}
`;
