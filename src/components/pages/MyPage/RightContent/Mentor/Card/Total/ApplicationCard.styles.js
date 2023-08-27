import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: flex;
	width: 16.875rem;
	justify-content: space-between;
	align-items: flex-start;
	align-content: flex-start;
	row-gap: 1.25rem;
	flex-wrap: wrap;
	margin-right: 0.94rem;

	&:nth-child(3n) {
		margin-right: -1px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	width: 16.875rem;
	padding: 1.25rem;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2rem;
	flex-shrink: 0;
	border-radius: 0.625rem;
	background: #e3edff;
`;

export const Title = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
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
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const ApplicationTitle = styled.div`
	width: 10rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	text-decoration-line: underline;
	cursor: pointer;
	overflow: hidden; // 을 사용해 영역을 감출 것
	text-overflow: ellipsis; // 로 ... 을 만들기
	white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
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
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const RefuseButton = styled.button`
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
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};

	&:nth-child(2) {
		color: var(--grey-white, #fff);
		background: #37f;
	}
`;

export const ApplyButton = styled.button`
	display: flex;
	width: 6.875rem;
	height: 1.875rem;
	padding: 0.3125rem 0.9375rem 0.375rem 0.9375rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	border-radius: 0.25rem;
	border: 1px solid #37f;

	color: var(--grey-white, #fff);
	background: #37f;
	cursor: pointer;

	text-align: center;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
