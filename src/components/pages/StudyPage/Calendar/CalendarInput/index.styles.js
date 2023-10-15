import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	border: 1px solid #e9e9e9;
	border-radius: 4px;
	padding: 10px 14px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	input {
		width: 100%;
		border: none;
		outline: none;
	}

	span {
		cursor: pointer;
		font-size: 20px;
		margin-right: 8px;
	}
`;
