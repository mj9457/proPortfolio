import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: flex;
	width: 52.5rem;
	justify-content: space-between;
	align-items: flex-start;
	align-content: flex-start;
	row-gap: 1.25rem;
	flex-wrap: wrap;
`;

export const Wrapper = styled.div`
	display: flex;
	width: 16.875rem;
	padding: 1.25rem;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	flex-shrink: 0;
	border-radius: 0.625rem;
	background: #e3edff;
`;

export const Title = styled.div`
	color: #000;
	font-family: Pretendard;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

export const UserBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const UserInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const UserImage = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 2.5rem;
`;

export const UserName = styled.div`
	color: #000;
	font-family: Pretendard;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const ApplicationTitle = styled.div`
	width: 10rem;
	color: #000;
	font-family: Pretendard;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-decoration-line: underline;
`;

export const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.625rem;
	align-self: stretch;
`;

export const OneButton = styled.button`
	display: flex;
	width: 100%;
	height: 1.875rem;
	padding: 0.3125rem 0.9375rem 0.375rem 0.9375rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	border-radius: 0.25rem;
	border: 1px solid #37f;
	background: #fff;
	cursor: pointer;

	color: #37f;
	text-align: center;
	font-family: Pretendard;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

export const TwoButton = styled.button`
	display: flex;
	width: 6.875rem;
	height: 1.875rem;
	padding: 0.3125rem 0.9375rem 0.375rem 0.9375rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	border-radius: 0.25rem;
	border: 1px solid #37f;
	background: #fff;
	cursor: pointer;

	color: #37f;
	text-align: center;
	font-family: Pretendard;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
