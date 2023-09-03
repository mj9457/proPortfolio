import styled from 'styled-components';
import { bodyContainer, flexSpaceBetweenCenter } from '../../styles/common';

export const Wrap = styled.div`
	width: 100%;
`;

export const Content = styled.div`
	${bodyContainer}
`;

export const RecommendMentor = styled.div`
	width: 100%;
	margin-bottom: 64px;
`;
export const RecommendCards = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
`;
export const NewStudy = styled.div`
	width: 100%;
	margin-bottom: 64px;
`;
export const TitleBox = styled.div`
	width: 100%;
	${flexSpaceBetweenCenter};
`;
export const Title = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 32px;
`;
export const ViewAll = styled.a`
	color: ${({ theme }) => theme.PALETTE.mainColor};
	> img {
		margin-left: 8px;
	}
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	cursor: pointer;
	text-decoration: none;
`;

export const SlideStudyCard = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
`;

export const PopularMento = styled.div`
	width: 100%;
	margin-bottom: 100px;
`;

export const PopularCards = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
`;
