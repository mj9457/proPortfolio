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
	height: 9.875rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	align-self: stretch;
`;

export const MainTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

export const DetailOnborad = styled.div`
	display: flex;
	height: 5.625rem;
	padding: 1.875rem 3.75rem;
	justify-content: center;
	align-items: center;
	gap: 6.25rem;
	flex-shrink: 0;
	align-self: stretch;

	border-radius: 0.625rem;
	border: 1px solid #000000;
`;

export const DetailOnboradBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25rem;
`;

export const DetailOnboradSubTitle = styled.span`
	width: 5rem;
	color: #616161;
	text-align: center;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.light};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;

export const DetailOnboradSubTitleCount = styled.span`
	color: #000;
	font-family: Pretendard;
	font-size: 1.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	// font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-size: 1.875rem;
`;
