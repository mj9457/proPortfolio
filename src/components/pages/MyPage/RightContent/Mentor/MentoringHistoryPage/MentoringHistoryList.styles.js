import styled from 'styled-components';

export const DetailOnboradWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	width: 100%;
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

export const ContentList = styled.div`
	display: flex;
	width: 52.5rem;
	align-items: flex-end;

	border-bottom: 1px solid #d1d1d1;
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

export const ContentNumber = styled.div`
	display: flex;
	width: 3.75rem;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const ContentCategory = styled.div`
	display: flex;
	width: 7.5rem;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const ContentTitle = styled.div`
	display: flex;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex: 1 0 0;
	text-decoration-line: underline;
	cursor: pointer;
`;

export const ContentDate = styled.div`
	display: flex;
	width: 10rem;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const ButtonBox = styled.div`
	display: flex;
	width: 6.25rem;
	height: 5rem;
	padding: 0.625rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const DeleteButton = styled.button`
	display: flex;
	height: 1.875rem;
	padding: 0.3125rem 0.9375rem 0.375rem 0.9375rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	cursor: pointer;

	border-radius: 0.25rem;
	background: #e9e9e9;
`;
