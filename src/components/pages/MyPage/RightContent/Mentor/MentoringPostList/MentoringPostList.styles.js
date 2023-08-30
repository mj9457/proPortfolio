import styled from 'styled-components';

export const DetailOnboradWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	width: 52.5rem;
`;

export const MainTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	align-self: stretch;
`;

export const MainTitle = styled.div`
	color: #000;
	font-family: Pretendard;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-weight: 700;
	line-height: normal;
`;

export const SubTitle = styled.div`
	color: #000;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const ContentBox = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

export const ContentListBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-top: 1px solid #000;

	* {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const NothingContentList = styled.div`
	display: flex;
	width: 52.5rem;
	padding: 5rem 0.625rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;

	border-top: 1px solid #000;
`;
