import styled from 'styled-components';

export const DetailOnboradWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	width: 52.5rem;
	margin-bottom: 2.5rem;
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
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-weight: 700;
	line-height: normal;
`;

export const ContentBox = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.69rem;
`;

export const SubTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const SubTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const CheckboxWrap = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const ButtonBox = styled.div``;
