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

	& form {
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}
`;

export const UserCard = styled.div`
	display: flex;
	width: 25rem;
	padding: 1.875rem 2.5rem;
	align-items: center;
	gap: 2.5rem;

	border-radius: 0.625rem;
	border: 1px solid #e5e5e5;
	background: var(--grey-white, #fff);
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.16);
`;

export const UserCardImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	#image {
		width: 5rem;
		height: 5rem;
		background:
			url(<path-to-image>),
			lightgray 50% / cover no-repeat;
		border-radius: 100%;
		pointer-events: none;
	}

	#alttext {
		text-align: center;
	}

	& span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}

	& button {
		background: none;
		cursor: pointer;
	}

	& input:nth-child(3) {
		display: none;
	}
`;

export const UserCardInfo = styled.div`
	display: flex;
	height: 3.375rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
`;

export const UserName = styled.div`
	color: #000;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
`;

export const UserEmail = styled.div`
	color: #818181;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const SubTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	& input {
		width: 400px;
		height: 42px;
		padding: 0 12px;
		border-radius: 4px;
		border: 1px solid #e9e9e9;
		font-size: 0.875rem;
	}

	& select {
		width: 400px;
		height: 42px;
		padding: 0 8px;
		border-radius: 4px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`;
export const SubTitle = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;
