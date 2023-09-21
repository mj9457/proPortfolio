import { styled } from 'styled-components';
import { flexCenter, flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const IntroBox = styled.div`
	${flexColumn}
	gap: 32px;

	& strong {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}

	& span {
		line-height: 2;
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}

	& pre {
		line-height: 1.6;
	}
`;

export const IntroContents = styled.div`
	${flexSpaceBetweenCenter}
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const Box = styled.div`
	${flexCenter}
	width: 270px;
	height: 78px;
	flex-direction: column;
	gap: 8px;
	border: 0.5px solid ${({ theme }) => theme.PALETTE.gray[200]};

	& strong {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}

	& p {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`;
