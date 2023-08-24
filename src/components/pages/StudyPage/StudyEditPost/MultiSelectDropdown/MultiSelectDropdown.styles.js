import styled, { css } from 'styled-components';
import { flexAlignCenter, flexColumn } from '../../../../../styles/common';

export const MultiselectContainer = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	width: 400px;
	border-radius: 4px;
	cursor: pointer;
`;

export const SelectBox = styled.div`
	position: relative;
	width: 100%;
	border-radius: 4px;

	> select {
		width: 100%;
		height: 42px;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
		border-radius: 4px;
	}
`;

export const CheckBoxContainer = styled.div`
	z-index: 10;
	background-color: ${({ theme }) => theme.PALETTE.white};
	${flexColumn}
	width: 400px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	border-radius: 4px;
	position: absolute;
	/* 애니메이션 주는 경우 ************* */
	/* opacity: ${({ expanded }) => (expanded ? '1' : '0')};
	transition: opacity 0.2s ease; */

	/* 애니메이션 안 주는 경우 ************* */
	display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;
export const Label = styled.label`
	${flexAlignCenter}
	padding: 0.8rem 0.6rem;
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
