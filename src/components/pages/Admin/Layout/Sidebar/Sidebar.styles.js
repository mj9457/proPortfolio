import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

const AdminSider = styled(Sider)`
	height: 100vh;
	& img {
		width: 140px;
	}
`;
const LogoBox = styled.div`
	margin: 0 auto;
	width: 140px;
`;

export { LogoBox, AdminSider };
