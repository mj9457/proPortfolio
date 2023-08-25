import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userData } from '../../../../recoil/atoms/myPage/myPage.atom';
import useFooter from '../../../../hooks/useFooter';

function MyPageLayout() {
	useFooter();
	const [user, setUser] = useRecoilState(userData);

	// 서버통신 (GET)
	useEffect(() => {
		async function getUserData() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1',
				);
				setUser(response.data);
			} catch (err) {
				console.log(err);
			}
		}
		getUserData();
	}, []);

	return (
		<M.Wrapper>
			<SideMenu
				userState={
					!user.completed // 임시
						? `${user.userId} 멘토님`
						: `${user.userId} 님`
				}
			></SideMenu>
			<Outlet />
		</M.Wrapper>
	);
}

export default MyPageLayout;
