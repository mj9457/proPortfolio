import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import useFooter from '../../../../hooks/useFooter';
import useApi from '../../../../hooks/useApi';

function MyPageLayout() {
	// 마이페이지 내 모든 푸터 삭제
	useFooter();

	// 유저 정보 통신(GET)
	const {
		result: user,
		trigger,
		isLoading,
		error,
	} = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	return (
		<M.Wrapper>
			<SideMenu
				userState={
					user.role === 'mentor'
						? `${user.name} 멘토님`
						: `${user.name} 님`
				}
			></SideMenu>
			<Outlet />
		</M.Wrapper>
	);
}

export default MyPageLayout;
