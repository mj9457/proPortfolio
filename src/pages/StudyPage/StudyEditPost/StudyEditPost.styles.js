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

	.react-datepicker-wrapper {
		width: 400px;
		height: 42px;
		border: 1px solid #e9e9e9;
		border-radius: 4px;
		padding-left: 5px;

		.react-datepicker__view-calendar-icon input {
			padding: 0 0 0 5px;
		}

		.react-datepicker__input-container {
			${flexAlignCenter}
			width: 100%;
			height: 100%;
			.react-datepicker__calendar-icon {
				padding: 0;
				position: static;
			}
			> input {
				padding-left: 12px;
				width: 100%;
				border: none;
				font-size: 0.875rem;
				font-family: Pretendard-Regular;
				cursor: pointer;

				&:focus-visible {
					outline: none;
				}
			}
		}
	}
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
	margin-left: auto;
	padding: 16px 12px;
`;

export const BasicInfoBox = styled.div``;

export const PostBox = styled.div``;
