import styled from 'styled-components';
import {
	bodyContainer,
	flexColumn,
	flexSpaceBetweenCenter,
} from '../../../styles/common';

export const PostBox = styled.div`
	${bodyContainer}
	margin-bottom: 100px;
`;

export const TitleBox = styled.div`
	margin: 64px 0;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.lg};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const ContentsBox = styled.div`
	${flexColumn}
	gap: 32px;
`;

export const MentorBox = styled.div`
	${flexSpaceBetweenCenter}
`;

export const NameBox = styled.div`
	${flexSpaceBetweenCenter}
	gap: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.md};

	& img {
		width: 40px;
		height: 40px;
	}

	& span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}

	& strong {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const Button = styled.button`
	width: 160px;
	height: 50px;
	padding: 0 50px;
	border-radius: 4px;
	color: ${({ theme }) => theme.PALETTE.fontColor};
	background: ${({ theme }) => theme.PALETTE.mainColor};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
