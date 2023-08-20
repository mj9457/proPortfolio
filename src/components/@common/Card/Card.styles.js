import styled, { css } from 'styled-components';

const backgroundCSS = {
	blueBackground: css`
		background: #e3edff;
		box-shadow: 1px 4px 4px 0px rgba(67, 108, 255, 0.25);
	`,
	whiteBackground: css`
		background-color: ${({ theme }) => theme.PALETTE.hover};
	`,
};

export const PopularCard = styled.a`
	${({ background }) => backgroundCSS[background]}
	display: flex;
	width: 255px;
	height: 320px;
	padding: 20px;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	flex: 1 0 0;
	border-radius: 10px;
	text-decoration: none;

	&:visited {
		color: ${({ theme }) => theme.PALETTE.black};
	}
`;

export const NbrCoach = styled.div`
	text-align: right;
	display: flex;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
`;

export const Name = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
`;

export const ContentSpan = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	color: #7d7d7d;
`;

export const IntroduceLine = styled.div`
	display: flex;
	justify-content: center;

	& span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.light};
		color: ${({ theme }) => theme.PALETTE.black};
	}
`;
