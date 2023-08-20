import { styled } from 'styled-components';

export const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 64px;

	& div {
		display: flex;
		gap: 16px;
	}
`;

export const Buttons = styled.button`
	height: 50px;
	padding: 10px 50px;
	border-radius: 100px;

	&:hover {
		color: ${({ theme }) => theme.PALETTE.white};
		background: ${({ theme }) => theme.PALETTE.mainColor};
	}
`;

export const WriteButtons = styled(Buttons)`
	border-radius: 10px;
	color: ${({ theme }) => theme.PALETTE.white};
	background: ${({ theme }) => theme.PALETTE.black};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.black};
		background: ${({ theme }) => theme.PALETTE.white};
	}
`;