import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../../styles/common';

export const Container = styled.div`
	${bodyContainer}
	padding-top: 5.25rem;
`;

export const TitleContainer = styled.div`
	${flexAlignCenter}
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-size: 1.875rem;
	margin-bottom: 2.66rem;
`;

// 모집 상태
export const RecruitmentStatus = styled.h3`
	padding-right: 1rem;
	border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	color: ${({ theme }) => theme.PALETTE.mainColor};
`;

export const PostTitle = styled.p`
	padding-left: 1rem;
`;

export const PostInfoContainer = styled.div`
	${flexAlignCenter}
`;

export const UserProfileContainer = styled.div`
	${flexAlignCenter}
	gap: 1rem;
`;

export const UserProfileImage = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 2.5rem;
	border: 1px solid #000;
`;

export const UserName = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	padding-right: 1rem;
	border-right: 1px solid ${({ theme }) => theme.PALETTE.black};
`;

export const Date = styled.p`
	padding-left: 1rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const PostDetailTop = styled.div`
	padding-bottom: 2rem;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const PostDetailBottom = styled.div`
	padding: 4rem 0 8rem;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const PostDetailBasic = styled.div`
	padding-bottom: 8rem;
`;

export const PostDetailMainTextBox = styled.div``;

export const PostDetailMainText = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	line-height: 1.4;
`;

export const PostDetailBottomTitle = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	margin-bottom: 3rem;
`;

export const PostDetailBasicContainer = styled.div`
	display: flex;
	gap: 23rem;
`;

export const PostDetailBasicList = styled.ul`
	${flexColumn}
	gap: 1.7rem;
`;

export const PostDetailBasicItem = styled.li`
	${flexAlignCenter}
	gap: 2rem;

	span {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
	}

	p {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
	}
`;
