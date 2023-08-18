import styled from 'styled-components';

export const Wrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	width: 20%;
`;

export const MainTitle = styled.div`
	color: #000;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	line-height: normal;
`;

export const SubTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

export const History = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #000;
	& button {
		background: white;
		cursor: pointer;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	& button {
		background: white;
		cursor: pointer;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
	}
`;
