import styled from 'styled-components';
import { bodyContainer, flexColumn } from '../../../../styles/common';

export const Footer = styled.footer`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 30px 0 40px 0;
`;

export const Container = styled.div`
	${bodyContainer}
`;

export const IntroWrapper = styled.div`
	${flexColumn}
	padding: 0 0 0 10px;
	gap: 16px;
`;

export const Image = styled.img`
	width: 100px;
	height: 50px;
	cursor: pointer;
`;

export const Intro = styled.div`
	${flexColumn}
	gap: 4px;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const Line = styled.div`
	height: 1px;
	margin: 16px 0;
	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const CoIntroWrapper = styled(IntroWrapper)`
	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;
