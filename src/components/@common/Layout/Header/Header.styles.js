import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexCenter,
} from '../../../../styles/common';

export const Header = styled.header`
	${bodyContainer}
	height: 115px;
	padding: 15px 0 20px 0;
`;

export const ImgBox = styled.a`
	${flexCenter}
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100px;
	height: 50px;
`;

export const NavBox = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
`;

export const LoginBar = styled.div`
	${flexCenter}
	gap: 20px;

	& a {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		text-decoration: none;
		cursor: pointer;

		&:visited {
			color: ${({ theme }) => theme.PALETTE.black};
		}
	}
`;

export const NavBar = styled(LoginBar)`
	width: 315px;

	& a {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	}
`;

export const Button = styled.button`
	height: 30px;
	padding: 0 15px;
	border-radius: 4px;
	color: ${({ theme }) => theme.PALETTE.fontColor};
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
