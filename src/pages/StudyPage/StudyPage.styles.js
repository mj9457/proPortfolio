import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../styles/common';

export const Container = styled.div`
	padding: 75px 0 117px;
	${bodyContainer}
`;

export const PopularContents = styled.div`
	padding-bottom: 10rem;
`;

export const Title = styled.h2`
	margin-bottom: 0.5rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const SubTitle = styled.h3`
	text-indent: 40px;
`;

export const TopBox = styled.div``;

export const PopularCardWrapper = styled.div``;

export const TitleWrapper = styled.div`
	margin-bottom: 2.5rem;
	${flexAlignCenter}
	justify-content: space-between;
`;

export const StudyContents = styled.div``;

export const CategoryList = styled.ul`
	${flexAlignCenter}
	gap: 2rem;
	margin-bottom: 2rem;
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
	gap: 1rem;
`;

export const WritePostButton = styled.div``;

export const CategoryBottomList = styled.div`
	margin-bottom: 3.5rem;
	${flexAlignCenter}
	justify-content: space-between;
`;

export const PostCardContainer = styled.div`
	${flexColumn}
	gap: 32px;
`;

export const CategoryContainer = styled.div``;
