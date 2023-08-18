import styled from 'styled-components';
import { bodyContainer } from '../../styles/common';

export const PortfolioContainer = styled.div`
	${bodyContainer}
`;

export const BannerWrapper = styled.div`
	margin: 40px 0 64px 0;
`;

export const BannerImage = styled.img`
	width: 1080px;
	height: 300px;
	border: 1px solid;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 64px;

	& div {
		display: inline-flex;
		align-items: flex-start;
		gap: 16px;
	}
`;

export const Buttons = styled.button`
	display: flex;
	height: 50px;
	padding: 10px 50px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 100px;

	&:hover {
		background: #37f;
		color: white;
	}
`;

export const WriteButtons = styled.button`
	display: inline-flex;
	height: 50px;
	padding: 10px 50px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #000;
	color: white;
`;

export const PopularMento = styled.div``;

export const PopularTitle = styled.div`
	font-size: 24px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin: 0 0 32px 0;
`;

export const PopularMentoCardWrapper = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(4, 1fr);
`;

export const Line = styled.div`
	height: 1px;
	margin: 64px 0;
	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const EveryMentoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	margin: 0 0 19px 0;
`;

export const EveryMento = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const Input = styled.input`
	width: 300px;
	height: 42px;
	padding: 0 0 0 12px;
	border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const EveryMentoContainer = styled.div`
	margin: 0 0 120px 0;
`;
