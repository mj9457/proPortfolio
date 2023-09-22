import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	AuditOutlined,
	FormOutlined,
	ReadOutlined,
	TagsOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { Menu, theme } from 'antd';
import { AdminMenu, AdminSider, LogoBox } from './Sidebar.styles';

const navList = [
	'User',
	'Mentor Apply',
	'Category',
	'Study/Project',
	'Mentor Board',
];
// url로 넘기기 위한 데이터들
const pathName = [
	'user',
	'mentorapply',
	'category',
	'studyproject',
	'mentorboard',
];
// Sider Nav Tabs
const items = [
	TeamOutlined,
	AuditOutlined,
	TagsOutlined,
	ReadOutlined,
	FormOutlined,
].map((icon, index) => ({
	key: navList[index],
	icon: React.createElement(icon),
	label: navList[index],
}));
const Sidebar = () => {
	const location = useLocation();
	const url = location.pathname.split('/');
	const formUrl = url[url.length - 1];
	let tab = formUrl.charAt(0).toUpperCase() + formUrl.slice(1).toLowerCase();
	// console.log(tab);
	/**
	 *
	 * Todo Refactoring 필요
	 */
	const pathCheck = name => {
		// console.log(name);
		switch (name) {
			case 'user':
				tab = 'User';
				break;
			case 'Mentorapply':
				tab = 'Mentor Apply';
				break;
			case 'Category':
				tab = 'Category';
				break;
			case 'Studyproject':
				tab = 'Study/Project';
				break;
			case 'Mentorboard':
				tab = 'Mentor Board';
				break;

			default:
				break;
		}
	};

	pathCheck(tab);

	const navigate = useNavigate();

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const onClickHandler = e => {
		// url은 소문자
		// console.log(e);
		// const result = e.key.toLowerCase();
		// Tabs key로 구분
		const result = pathName[navList.indexOf(e.key)]; // pathName에서 해당 탭의 index를 찾아 사용
		navigate(`/admin/${result}`);
	};

	return (
		<>
			<AdminSider
				style={{
					background: colorBgContainer,
				}}
			>
				<LogoBox
					onClick={() => {
						navigate('/');
					}}
				>
					<img src="/assets/img/logo/logo.svg" alt="Logo"></img>
				</LogoBox>
				{/* <div className="demo-logo-vertical" /> */}
				{/* <div/> */}
				<AdminMenu
					theme="light"
					mode="inline"
					defaultSelectedKeys={'User'}
					selectedKeys={[tab]}
					items={items}
					onClick={e => {
						onClickHandler(e);
					}}
				/>
			</AdminSider>
		</>
	);
};

export default Sidebar;
