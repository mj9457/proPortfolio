import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Layout/Sidebar/Sidebar';
import { Layout } from 'antd';
import useApi from '../../../hooks/useApi';
import ErrorFallback from '../../@common/Error/ErrorFallback';

function AdminLayout() {
	const { result, error } = useApi({
		path: '/user',
		shouldFetch: true,
	});
	const [currentRole, setCurrentRole] = useState();
	useEffect(() => {
		if (result) {
			setCurrentRole(result.role);
		}
	}, [result, currentRole]);
	console.log(currentRole);
	if (currentRole === 'admin') {
		return (
			<Layout>
				<Sidebar />
				<Outlet />
			</Layout>
		);
	} else {
		return <ErrorFallback />;
	}
}

export default AdminLayout;
