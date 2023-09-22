import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../../../styles/common';

export const CategoryList = styled.ul`
	${flexAlignCenter}
	gap:32px;
	margin-bottom: 32px;
`;

export const CategoryItem = styled.button`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	background-color: transparent;
	cursor: pointer;

	color: ${({ theme, $isSelected }) =>
		$isSelected ? theme.PALETTE.mainColor : 'black'};

	&:hover {
		transition: all ease 0.2s;
		color: ${({ theme }) => theme.PALETTE.mainColor};
	}
`;

export const PositionCategoryList = styled.ul`
	${flexAlignCenter}
	flex-wrap: wrap;
	gap: 16px;
`;

export const PositionCategoryItem = styled.button`
	padding: 11px 20px;
	text-align: center;
	border-radius: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	cursor: pointer;
	background-color: ${({ theme, $isSelected }) =>
		$isSelected ? theme.PALETTE.mainColor : 'white'};
	color: ${({ theme, $isSelected }) =>
		$isSelected ? 'white' : theme.PALETTE.mainColor};
	border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

	&:hover {
		transition: all ease 0.2s;
		background-color: ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.white};
	}
`;

export const CategoryBottomList = styled.div`
	margin-bottom: 56px;
	${flexAlignCenter}
	justify-content: space-between;
`;

export const PostCardContainer = styled.div`
	${flexColumn}
	gap: 32px;
`;

export const EmptyText = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	color: ${({ theme }) => theme.PALETTE.mainColor};
	margin: 0 auto;
	padding: 100px 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
`;
