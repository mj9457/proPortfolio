import styled, { css, keyframes } from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../styles/common';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
	animation: ${fadeIn} 0.3s ease forwards;

	padding: 75px 0 117px;
	${bodyContainer}
`;

export const PopularContents = styled.div`
	padding-bottom: 160px;
`;

export const Title = styled.h2`
	margin-bottom: 8px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const SubTitle = styled.h3`
	text-indent: 40px;
`;

export const TopBox = styled.div``;

export const PopularCardWrapper = styled.div``;

export const TitleWrapper = styled.div`
	margin-bottom: 40px;
	${flexAlignCenter}
	justify-content: space-between;
`;

export const StudyContents = styled.div``;

export const CategoryList = styled.ul`
	${flexAlignCenter}
	gap: 32px;
	margin-bottom: 32px;
`;

export const CategoryItem = styled.button`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	background-color: transparent;
	cursor: pointer;

	&:hover {
		transition: all ease 0.2s;
		color: ${({ theme }) => theme.PALETTE.mainColor};
	}
`;

export const PositionCategoryList = styled.ul`
	${flexAlignCenter}
	gap: 16px;
`;

export const WritePostButton = styled.div``;

export const CategoryBottomList = styled.div`
	margin-bottom: 56px;
	${flexAlignCenter}
	justify-content: space-between;
`;

export const PostCardContainer = styled.div`
	${flexColumn}
	gap: 32px;
`;

export const CategoryContainer = styled.div``;
