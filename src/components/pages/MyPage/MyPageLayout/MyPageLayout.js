import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';

function MyPageLayout() {
	return (
		<>
			<M.Wrapper>
				<SideMenu userState={'OO멘토 님'}></SideMenu>
				<Outlet />
			</M.Wrapper>
		</>
	);
}

export default MyPageLayout;
