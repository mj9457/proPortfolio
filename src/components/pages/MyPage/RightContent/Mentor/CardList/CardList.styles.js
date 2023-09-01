import styled from 'styled-components';

export const SubContentBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	align-self: stretch;
`;

export const SubContentBar = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
	width: 52.5rem;
	border-bottom: 1px solid #ccc;
`;

export const SubTitleFlexBox = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const SubTitle = styled.div`
	display: flex;
	width: 7.5rem;
	padding: 0.625rem 1rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
`;

export const Clicked = styled.div`
	display: flex;
	width: 7.5rem;
	padding: 0.625rem 1rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	cursor: pointer;
`;

export const NonClicked = styled.div`
	display: flex;
	width: 7.5rem;
	padding: 0.625rem 1rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;

	color: #ccc;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	cursor: pointer;
`;

export const SubContentListBox = styled.div`
	display: flex;
	width: 52.5rem;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	row-gap: 1.25rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;
`;

export const NonSubContentListBox = styled.div`
	display: flex;
	padding: 5rem 0.625rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	align-self: stretch;
`;
