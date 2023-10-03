export const sitemapUrl = 'http://localhost:3000';
// export const sitemapUrl = 'https://pofol.site';

export const sitemapRoutes = [
	{
		path: '/',
		disable: false,
		title: '포폴',
		desc: '포트폴리오 메인 페이지입니다.',
		keywords: ['home'],
	},
	// 로그인 및 회원가입
	{
		path: '/signup',
		disable: true,
		title: '포폴 : 회원 가입',
		desc: '여기는 회원가입 페이지입니다.',
		keywords: ['signup'],
	},
	{
		path: '/signup/done',
		disable: true,
		title: '포폴 : 회원 가입 완료',
		desc: '여기는 회원가입 완료 페이지입니다.',
		keywords: ['signup'],
	},
	{
		path: '/signinaccess',
		disable: true,
		title: '포폴 : 로그인 성공',
		desc: '여기는 로그인 성공 페이지입니다.',
		keywords: ['signinaccess'],
	},
	// 포트폴리오 리뷰 페이지
	{
		path: '/portfolio',
		disable: false,
		title: '포폴 : 포트폴리오 리뷰',
		desc: '여기는 포트폴리오 리뷰 페이지입니다.',
		keywords: ['portfolio'],
	},
	{
		path: '/portfolio/post',
		disable: true,
		title: '포폴 : 포트폴리오 리뷰 상세',
		desc: '여기는 포트폴리오 상세 페이지입니다.',
		keywords: ['portfolio'],
	},
	{
		path: '/portfolio/apply',
		disable: true,
		title: '포폴 : 포트폴리오 리뷰 글 작성',
		desc: '여기는 포트폴리오 글 작성하는 페이지입니다.',
		keywords: ['portfolio'],
	},
	{
		path: '/portfolio/edit',
		disable: true,
		title: '포폴 : 포트폴리오 리뷰 글 편집',
		desc: '여기는 포트폴리오 편집하는 페이지입니다.',
		keywords: ['portfolio'],
	},
	// 스터디 및 프로젝트 페이지
	{
		path: '/study',
		disable: false,
		title: '포폴 : 스터디 / 프로젝트 모집',
		desc: '여기는 스터디 / 프로젝트 페이지입니다.',
		keywords: ['study'],
	},
	{
		path: '/study/detail',
		disable: true,
		title: '포폴 : 스터디 / 프로젝트 모집 상세',
		desc: '여기는 스터디 / 프로젝트 상세 페이지입니다.',
		keywords: ['study'],
	},
	{
		path: '/study/post',
		disable: true,
		title: '포폴 : 스터디 / 프로젝트 모집 글 작성',
		desc: '여기는 스터디 / 프로젝트 글 작성하는 페이지입니다.',
		keywords: ['study'],
	},
	{
		path: '/study/edit',
		disable: true,
		title: '포폴 : 스터디 / 프로젝트 모집 글 편집',
		desc: '여기는 스터디 / 프로젝트 글 편집하는 페이지입니다.',
		keywords: ['study'],
	},
	// 멘토 신청 페이지
	{
		path: '/usermentorapply',
		disable: true,
		title: '포폴 : 멘토 전환 신청',
		desc: '여기는 멘토 신청할 수 있는 페이지입니다.',
		keywords: ['usermentorapply'],
	},
	// 마이 페이지
	{
		path: '/mypage',
		disable: true,
		title: '포폴 : 마이페이지',
		desc: '여기는 마이페이지입니다.',
		keywords: ['mypage'],
	},
	// 관리자 페이지
	{
		path: '/admin',
		disable: true,
		title: '포폴 : 관리자',
		desc: '여기는 관리자 메인 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/user',
		disable: true,
		title: '포폴 : 유저 관리',
		desc: '여기는 유저를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/category',
		disable: true,
		title: '포폴 : 카테고리 관리',
		desc: '여기는 카테고리를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/mentorapply',
		disable: true,
		title: '포폴 : 멘토 신청 관리',
		desc: '여기는 멘토 신청을 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/studyproject',
		disable: true,
		title: '포폴 : 스터디 / 프로젝트 관리',
		desc: '여기는 스터디 / 프로젝트를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
	{
		path: '/admin/mentorboard',
		disable: true,
		title: '포폴 : 멘토 관리',
		desc: '여기는 멘토를 관리하는 페이지입니다.',
		keywords: ['admin'],
	},
];
