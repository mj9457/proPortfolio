import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import UserMentorApply from '../pages/UserMentoApply/UserMentorApply';

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
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/signupdone',
				element: <SignUpDone />,
			},
			{
				path: '/usermentorapply',
				element: <UserMentorApply />,
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
						path: 'postlist',
						element: <PostListPage />,
					},
					{
						path: 'AccountManage',
						element: <AccountManagePage />,
					},
					{
						path: 'AccountWithdrawal',
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
				path: 'portfolio/post/:portfolioId',
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
			{
				path: '/*',
				element: <ErrorFallback />,
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

// import Layout from '../components/@common/Layout';

// import Home from '../pages/Home/Home';
// import SignUp from '../pages/SignUp/SignUp';

// import MyPage from '../pages/MyPage/MyPage';
// import MentoringHistory from '../pages/MyPage/Mentor/MentoringHistory/MentoringHistory';
// import AccountManage from '../pages/MyPage/AccountManage/AccountManage';
// import AccountWithdrawal from '../pages/MyPage/AccountWithdrawal/AccountWithdrawal';
// import MyPageLayout from '../components/pages/MyPage/MyPageLayout/MyPageLayout';
// import MentoringListPage from '../pages/MyPage/Mentor/MentoringList/MentoringListPage';

// import Portfolio from '../pages/Portfolio/Portfolio';
// import PortfolioApply from '../pages/Portfolio/PortfolioApply/PortfolioApply';
// import PortfolioPost from '../pages/Portfolio/PortfolioPost/PortfolioPost';

// import StudyPage from '../pages/StudyPage/StudyPage';
// import StudyEditPost from '../pages/StudyPage/StudyEditPost/StudyEditPost';
// import StudyPostDetail from '../pages/StudyPage/StudyPostDetail/StudyPostDetail';

// import AdminCategory from '../pages/Admin/Category/AdminCategory';
// import AdminHome from '../pages/Admin/Home/Admin';
// import AdminLayout from '../components/pages/Admin';
// import AdminMentorApply from '../pages/Admin/MentorApply/AdminMentorApply';
// import AdminStudyProject from '../pages/Admin/StudyProject/AdminStudyProject';
// import AdminMentorBoardList from '../pages/Admin/MentorBoardList/AdminMentorBoardList';
