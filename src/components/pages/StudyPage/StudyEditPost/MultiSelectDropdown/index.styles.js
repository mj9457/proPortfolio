import styled, { css } from 'styled-components';
import { flexAlignCenter, flexColumn } from 'styles/common';

export const MultiselectContainer = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	/* width: 400px; */
	width: 100%;
	border-radius: 4px;
	cursor: pointer;
`;

export const SelectBox = styled.div`
	position: relative;
	width: 100%;
	border-radius: 4px;

	> select {
		padding-left: 11px;
		width: 100%;
		height: 42px;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
		border-radius: 4px;
	}
`;

export const CheckBoxContainer = styled.div`
	z-index: 10;
	background-color: ${({ theme }) => theme.PALETTE.white};
	${flexColumn}
	/* width: 100%; */
	width: 400px;
	max-height: 150px;
	overflow-y: scroll;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	border-radius: 4px;
	position: absolute;
	display: ${({ $expanded }) => ($expanded ? 'block' : 'none')};
`;
export const Label = styled.label`
	${flexAlignCenter}
	padding: 12px 9px;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

	> input {
		margin-right: 16px;
	}

	&:hover {
		cursor: pointer;
		background: ${({ theme }) => theme.PALETTE.hover};
		transition: all ease 0.5s;
	}
`;

export const OverSelect = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`;

export const SelectedOption = styled.option`
	> div {
		padding: 5px;
		border-radius: 50px;
		background: ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.fontColor};
	}
`;
