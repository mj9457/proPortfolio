import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
	bodyContainer,
	flexAlignCenter,
	flexCenter,
	flexColumn,
} from '../../../../styles/common';

export const Header = styled.header`
	${bodyContainer}
	height: 115px;
	padding: 15px 0 20px 0;
	${flexColumn}
	align-items: center;
`;

export const ImgBox = styled.a`
	${flexCenter}
	width: 100px;
	height: 50px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100px;
	height: 50px;
`;

export const NavBox = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
	width: 100%;
`;

export const NavBar = styled.div`
	display: flex;
	justify-content: baseline;
`;

export const NavLinkItem = styled(NavLink)`
	text-decoration: none;
	margin: 0 10px;
	color: ${({ theme }) => theme.PALETTE.black};

	&.active {
		color: ${({ theme }) => theme.PALETTE.mainColor};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const LoginBar = styled.div`
	${flexCenter}
	gap: 20px;

	& a {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		color: ${({ theme }) => theme.PALETTE.black};
		text-decoration: none;
		cursor: pointer;
		> img {
			width: 24px;
		}

		&:visited {
			color: ${({ theme }) => theme.PALETTE.black};
		}
	}
`;
