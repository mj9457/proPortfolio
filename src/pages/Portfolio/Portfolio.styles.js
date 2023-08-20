import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../styles/common';

export const PortfolioBox = styled.div`
	${bodyContainer}
	${flexColumn}
	gap: 64px;
`;

export const BannerBox = styled.div`
	margin: 40px 0 0 0;
`;

export const BannerImage = styled.img`
	width: 1080px;
	height: 300px;
`;

export const TitleBox = styled.div`
	margin: 0 0 32px 0;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.lg};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const MentorCardBox = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(4, 1fr);
`;

export const MentorBox = styled.div`
	margin: 0 0 120px 0;
`;

export const MentorTitleBox = styled(TitleBox)`
	${flexAlignCenter}
	justify-content: space-between;
`;

export const Input = styled.input`
	width: 300px;
	height: 42px;
	padding: 0 0 0 12px;
	border: 1px solid rgba(0, 0, 0, 0.1);
`;
