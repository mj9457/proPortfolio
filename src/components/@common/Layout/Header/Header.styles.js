import styled from 'styled-components';
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

export const NavBar = styled(LoginBar)`
	width: 315px;

	& a {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	}
`;
