import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userData } from '../../../../recoil/atoms/myPage/myPage.atom';

function MyPageLayout() {
	const [user, setUser] = useRecoilState(userData);

	// 데이터 정상적으로 불러와지면 삭제
	const users = useRecoilValue(userData);
	const newUser = { ...users };
	newUser.role = 'mentor';

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
					newUser.role === 'mentor'
						? `${user.userId} 멘토님`
						: `${user.userId} 님`
				}
			></SideMenu>
			<Outlet />
		</M.Wrapper>
	);
}

export default MyPageLayout;
