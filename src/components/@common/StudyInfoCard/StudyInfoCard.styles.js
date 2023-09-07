import styled, { css } from 'styled-components';
import { flexColumn } from '../../../styles/common';

const backgroundCSS = {
	whiteBackground: css`
		background: ${({ theme }) => theme.PALETTE.white};
		border: 2px solid ${({ theme }) => theme.PALETTE.gray[100]};
		width: 254px;
	`,

	lightBlueBackground: css`
		background-color: ${({ theme }) => theme.PALETTE.primary[100]};
		width: 530px;
	`,
};

export const Container = styled.div`
	box-sizing: border-box;
	&:hover {
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
	}
	border-radius: 10px;
	a {
		text-decoration: none;
	}
`;

export const StudyInfoCard = styled.div`
	${({ $background }) => backgroundCSS[$background]}
	${flexColumn};
	justify-content: center;
	cursor: pointer;
	text-decoration: none;
	border-radius: 10px;
	box-sizing: border-box;
	height: 200px;
	padding: 20px;
	min-width: 254px;
`;

export const ChipBox = styled.div`
	display: flex;
	gap: 8px;
`;

export const StatusChip = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	padding: 0.45rem 0.9rem;
	border-radius: 0.9375rem;
	width: fit-content;

	${props =>
		props.$recruitsStatus === '모집마감' &&
		css`
			background-color: ${({ theme }) => theme.PALETTE.gray[200]};
		`}
`;

export const StatusText = styled.p`
	color: #fff;
	font-size: 1rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

	${props =>
		props.$recruitsStatus === '모집마감' &&
		css`
			color: ${({ theme }) => theme.PALETTE.gray[300]};
		`}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin: 16px 0;
	max-width: 100%;
	line-height: 20px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
export const Position = styled.p`
	color: #7d7d7d;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	margin-bottom: 16px;
	height: 30px;
	line-height: 16px;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const DetailInfoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> div {
		display: flex;
		gap: 6px;
		> span {
			color: #7d7d7d;
		}
	}
`;

export const Process = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	color: #000;
`;

export const NumberPeople = styled.p`
	color: #000;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	margin-bottom: 8px;
`;

export const Deadline = styled.p`
	color: #5e5f61;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
