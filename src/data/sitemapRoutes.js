export const sitemapUrl = 'http://localhost:3000';
// export const sitemapUrl = 'https://pofol.site';

export const sitemapRoutes = [
	{
		path: '/',
		disable: false,
		title: 'Home',
		desc: '포트폴리오 메인 페이지입니다.',
		keywords: ['home'],
	},
	// 로그인 및 회원가입
	{
		path: '/signup',
		disable: true,
		title: 'Sign Up',
		desc: '여기는 회원가입 페이지입니다.',
		keywords: ['signup'],
	},
	{
		path: '/signup/done',
		disable: true,
		title: 'Sign Up Done',
		desc: '여기는 회원가입 완료 페이지입니다.',
		keywords: ['signup'],
	},
	{
		path: '/signinaccess',
		disable: true,
		title: 'Sign In Access',
		desc: '여기는 로그인 성공 페이지입니다.',
		keywords: ['signinaccess'],
	},
	// 포트폴리오 리뷰 페이지
	{
		path: '/portfolio',
		disable: false,
		title: 'Portfolio',
		desc: '여기는 포트폴리오 리뷰 페이지입니다.',
		keywords: ['portfolio'],
	},
	{
		path: '/portfolio/post',
		disable: false,
		title: 'Portfolio Post',
		desc: '여기는 포트폴리오 상세 페이지입니다.',
		keywords: ['portfolio'],
	},
	{
		path: '/portfolio/apply',
		disable: true,
		title: 'Portfolio Apply',
		desc: '여기는 포트폴리오 글 작성하는 페이지입니다.',
		keywords: ['portfolio'],
	},
	{
		path: '/portfolio/edit',
		disable: true,
		title: 'Portfolio Edit',
		desc: '여기는 포트폴리오 편집하는 페이지입니다.',
		keywords: ['portfolio'],
	},
	// 스터디 및 프로젝트 페이지
	{
		path: '/study',
		disable: false,
		title: 'Study Page',
		desc: '여기는 스터디/프로젝트 페이지입니다.',
		keywords: ['study'],
	},
	{
		path: '/study/detail',
		disable: false,
		title: 'Study Post Detail',
		desc: '여기는 스터디/프로젝트 상세 페이지입니다.',
		keywords: ['study'],
	},
	{
		path: '/study/post',
		disable: true,
		title: 'Study Write Post',
		desc: '여기는 스터디/프로젝트 글 작성하는 페이지입니다.',
		keywords: ['study'],
	},
	{
		path: '/study/edit',
		disable: true,
		title: 'Study Edit Post',
		desc: '여기는 스터디/프로젝트 글 편집하는 페이지입니다.',
		keywords: ['study'],
	},
	// 멘토 신청 페이지
	{
		path: '/usermentorapply',
		disable: true,
		title: 'Mentor Apply',
		desc: '여기는 멘토 신청할 수 있는 페이지입니다.',
		keywords: ['usermentorapply'],
	},
	// 마이 페이지
	{
		path: '/mypage',
		disable: true,
		title: 'My Page',
		desc: '여기는 마이페이지입니다.',
		keywords: ['mypage'],
	},
	// 관리자 페이지
	{
		path: '/admin',
		disable: true,
		title: 'Admin',
		desc: '여기는 관리자 메인 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/user',
		disable: true,
		title: 'Admin User',
		desc: '여기는 유저를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/category',
		disable: true,
		title: 'Admin Category',
		desc: '여기는 카테고리를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/mentorapply',
		disable: true,
		title: 'Admin Mentor Apply',
		desc: '여기는 멘토 신청을 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/studyproject',
		disable: true,
		title: 'Admin Study/Project',
		desc: '여기는 스터디/프로젝트를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/mentorboard',
		disable: true,
		title: 'Admin Mentor',
		desc: '여기는 멘토를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
];
