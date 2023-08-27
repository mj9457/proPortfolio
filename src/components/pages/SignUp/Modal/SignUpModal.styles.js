import styled from 'styled-components';

export const ModalWrapper = styled.div`
	display: ${props => (props.open ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.2);
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	position: fixed;
	padding: 30px;
	width: 500px;
	height: 400px;
	border-radius: 10px;
	> button {
		background: none;
		align-self: flex-end;
		margin-bottom: 30px;
		cursor: pointer;
		> img {
			width: 30px;
		}
	}
`;
export const Contents = styled.div`
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	> button {
		background: none;
		cursor: pointer;
		> img {
			width: 80px;
			margin-bottom: 16px;
		}
	}
`;

export const Title = styled.p`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 64px;
`;
