import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexCenter,
} from '../../../styles/common';

export const Wrapper = styled.div`
	${bodyContainer}
	height: 115px;
	flex-direction: column;
	align-items: center;
	padding: 15px 0 20px 0;
`;

export const ImgWrapper = styled.div`
	${flexCenter}
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100px;
	height: 50px;
`;

export const NavWrapper = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
	align-content: center;
	row-gap: 518px;
	flex-wrap: wrap;
`;

export const NavBar = styled.div`
	display: flex;
	width: 315px;
	justify-content: space-between;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
		cursor: pointer;
	}
`;

export const LoginBar = styled.div`
	${flexCenter}
	gap: 20px;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		cursor: pointer;
	}
`;
