import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

// const Atags = styled.a`
// 	display: inline-block;
// 	vertical-align: middle;
// 	color: black;
// 	&::after {
// 		content: '|';
// 		display: inline-block;
// 		color: black;
// 		padding: 0 10px;
// 	}
// `;
const HandlerButton = styled(Button)`
	${props =>
		props.type === 'primary' && {
			marginRight: '20px',
		}}
`;
export { HandlerButton };
