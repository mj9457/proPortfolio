import SignInAccess from 'pages/SignInAccess';
import React, { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('components/@common/Layout'));

// home & signup
const Home = lazy(() => import('pages/Home'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignUpDone = lazy(() => import('pages/SignUp/SignUpDone'));

// my
const MyPageLayout = lazy(() => import('pages/MyPageLayout'));

// portfolio
const Portfolio = lazy(() => import('pages/Portfolio'));
const PortfolioApply = lazy(() => import('pages/Portfolio/PortfolioApply'));
const PortfolioPost = lazy(() => import('pages/Portfolio/PortfolioPost'));

// study
const StudyPage = lazy(() => import('pages/StudyPage/StudyPage'));
const StudyEditPost = lazy(() =>
	import('pages/StudyPage/StudyEditPost/StudyEditPost'),
);
const StudyPostDetail = lazy(() =>
	import('pages/StudyPage/StudyPostDetail/StudyPostDetail'),
);

// user mentor apply page
const UserMentorApply = lazy(() => import('pages/UserMentoApply'));

// admin
const AdminCategory = lazy(() => import('pages/Admin/Category/AdminCategory'));
const AdminHome = lazy(() => import('pages/Admin/Home/Admin'));
const AdminLayout = lazy(() => import('components/pages/Admin'));
const AdminMentorApply = lazy(() =>
	import('pages/Admin/MentorApply/AdminMentorApply'),
);
const AdminStudyProject = lazy(() =>
	import('pages/Admin/StudyProject/AdminStudyProject'),
);
const AdminMentorBoardList = lazy(() =>
	import('pages/Admin/MentorBoardList/AdminMentorBoardList'),
);

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
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/signup/done',
				element: <SignUpDone />,
			},
			{
				path: '/signinaccess',
				element: <SignInAccess />,
			},
			{
				path: '/usermentorapply',
				element: <UserMentorApply />,
			},
			// 마이페이지
			{
				path: 'mypage',
				element: <MyPageLayout />,
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
				path: 'portfolio/post/:_id',
				element: <PortfolioPost />,
			},
			{
				path: 'portfolio/edit/:portfolioId',
				element: <PortfolioApply />,
			},
			// 스터디 프로젝트 페이지
			// 스터디 페이지 메인
			{
				path: 'study',
				element: <StudyPage />,
			},
			// 스터디 게시글 작성
			{
				path: 'study/post',
				element: <StudyEditPost />,
			},
			// 스터디 게시글 수정
			{
				path: 'study/edit/:postId',
				element: <StudyEditPost />,
			},
			// 스터디 게시글 상세
			{
				path: 'study/detail/:postId',
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
				element: <Navigate to="/admin/user" />,
			},
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
			{
				path: 'studyproject',
				element: <AdminStudyProject />,
			},
			{
				path: 'mentorboard',
				element: <AdminMentorBoardList />,
			},
		],
	},
]);

export default router;
