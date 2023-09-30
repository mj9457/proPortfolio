import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import useApi from 'hooks/useApi';
import { includeFooterState, userAtom } from 'recoil/atoms/index.atom';

import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from '../ScrollToTop';

const excludeRedirectPath = [
	{
		path: '/',
		hasParam: false,
	},
	{
		path: '/portfolio/post',
		hasParam: true,
	},
	{ path: '/portfolio', hasParam: false },
	{
		path: '/study/detail',
		hasParam: true,
	},
	{ path: '/study', hasParam: false },
	{ path: '/signup', hasParam: false },
	{ path: '/signup/done', hasParam: false },
];

function Layout() {
	const [user, setUser] = useRecoilState(userAtom);
	const navigate = useNavigate();
	const { trigger, error } = useApi({ path: '/users', shouldFetch: false });
	const location = useLocation();

	const handleInvalidUser = useCallback(() => {
		setUser(prev => ({
			...prev,
			isAuth: false,
			nickName: '',
			role: '',
			_id: '',
			isLoading: false,
		}));

		const notRedirect = excludeRedirectPath.find(ex =>
			ex.hasParam
				? location.pathname.includes(ex.path)
				: location.pathname === ex.path,
		);

		if (!notRedirect) {
			navigate('/');
		}
	}, [location.pathname]);

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
		} catch (err) {
			handleInvalidUser();
		}
	}, []);

	useEffect(() => {
		//* 사용자가 직접 url을 치고 들어오는 경우 대비
		if (location.pathname === '/signup') {
			// return signupPrevent();
		}
		const isPublic = excludeRedirectPath.find(ex =>
			ex.hasParam
				? location.pathname.includes(ex.path)
				: location.pathname === ex.path,
		);
		if (isPublic) return;
		checkAuth();
	}, [location.pathname]);

	// includeFooter가 true일 때만 Footer가 나타나도록 설정
	const includeFooter = useRecoilValue(includeFooterState);

	return (
		<>
			<Header />
			<Outlet />
			<ScrollToTopButton />
			{includeFooter && <Footer />}
		</>
	);
}

export default Layout;
