import { Outlet, Navigate } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import useFooter from '../../../../hooks/useFooter';
import { useEffect, useState } from 'react';
import useApi from '../../../../hooks/useApi';

function MyPageLayout() {
	// 마이페이지 내 모든 푸터 삭제
	useFooter();

	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const {
		result: users,
		trigger: usersT,
		isLoading: usersL,
		error: usersE,
	} = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (users) {
			setUser(users);
		}
	}, [users]);

	return (
		<>
			{!user && <Navigate to="/" replace={true} />}
			<M.Wrapper>
				<SideMenu></SideMenu>
				<Outlet />
			</M.Wrapper>
		</>
	);
}

export default MyPageLayout;
