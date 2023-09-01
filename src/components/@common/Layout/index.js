import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useRecoilValue } from 'recoil';
import { includeFooterState } from '../../../recoil/atoms/index.atom';
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';

function Layout() {
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
