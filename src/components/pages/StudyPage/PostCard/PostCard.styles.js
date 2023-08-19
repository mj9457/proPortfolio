import styled from 'styled-components';
import {
	flexColumn,
	flexAlignCenter,
	flexCenter,
} from '../../../../styles/common';

const S = {
	Container: styled.div`
		cursor: pointer;
		width: 100%;
		/* height: 235px; */
		padding: 1.875rem;
		border: 2px solid ${({ theme }) => theme.PALETTE.gray[100]};
		${flexColumn}
		border-radius: 15px;
	`,

	ChipWrapper: styled.div`
		${flexAlignCenter}
		gap: 8px;
		margin-bottom: 1rem;
	`,

	ChipBox: styled.div`
		background-color: ${({ theme }) => theme.PALETTE.mainColor};
		padding: 0.45rem 0.9rem;
		border-radius: 0.9375rem;
		width: fit-content;
		margin-bottom: 1rem;
	`,

	ChipText: styled.p`
		color: #fff;
		font-size: 1rem;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	`,

	Title: styled.span`
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		margin-bottom: 1.56rem;
	`,

	PostText: styled.p`
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		line-height: 1.5;
		margin-bottom: 25px;
	`,

	BottomBox: styled.div`
		${flexAlignCenter}
		justify-content: space-between;
	`,

	RightBox: styled.div`
		${flexAlignCenter}
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,

	Person: styled.p`
		padding-right: 8px;
		border-right: 1px solid #000;
	`,

	Position: styled.p`
		padding-left: 8px;
	`,

	Day: styled.p`
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
};

export default S;

// const Container = styled.div`
// 	width: 100%;
// 	/* height: 235px; */
// 	padding: 1.875rem;
// 	border: 2px solid ${({ theme }) => theme.PALETTE.gray[100]};
// 	${flexColumn}
// 	border-radius: 15px;
// `;

// const ChipWrapper = styled.div`
// 	${flexAlignCenter}
// 	gap: 8px;
// 	margin-bottom: 1rem;
// `;

// const ChipBox = styled.div`
// 	background-color: ${({ theme }) => theme.PALETTE.mainColor};
// 	padding: 0.45rem 0.9rem;
// 	border-radius: 0.9375rem;
// 	width: fit-content;
// 	margin-bottom: 1rem;
// `;

// const ChipText = styled.p`
// 	color: #fff;
// 	font-size: 1rem;
// 	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
// 	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
// `;

// const Title = styled.span`
// 	font-size: ${({ theme }) => theme.FONT_SIZE.big};
// 	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
// 	margin-bottom: 1.56rem;
// `;

// const PostText = styled.p`
// 	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
// 	line-height: 1.5;
// 	margin-bottom: 25px;
// `;

// const BottomBox = styled.div`
// 	${flexAlignCenter}
// 	justify-content: space-between;
// `;

// const RightBox = styled.div`
// 	${flexAlignCenter}
// 	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
// 	gap: 0.5rem;
// `;

// const Position = styled.p``;

// const Day = styled.p`
// 	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
// `;

// export {
// 	Container,
// 	ChipBox,
// 	ChipText,
// 	ChipWrapper,
// 	Title,
// 	PostText,
// 	BottomBox,
// 	RightBox,
// 	Position,
// 	Day,
// };
