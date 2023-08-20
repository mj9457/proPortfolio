import styled from 'styled-components';
import { bodyContainer, flexColumn } from '../../../../styles/common';

export const Footer = styled.footer`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 30px 0 40px 0;
`;

export const Container = styled.div`
	${bodyContainer}
	${flexColumn}
	gap: 16px;
`;

export const IntroBox = styled.div`
	${flexColumn}
	padding: 0 0 0 10px;
	gap: 16px;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const Image = styled.img`
	width: 100px;
	height: 50px;
	cursor: pointer;
`;

export const Intro = styled.div`
	${flexColumn}
	gap: 4px;
`;
