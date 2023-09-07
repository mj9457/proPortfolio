import styled from 'styled-components';

export const ContentList = styled.div`
	display: flex;
	width: 52.5rem;
	align-items: flex-end;

	border-bottom: 1px solid #d1d1d1;
`;

export const ContentNumber = styled.div`
	display: flex;
	width: 3.75rem;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const ContentCategory = styled.div`
	display: flex;
	width: 7.5rem;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const ContentTitle = styled.div`
	display: flex;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex: 1 0 0;
	cursor: pointer;
	color: #37f;
`;

export const ContentDate = styled.div`
	display: flex;
	width: 10rem;
	height: 5rem;
	padding: 1.875rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const ButtonBox = styled.div`
	display: flex;
	width: 6.25rem;
	height: 5rem;
	padding: 0.625rem 0rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	flex-shrink: 0;
`;

export const DeleteButton = styled.button`
	display: flex;
	height: 1.875rem;
	padding: 0.3125rem 0.9375rem 0.375rem 0.9375rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	cursor: pointer;

	border-radius: 0.25rem;
	background: #e9e9e9;

	&:hover {
		color: white;
		background: #37f;
	}
`;
