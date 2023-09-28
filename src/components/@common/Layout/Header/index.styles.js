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
	position: relative;
`;

export const ImgBox = styled.div`
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
	}
`;
export const notiWrap = styled.div`
	z-index: 99;
	position: absolute;

	right: 0;
	top: 100px;
	border-radius: 4px;
	background: white;
	box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);

	padding: 32px 32px 64px;
	> div {
		margin-bottom: 16px;
	}
	> div:last-child {
		margin-bottom: 0;
	}
`;
export const notiBox = styled.div`
	cursor: pointer;
	border-bottom: 0.5px solid #e9e9e9;
	padding-bottom: 8px;
	> span {
		color: ${({ theme }) => theme.PALETTE.black};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
	> span:last-child {
		display: block;
		margin-top: 4px;
		color: #c1c1c1;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.extraLight};
	}
	width: 360px;
`;
export const notiTitle = styled.div`
	text-align: center;
	border-bottom: 4px solid #e3edff;
	padding-bottom: 16px;
	margin-bottom: 32px;
	> span {
		color: ${({ theme }) => theme.PALETTE.black};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;
export const notiNone = styled.div`
	margin-top: 32px;
	text-align: center;
	width: 360px;
	> span {
		color: ${({ theme }) => theme.PALETTE.black};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;
