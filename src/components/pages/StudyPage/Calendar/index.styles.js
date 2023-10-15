import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-left: 16px;
	position: relative;
`;

export const CalendarContent = styled.div`
	position: absolute;
	left: 0;
	background-color: #fff;
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;
