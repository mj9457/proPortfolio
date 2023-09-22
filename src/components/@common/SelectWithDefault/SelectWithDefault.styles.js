import styled, { css } from 'styled-components';
import { flexAlignCenter, flexColumn } from '../../../styles/common';

export const Container = styled.div`
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	border-radius: 4px;
	width: 100%;
	height: 42px;
`;

export const SelectDefaultOption = styled.div`
	width: 100%;
	cursor: pointer;
	padding: 12px 14px;
`;

export const SelectDefaultOptionBox = styled.div`
	display: flex;
	align-items: center;
	height: 100%;

	> span {
		cursor: pointer;
	}
`;

export const OptionList = styled.ul`
	width: 100%;
	z-index: 1;
	max-height: 150px;
	overflow-y: scroll;
	position: relative;
	background-color: white;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};

	border-radius: 0 0 4px 4px;
`;

export const Option = styled.li`
	width: 100%;
	padding: 13px 14px;
	cursor: pointer;
	font-weight: 500;
	font-size: 13px;
	border-radius: 4px;

	&:hover {
		background: #f6f6f6;
		transition: all ease 0.3s;
	}
`;
