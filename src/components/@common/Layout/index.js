import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { includeFooterState, userAtom } from '../../../recoil/atoms/index.atom';
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';
import useApi from '../../../hooks/useApi';

const excludeAuthPath = ['/signup'];
const excludeRedirectPath = [
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
];

function Layout() {
	const setUser = useSetRecoilState(userAtom);
	const navigate = useNavigate();
	const { trigger, error } = useApi({ path: '/user', shouldFetch: false });
	const location = useLocation();

	const handleInvalidUser = useCallback(() => {
		setUser(prev => ({
			...prev,
			isAuth: false,
			nickName: '',
			role: '',
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
				path: '/user',
				applyResult: false,
				showBoundary: false,
			});

			setUser(prev => ({
				...prev,
				isAuth: true,
				nickName: authResult.nickName,
				role: authResult.role,
				isLoading: false,
			}));
			if (error) {
				handleInvalidUser();
			}
		} catch (err) {
			handleInvalidUser();
		}
	}, []);

	useEffect(() => {
		if (excludeAuthPath.includes(location.pathname)) return;
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
