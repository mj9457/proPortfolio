import styled from 'styled-components';

export const Container = styled.a`
	display: flex;
	width: 200px;
	height: 260px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid #d2d2d2;
	background: #fff;
	margin-top: 32px;
	cursor: pointer;
	text-decoration: none;
`;
export const ProfileImage = styled.img`
	width: 80px;
	height: 80px;
	margin-bottom: 16px;
`;
export const NickName = styled.p`
	color: #151618;
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 16px;
`;
export const Company = styled.p`
	color: #5e5f61;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 8px;
`;
export const Position = styled.p`
	color: #7d7d7d;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	margin-bottom: 8px;
`;

export const Career = styled.p`
	color: #7d7d7d;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
// sdfsdfs
