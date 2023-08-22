import styled from 'styled-components';

export const Container = styled.div`
	/* :hover {
		box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
	} */
`;

export const StudyInfoCard = styled.a`
	display: flex;
	width: 530px;
	height: 200px;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	text-decoration: none;
	padding: 30px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.PALETTE.primary[100]};
`;
export const Category = styled.p`
	color: #fff;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	padding: 6px 15px;
	background-color: ${({ theme }) => theme.PALETTE.mainColor};
	border-radius: 15px;
	margin-bottom: 16px;
	width: 80px;
	text-align: center;
`;
export const Title = styled.p`
	color: #000;
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 32px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
`;
export const LanguagesWrapper = styled.div`
	display: flex;
	margin-bottom: 8px;
	gap: 16px;
`;
export const Language = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const DetailInfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	> div {
		display: flex;
		gap: 8px;
		> span {
			color: #7d7d7d;
		}
	}
`;

export const NumberPeople = styled.p`
	color: #5e5f61;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	margin-bottom: 8px;
`;
export const Position = styled.p`
	color: #7d7d7d;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	margin-bottom: 8px;
`;

export const Deadline = styled.p`
	color: #7d7d7d;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
