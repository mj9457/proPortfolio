import styled, { css } from 'styled-components';
import { flexCenter, flexColumn } from '../../../../styles/common';

const variantCSS = {
	blue: css`
		background: ${({ theme }) => theme.PALETTE.primary[100]};
		box-shadow: 1px 4px 4px 0px rgba(67, 108, 255, 0.25);
	`,

	white: css`
		background-color: ${({ theme }) => theme.PALETTE.hover};
	`,
};

export const PopularCard = styled.a`
	${({ variant }) => variantCSS[variant]}
	${flexColumn}
	width: 255px;
	height: 320px;
	padding: 20px;
	justify-content: center;
	gap: 16px;
	border-radius: 10px;
	text-decoration: none;
	color: ${({ theme }) => theme.PALETTE.black};

	&:visited {
		color: ${({ theme }) => theme.PALETTE.black};
	}

	&:hover {
		transform: scale(1.05);
		transition: 0.5s;
	}
`;

export const CoachNumBox = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ImgBox = styled.div`
	${flexCenter}

	& img {
		width: 80px;
		height: 80px;
		border-radius: 80px;
	}
`;

export const ContentsBox = styled.div`
	${flexColumn}
	gap: 16px;
	align-items: center;
`;

export const Name = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const Contents = styled(ContentsBox)`
	gap: 8px;
`;

export const ContentSpan = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const TitleBox = styled.div`
	${flexCenter}

	& span {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.light};
		color: ${({ theme }) => theme.PALETTE.black};
	}
`;
