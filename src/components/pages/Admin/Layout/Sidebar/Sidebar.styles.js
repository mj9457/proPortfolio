import { Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

const AdminSider = styled(Sider)`
	padding-top: 20px;
	height: 100vh;

	& img {
		width: 100%;
	}
`;
const LogoBox = styled.div`
	margin: 0 auto;
	width: 100px;
	cursor: pointer;
`;
const AdminMenu = styled(Menu)`
	margin-top: 58px;
`;

export { LogoBox, AdminSider, AdminMenu };
