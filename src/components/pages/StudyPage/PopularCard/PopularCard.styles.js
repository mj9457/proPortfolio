import styled from 'styled-components';
import { flexAlignCenter } from '../../../../styles/common';

const Container = styled.div`
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	border-radius: 1.25rem;
	padding: 1.38rem 1.44rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-width: 16.125rem;
	height: 12.4375rem;
	cursor: pointer;
`;

const ChipBox = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	padding: 0.45rem 0.9rem;
	border-radius: 0.9375rem;
	width: fit-content;
	margin-bottom: 1rem;
`;

const ChipText = styled.p`
	color: #fff;
	font-size: 1rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

const Title = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	margin-bottom: 2rem;
`;

const StackWrapper = styled.div`
	display: flex;
	margin-bottom: 0.5rem;
`;

const StackText = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	margin-right: 0.5rem;

	&:last-child {
		margin-right: 0;
	}
`;

const BottomBox = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
`;

const RightBox = styled.div`
	${flexAlignCenter}
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

const Person = styled.p`
	padding-right: 8px;
	border-right: 1px solid #000;
`;

const Position = styled.p`
	padding-left: 8px;
`;

const Day = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export {
	Container,
	ChipBox,
	ChipText,
	Title,
	StackWrapper,
	StackText,
	RightBox,
	Person,
	Position,
	Day,
	BottomBox,
};
