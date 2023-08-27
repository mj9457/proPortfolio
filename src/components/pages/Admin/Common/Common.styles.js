import { Content } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

const AdminContent = styled(Content)`
	padding: 80px 16px 40px;
	margin-left: 20;
	margin-top: 80;
	width: 100px;
	overflow: initial;
	background: ${props => props.background};
`;
const Removetag = styled.a`
	vertical-align: middle;
	color: black;
`;
const Atag = styled.a`
	color: black;
`;
export { AdminContent, Removetag, Atag };
