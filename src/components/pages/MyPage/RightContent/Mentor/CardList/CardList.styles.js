import styled from 'styled-components';

export const DetailOnboradWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
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
	color: #000;
	font-family: Pretendard;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
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
	border: 1px solid rgba(204, 204, 204, 0.8);
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
	font-family: Pretendard;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

export const DetailOnboradSubTitleCount = styled.span`
	color: #000;
	font-family: Pretendard;
	font-size: 1.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

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
	width: 100%;
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

export const Clicked = styled.button`
	display: flex;
	width: 7.5rem;
	padding: 0.625rem 1rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	color: #000;
	font-family: Pretendard;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	border-bottom: 1px solid #000;
	cursor: pointer;
	background-color: #fff;
`;

export const NonClicked = styled.button`
	display: flex;
	width: 7.5rem;
	padding: 0.625rem 1rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	color: #ccc;
	font-family: Pretendard;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	cursor: pointer;
	background-color: #fff;
`;

export const SubContentListBox = styled.div`
	display: flex;
	width: 52.5rem;
	justify-content: space-between;
	align-items: flex-start;
	align-content: flex-start;
	row-gap: 1.25rem;
	flex-wrap: wrap;
	min-heigth: 10rem;
`;

export const NonSubContentListBox = styled.div`
	display: flex;
	padding: 5rem 0.625rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	align-self: stretch;
`;
