import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Contents = styled.div`
	margin: 120px 0 150px;
	display: flex;
	flex-direction: column;
	gap: 50px;
	> img {
		width: 400px;
	}
	> div > p {
		text-align: center;
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};

		+ p {
			margin-top: 8px;
		}
	}
`;
