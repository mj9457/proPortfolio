import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import useFooter from '../../../../hooks/useFooter';
import useApi from '../../../../hooks/useApi';

function MyPageLayout() {
	// 마이페이지 내 모든 푸터 삭제
	useFooter();

	return (
		<M.Wrapper>
			<SideMenu></SideMenu>
			<Outlet />
		</M.Wrapper>
	);
}

export default MyPageLayout;
