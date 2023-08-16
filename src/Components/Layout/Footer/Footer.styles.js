import styled from 'styled-components';
import { bodyContainer } from '../../../styles/common';

export const Wrapper = styled.div`
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 1.875rem 0 2.5rem 0;
`;

export const Container = styled.div`
	${bodyContainer}
`;

export const IntroWrapper = styled.div`
	display: flex;
	padding-left: 0px;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

export const Image = styled.img`
	width: 6.25rem;
	height: 3.125rem;
	cursor: pointer;
`;

export const Intro = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.25rem;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const Line = styled.div`
	width: 67.5rem;
	height: 0.0625rem;
	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
	margin: 1rem 0 1rem 0;
`;

export const IncIntroWrapper = styled.div`
	display: flex;
	padding-left: 0px;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}

	& div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;

		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		}
	}
`;
