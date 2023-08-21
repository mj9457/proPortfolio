import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/@common/Layout';

import Home from '../pages/Home/Home';

import MyPage from '../pages/MyPage/MyPage';
import MentoringHistory from '../pages/MyPage/Mentor/MentoringHistory/MentoringHistory';
import AccountManage from '../pages/MyPage/AccountManage/AccountManage';
import AccountWithdrawal from '../pages/MyPage/AccountWithdrawal/AccountWithdrawal';
import MyPageLayout from '../components/pages/MyPage/MyPageLayout/MyPageLayout';
import MentoringListPage from '../pages/MyPage/Mentor/MentoringList/MentoringListPage';

import AdminCategory from '../pages/Admin/Category/AdminCategory';
import AdminHome from '../pages/Admin/Home/Admin';
import AdminLayout from '../components/pages/Admin';

import Portfolio from '../pages/Portfolio/Portfolio';
import PortfolioApply from '../pages/Portfolio/PortfolioApply/PortfolioApply';
import PortfolioPost from '../pages/Portfolio/PortfolioPost/PortfolioPost';

import StudyPage from '../pages/StudyPage/StudyPage';
import StudyEditPost from '../pages/StudyPage/StudyEditPost/StudyEditPost';
import StudyPostDetail from '../pages/StudyPage/StudyPostDetail/StudyPostDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'MyPage',
				element: <MyPageLayout />,
				children: [
					{
						path: '',
						element: <MyPage />,
					},
					{
						path: 'mentoringlist',
						element: <MentoringListPage />,
					},
					{
						path: 'mentoringhistory',
						element: <MentoringHistory />,
					},
					{
						path: 'AccountManage',
						element: <AccountManage />,
					},
					{
						path: 'AccountWithdrawal',
						element: <AccountWithdrawal />,
					},
				],
			},
			{
				path: 'portfolio',
				element: <Portfolio />,
			},
			{
				path: 'portfolio/apply',
				element: <PortfolioApply />,
			},
			{
				path: 'portfolio/post',
				element: <PortfolioPost />,
			},
			// 스터디 프로젝트 페이지
			// 스터디 페이지 메인
			{
				path: 'study',
				element: <StudyPage />,
			},
			// 스터디 게시글 작성
			{
				path: 'study/edit',
				element: <StudyEditPost />,
			},
			// 스터디 게시글 상세
			{
				path: 'study/detail',
				element: <StudyPostDetail />,
			},
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: '',
				element: <AdminHome />,
			},
			{
				path: 'category',
				element: <AdminCategory />,
			},
		],
	},
]);

export default router;
