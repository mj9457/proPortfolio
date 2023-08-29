import styled, { css } from 'styled-components';
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

	${props =>
		props.$recruitsStatus === '모집마감' &&
		css`
			color: ${({ theme }) => theme.PALETTE.gray[300]};
		`}
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

export const PostDetailMainTextBox = styled.div`
	padding-bottom: 135px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	margin-bottom: 32px;
`;

export const PostDetailMainText = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	line-height: 1.4;
	white-space: pre-line;
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

	p {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	gap: 8px;
`;

export const ContactBox = styled.div`
	${flexAlignCenter}
	gap: 5px;

	.material-symbols-outlined {
		padding-top: 3px;
		font-size: 20px;
		cursor: pointer;
	}
`;

export const ContactText = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
`;

export const IconBox = styled.div``;

export const PostDetailBasicItemTitle = styled.div`
	> p {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
	}
`;

export const CommentContainer = styled.div`
	padding: 88px 0 64px;
`;
