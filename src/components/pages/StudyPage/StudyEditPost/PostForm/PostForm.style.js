import styled from 'styled-components';

export const PostInput = styled.input`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-size: 30px;
	width: 100%;
	outline: none;
	border: none;
	margin-bottom: 41px;
`;

export const PostTextarea = styled.textarea`
	width: 100%;
	height: 568px;
	padding: 12px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	resize: none;
	margin-bottom: 88px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 11px;
	margin-top: 88px;
`;

export const PostBox = styled.div``;

export const Error = styled.span`
	color: ${({ theme }) => theme.PALETTE.error};
	display: block;
	margin-top: 16px;
`;

export const PostInputWrapper = styled.div``;

export const TextareaWrapper = styled.div``;
