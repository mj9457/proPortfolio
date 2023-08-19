import styled from 'styled-components';
import { bodyContainer } from '../../styles/common';

export const Wrap = styled.div`
	width: 100%;
`;

export const Content = styled.div`
	${bodyContainer}
`;

export const SlideBanner = styled.div`
	width: 100%;
	height: 300px;
	margin-top: 40px;
	margin-bottom: 64px;

	> img {
		width: 100%;
	}
`;

export const RecommendedMentor = styled.div`
	width: 100%;
	margin-bottom: 64px;
`;
export const RecommendCards = styled.div`
	width: 100%;
	display: flex;
`;
export const NewStudy = styled.div`
	width: 100%;
	margin-bottom: 64px;
`;
export const TitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const Title = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 32px;
`;
export const ViewAll = styled.a`
	color: ${({ theme }) => theme.PALETTE.mainColor};
`;

export const SlideStudyCard = styled.div`
	width: 100%;
	height: 200px;
	background-color: lightgrey;
`;

export const PopularMento = styled.div`
	width: 100%;
	margin-bottom: 100px;
`;
