import { styled } from 'styled-components';

export const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;

	& div {
		display: flex;
		gap: 16px;
	}
`;

export const Button = styled.button`
	height: 50px;
	padding: 10px 50px;
	border-radius: 100px;

	&:hover {
		color: ${({ theme }) => theme.PALETTE.white};
		background: ${({ theme }) => theme.PALETTE.mainColor};
	}
`;

export const WriteButton = styled(Button)`
	border-radius: 10px;
	color: ${({ theme }) => theme.PALETTE.white};
	background: ${({ theme }) => theme.PALETTE.black};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.black};
		background: ${({ theme }) => theme.PALETTE.hover};
	}
`;
