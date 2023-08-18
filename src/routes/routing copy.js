import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Pages/Home/Home';
import AdminCategory from '../Pages/Admin/Category/AdminCategory';
import AdminHome from '../Pages/Admin/Home/Admin';
import AdminLayout from '../Components/Admin';
import AdminMentorApply from '../Pages/Admin/MentorApply/AdminMentorApply';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: 'user',
				element: <AdminHome />,
			},
			{
				path: 'category',
				element: <AdminCategory />,
			},
			{
				path: 'mentorapply',
				element: <AdminMentorApply />,
			},
		],
	},
]);

export default router;
