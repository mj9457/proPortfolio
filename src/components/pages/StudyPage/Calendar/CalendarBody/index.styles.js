import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 10px;
`;

export const CalendarTable = styled.table`
	width: 100%;
	margin: auto;
`;

export const CalendarTableHeader = styled.thead`
	color: ${({ theme }) => theme.PALETTE.black};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};

	th {
		padding: 7px 5px;
	}
`;

export const CalendarTableBody = styled.tbody``;

export const CalendarCell = styled.td`
	text-align: center;
	padding: 5px;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};

	cursor: pointer;
	${({ $isSelected }) => {
		if ($isSelected) {
			return `
	  background-color: #3377FF;
	  color: #fff;
	`;
		} else {
			return `
	  color: #000;
	`;
		}
	}}
`;
