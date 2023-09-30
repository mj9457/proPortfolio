import styled, { css, keyframes } from 'styled-components';
import { flexColumn, flexAlignCenter } from 'styles/common';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
	cursor: pointer;
	width: 100%;
	padding: 30px;
	border: 2px solid ${({ theme }) => theme.PALETTE.gray[100]};
	${flexColumn}
	border-radius: 15px;
	opacity: 0;
	animation: ${fadeIn} 0.7s ease forwards;
	a {
		text-decoration: none;
		color: inherit;
	}
`;

export const ChipWrapper = styled.div`
	${flexAlignCenter}
	gap: 8px;
	margin-bottom: 16px;
`;

export const ChipBox = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	padding: 7px 14px;
	border-radius: 15px;
	width: fit-content;

	${props =>
		props.$recruitsStatus === '모집마감' &&
		css`
			background-color: ${({ theme }) => theme.PALETTE.gray[100]};
		`}
`;

export const ChipText = styled.p`
	color: #fff;
	font-size: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

	${props =>
		props.$recruitsStatus === '모집마감' &&
		css`
			color: ${({ theme }) => theme.PALETTE.gray[300]};
		`}
`;

export const Title = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 25px;
	display: block;
`;

export const PostText = styled.p`
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;

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
	padding: 0 8px;
	border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
	color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const PositionBox = styled.div`
	${flexAlignCenter}

	&:first-of-type >p {
		padding-left: 0;
	}

	&:last-of-type > p {
		border: none;
	}
`;

export const Day = styled.div`
	${flexAlignCenter};
	gap: 8px;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
