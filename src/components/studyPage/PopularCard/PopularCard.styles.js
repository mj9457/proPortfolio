import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	border-radius: 1.25rem;
	padding: 1.38rem 1.44rem;
	display: flex;
	flex-direction: column;
	width: 16.125rem;
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
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

const Title = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: 1rem;
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

const Person = styled.p``;

export { Container, ChipBox, ChipText, Title, StackWrapper, StackText, Person };
