import { theme } from 'antd';
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
const PaginationWrap = styled.div`
	text-align: center;
	margin-top: 30px;
`;
const Removetag = styled.a`
	vertical-align: middle;
	color: black;
`;
export { AdminContent, PaginationWrap, Removetag };
