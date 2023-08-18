import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
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
