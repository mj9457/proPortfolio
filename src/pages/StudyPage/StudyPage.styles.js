import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../styles/common';

const Container = styled.div`
	padding: 4.7rem 0 7.35rem;
	${bodyContainer}
`;

const PopularContents = styled.div`
	padding-bottom: 10rem;
`;

const Title = styled.h2`
	margin-bottom: 0.5rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

const SubTitle = styled.h3``;

const TopBox = styled.div``;

const PopularCardWrapper = styled.div`
	/* 
	${flexAlignCenter}
	justify-content: space-between; */
	/* overflow: hidden; */
	/* display: grid;
	grid-template-rows: repeat(4, 1fr); */
	/* gap: 0.98rem; */
`;

const TitleWrapper = styled.div`
	margin-bottom: 2.5rem;
	${flexAlignCenter}
	justify-content: space-between;
`;

const StudyContents = styled.div``;

const CategoryList = styled.ul`
	${flexAlignCenter}
	gap: 2rem;
	margin-bottom: 2rem;
`;

const CategoryItem = styled.button`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	background-color: transparent;
	cursor: pointer;

	&:hover {
		transition: all ease 0.2s;
		color: ${({ theme }) => theme.PALETTE.mainColor};
	}
`;

const PositionCategoryList = styled.ul`
	${flexAlignCenter}
	gap: 1rem;
`;
// 컴포넌트 분리
const PositionCategoryItem = styled.button`
	width: 5.94rem;
	height: 2.312rem;
	text-align: center;
	border-radius: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	cursor: pointer;
	color: ${({ theme }) => theme.PALETTE.white};
	background-color: ${({ theme }) => theme.PALETTE.mainColor};

	&:nth-child(2) {
		background-color: ${({ theme }) => theme.PALETTE.white};
		color: ${({ theme }) => theme.PALETTE.mainColor};
		border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
	}
`;

const WritePostButton = styled.div``;

const CategoryBottomList = styled.div`
	margin-bottom: 3.5rem;
	${flexAlignCenter}
	justify-content: space-between;
`;

const PostCardContainer = styled.div`
	${flexColumn}
	gap: 32px;
`;

export {
	Container,
	Title,
	SubTitle,
	TitleWrapper,
	PopularContents,
	PopularCardWrapper,
	StudyContents,
	CategoryItem,
	CategoryList,
	PositionCategoryList,
	PositionCategoryItem,
	WritePostButton,
	CategoryBottomList,
	PostCardContainer,
	TopBox,
};
