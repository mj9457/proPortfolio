import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Layout/Sidebar/Sidebar';
import { Layout } from 'antd';

function AdminLayout() {
	return (
		<>
			<Layout>
				<Sidebar />
				<Outlet />
			</Layout>
		</>
	);
}

export default AdminLayout;
