import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import { Layout } from 'antd';
import useApi from 'hooks/useApi';
import ErrorFallback from 'components/@common/Error';
import { userAtom } from 'recoil/atoms/index.atom';
import { useSetRecoilState } from 'recoil';

function AdminLayout() {
	const setUser = useSetRecoilState(userAtom);
	const { trigger, error } = useApi({ path: '/users', shouldFetch: false });
	const location = useLocation();
	const [userRole, setUserRole] = useState('');

	const handleInvalidUser = useCallback(() => {
		setUser(prev => ({
			...prev,
			isAuth: false,
			nickName: '',
			role: '',
			_id: '',
			isLoading: false,
		}));
	}, [location.pathname, userRole]);

	const checkAuth = useCallback(async () => {
		try {
			setUser(prev => ({ ...prev, isLoading: true }));
			const authResult = await trigger({
				path: '/users',
				applyResult: false,
				showBoundary: false,
			});

			setUser(prev => ({
				...prev,
				isAuth: true,
				nickName: authResult.nickName,
				role: authResult.role,
				_id: authResult._id,
				isLoading: false,
			}));
			if (error) {
				handleInvalidUser();
			}

			setUserRole(authResult.role);
		} catch (err) {
			handleInvalidUser();
		}
	}, []);

	useEffect(() => {
		checkAuth();
	}, [location.pathname]);

	return userRole === 'admin' ? (
		<Layout>
			<Sidebar />
			<Outlet />
		</Layout>
	) : (
		<ErrorFallback />
	);
}

export default AdminLayout;
