import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const RegisterForm = styled.form`
	margin: 120px 0 150px;
	width: 360px;
	text-align: center;

	> p {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 64px;
	}
	> div {
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 16px;
		margin-bottom: 16px;

		> label {
			font-size: 16px;
			font-weight: 400;
		}
		> select {
			width: 360px;
			height: 42px;
			padding: 0 12px 0 6px;
			border: 1px solid #0000001a;
			border-radius: 4px;
		}
	}
	> button {
		width: 360px;
		margin-top: 32px;
	}
`;
