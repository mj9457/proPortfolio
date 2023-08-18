import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/PofolReview/PofolReview';
import StudyPage from '../pages/StudyPage/studyPage';

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
]);

export default router;
