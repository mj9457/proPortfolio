import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../../styles/common';

export const Container = styled.div`
	padding: 75px 0;
	${bodyContainer}
`;
export const Title = styled.h2`
	${flexAlignCenter}
	padding-bottom: 32px;
	margin-bottom: 32px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};

	img {
		margin-right: 8px;
	}
`;
export const SelectContainer = styled.div`
	${flexColumn}
	padding: 16px 0 96px;
`;

export const SelectWrapper = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
	margin-bottom: 32px;
	gap: 40px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const SelectBox = styled.div`
	${flexAlignCenter}
	flex: 1;

	.react-datepicker-wrapper {
		/* width: 400px; */
		max-width: 403px;
		margin-left: auto;

		width: 100%;
		height: 42px;
		border: 1px solid #e9e9e9;
		border-radius: 4px;
		padding-left: 5px;

		.react-datepicker__view-calendar-icon input {
			padding-left: 5px;
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
				font-size: ${({ theme }) => theme.FONT_SIZE.sm};
				font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
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
	margin-right: 32px;
	min-width: 86px;
`;

export const Deadline = styled(SelectTitle)`
	font-size: 16px;
	margin-right: 16px;
`;

export const Input = styled.input`
	width: 400px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	margin-left: auto;
	padding: 16px 12px;
`;

export const BasicInfoBox = styled.div``;

export const PostBox = styled.div``;
