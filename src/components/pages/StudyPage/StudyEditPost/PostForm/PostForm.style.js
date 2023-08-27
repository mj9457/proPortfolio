import styled from 'styled-components';

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
	resize: none;
	margin-bottom: 5.5rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.7rem;
	margin-top: 5.5rem;
`;

export const PostBox = styled.div``;

export const Error = styled.span`
	color: ${({ theme }) => theme.PALETTE.error};
	display: block;
	margin-top: 1rem;
`;

export const PostInputWrapper = styled.div``;

export const TextareaWrapper = styled.div``;
