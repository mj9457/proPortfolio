import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import MyPage from '../pages/MyPage/MyPage';
import WritingHistory from '../pages/MyPage/Mentor/WritingHistory/WritingHistory';
import AccountManage from '../pages/MyPage/AccountManage/AccountManage';
import AccountWithdrawal from '../pages/MyPage/AccountWithdrawal/AccountWithdrawal';
import MyPageLayout from '../components/MyPage/MyPageLayout/MyPageLayout';
import MentoringListPage from '../pages/MyPage/Mentor/MentoringList/MentoringListPage';
import AdminCategory from '../pages/Admin/Category/AdminCategory';
import AdminHome from '../pages/Admin/Home/Admin';
import AdminLayout from '../components/Admin';
import Portfolio from '../pages/PofolReview/PofolReview';
import StudyPage from '../pages/StudyPage/StudyPage';

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
						path: 'writinghistory',
						element: <WritingHistory />,
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
				path: 'study',
				element: <StudyPage />,
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
