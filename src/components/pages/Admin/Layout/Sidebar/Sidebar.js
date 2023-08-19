import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
	AuditOutlined,
	FormOutlined,
	ReadOutlined,
	TagsOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { Menu, theme } from 'antd';
import { AdminSider, LogoBox } from './Sidebar.styles';

const Sidebar = () => {
	const location = useLocation();
	const url = location.pathname.split('/');
	const formUrl = url[url.length - 1];
	const tab =
		formUrl.charAt(0).toUpperCase() + formUrl.slice(1).toLowerCase();
	console.log(tab);
	// console.log(tab);
	// const pathCheck = name => {
	// 	console.log(name);
	// 	switch (name) {
	// 		case 'user':
	// 			tab = 'User';
	// 			break;
	// 		case 'Mentorapply':
	// 			tab = 'Mentor Apply';
	// 			break;
	// 		case 'Category':
	// 			tab = 'Category';
	// 			break;
	// 		case 'studyboard':
	// 			tab = 'Study/Project';
	// 			break;
	// 		case 'mentorboard':
	// 			tab = 'Mentor Board';
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// };
	// pathCheck(tab);

	const navigate = useNavigate();
	// Dummy Data
	const navList = [
		'User',
		'Mentor Apply',
		'Category',
		'Study/Project',
		'Mentor Baord',
	];
	// url로 넘기기 위한 데이터들
	const pathName = [
		'user',
		'mentorapply',
		'category',
		'studyproject',
		'mentorbaord',
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

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const onClickHandler = e => {
		// url은 소문자
		console.log(e);
		// const result = e.key.toLowerCase();
		// Tabs key로 구분
		const result = pathName[navList.indexOf(e.key)]; // pathName에서 해당 탭의 index를 찾아 사용
		console.log(result);
		navigate(`/admin/${result}`);
	};

	return (
		<>
			<AdminSider
				style={{
					background: colorBgContainer,
				}}
			>
				<LogoBox>
					<img src="/assets/img/logo/logo.svg" alt="Logo"></img>
				</LogoBox>
				{/* <div className="demo-logo-vertical" /> */}
				{/* <div/> */}
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={[tab]}
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
