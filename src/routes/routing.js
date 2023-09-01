import React, { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('../components/@common/Layout'));

// home and signup page
const Home = lazy(() => import('../pages/Home/Home'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const SignUpDone = lazy(() => import('../pages/SignUp/SignUpDone/SignUpDone'));

// my page
const MyPage = lazy(() => import('../pages/MyPage/MyPage'));
const PostListPage = lazy(() =>
	import('../components/pages/MyPage/RightContent/Mentor/PostList/PostList'),
);
const AccountManagePage = lazy(() =>
	import('../pages/MyPage/AccountManagePage/AccountManagePage'),
);
const AccountWithdrawalPage = lazy(() =>
	import('../pages/MyPage/AccountWithdrawalPage/AccountWithdrawalPage'),
);
const MyPageLayout = lazy(() =>
	import('../components/pages/MyPage/MyPageLayout/MyPageLayout'),
);
const MentoringListPage = lazy(() =>
	import('../pages/MyPage/Mentor/MentoringList/MentoringListPage'),
);
const MentoringPostListPage = lazy(() =>
	import(
		'../pages/MyPage/Mentor/MentoringPostListPage/MentoringPostListPage'
	),
);

// portfolio page
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio'));
const PortfolioApply = lazy(() =>
	import('../pages/Portfolio/PortfolioApply/PortfolioApply'),
);
const PortfolioPost = lazy(() =>
	import('../pages/Portfolio/PortfolioPost/PortfolioPost'),
);

// study page
const StudyPage = lazy(() => import('../pages/StudyPage/StudyPage'));
const StudyEditPost = lazy(() =>
	import('../pages/StudyPage/StudyEditPost/StudyEditPost'),
);
const StudyPostDetail = lazy(() =>
	import('../pages/StudyPage/StudyPostDetail/StudyPostDetail'),
);

// user mentor apply page
const UserMentorApply = lazy(() =>
	import('../pages/UserMentoApply/UserMentorApply'),
);

// admin
const AdminCategory = lazy(() =>
	import('../pages/Admin/Category/AdminCategory'),
);
const AdminHome = lazy(() => import('../pages/Admin/Home/Admin'));
const AdminLayout = lazy(() => import('../components/pages/Admin'));
const AdminMentorApply = lazy(() =>
	import('../pages/Admin/MentorApply/AdminMentorApply'),
);
const AdminStudyProject = lazy(() =>
	import('../pages/Admin/StudyProject/AdminStudyProject'),
);
const AdminMentorBoardList = lazy(() =>
	import('../pages/Admin/MentorBoardList/AdminMentorBoardList'),
);

// error page
const ErrorFallback = lazy(() =>
	import('../components/@common/Error/ErrorFallback'),
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
				path: '/register',
				element: <SignUp />,
			},
			{
				path: '/register/done',
				element: <SignUpDone />,
			},
			{
				path: '/usermentorapply',
				element: <UserMentorApply />,
			},
			{
				path: 'mypage',
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
						path: 'mentoringpostlist',
						element: <MentoringPostListPage />,
					},
					{
						path: 'postlist',
						element: <PostListPage />,
					},
					{
						path: 'accountmanage',
						element: <AccountManagePage />,
					},
					{
						path: 'accountwithdrawal',
						element: <AccountWithdrawalPage />,
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
				element: <ErrorFallback />,
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
