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

export const PopularMento = styled.div`
	& span {
		font-size: 24px;
	}
`;

export const PopularMentoCardWrapper = styled.div`
	display: flex;
`;

export const PopularMentoCard = styled.div`
	display: flex;
	height: 320px;
	padding: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	flex: 1 0 0;
	border-radius: 10px;
	background: #e3edff;
	box-shadow: 1px 4px 4px 0px rgba(67, 108, 255, 0.25);
`;
