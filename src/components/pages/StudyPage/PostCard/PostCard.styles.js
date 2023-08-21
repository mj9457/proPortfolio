import styled from 'styled-components';
import {
	flexColumn,
	flexAlignCenter,
	flexCenter,
} from '../../../../styles/common';

export const Container = styled.div`
	cursor: pointer;
	width: 100%;
	padding: 1.875rem;
	border: 2px solid ${({ theme }) => theme.PALETTE.gray[100]};
	${flexColumn}
	border-radius: 15px;
`;

export const ChipWrapper = styled.div`
	${flexAlignCenter}
	gap: 8px;
	margin-bottom: 1rem;
`;

export const ChipBox = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	padding: 0.45rem 0.9rem;
	border-radius: 0.9375rem;
	width: fit-content;
	margin-bottom: 1rem;
`;

export const ChipText = styled.p`
	color: #fff;
	font-size: 1rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const Title = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 1.56rem;
`;

export const PostText = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	line-height: 1.5;
	margin-bottom: 25px;
`;

export const BottomBox = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
`;

export const RightBox = styled.div`
	${flexAlignCenter}
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const Person = styled.p`
	padding-right: 8px;
	border-right: 1px solid #000;
`;

export const Position = styled.p`
	padding-left: 8px;
`;

export const Day = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
