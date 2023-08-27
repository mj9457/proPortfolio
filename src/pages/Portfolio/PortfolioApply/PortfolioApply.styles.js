import { styled } from 'styled-components';
import { bodyContainer, flexColumn } from '../../../styles/common';

export const ApplyBox = styled.div`
	${bodyContainer}
	${flexColumn}
	align-items: center;
	gap: 64px;
	padding: 100px 0;
`;

export const TitleBox = styled.div`
	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.lg};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

export const InfoContentsBox = styled.div`
	${flexColumn}
	width: 400px;
	gap: 40px;
`;

export const ContentsBox = styled.div`
	${flexColumn}
	gap: 32px;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;
