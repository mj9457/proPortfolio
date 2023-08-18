import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Pages/Home/Home';
import AdminCategory from '../Pages/Admin/Category/AdminCategory';
import AdminHome from '../Pages/Admin/Home/Admin';
import AdminLayout from '../Components/Admin';
import Portfolio from '../pages/PofolReview/PofolReview';

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
