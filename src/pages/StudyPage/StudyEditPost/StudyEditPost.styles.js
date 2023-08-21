import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../../styles/common';

export const Container = styled.div`
	padding: 4.7rem 0 7.35rem;
	${bodyContainer}
`;
export const Title = styled.h2`
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
`;
export const SelectContainer = styled.div`
	${flexColumn}
	padding: 1rem 0 6rem;
`;

export const SelectWrapper = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
	margin-bottom: 2rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const SelectBox = styled.div`
	${flexAlignCenter}
`;

export const SelectTitle = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-right: 2rem;
`;

export const Deadline = styled(SelectTitle)`
	font-size: 1rem;
	margin-right: 1rem;
`;

export const Input = styled.input`
	width: 25rem;
	border-radius: 0.25rem;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	padding: 1rem 0.65rem;
	margin-left: auto;
`;

export const PostInput = styled.input`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-size: 1.875rem;
	width: 100%;
	outline: none;
	border: none;
	margin-bottom: 2.58rem;
`;

export const PostTextarea = styled.textarea`
	width: 100%;
	height: 35.5rem;
	padding: 0.75rem;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	margin-bottom: 5.5rem;
	resize: none;
`;

export const BasicInfoBox = styled.div``;

export const PostBox = styled.div``;
