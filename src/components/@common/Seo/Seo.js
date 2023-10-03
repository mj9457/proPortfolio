import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { sitemapRoutes } from 'data/sitemapRoutes';

const Seo = () => {
	const location = useLocation();

	// 경로에 해당하는 라우트 찾기
	const route = useMemo(
		() => sitemapRoutes.find(site => site.path === location.pathname),
		[location.pathname],
	);

	// /portfolio/post | /portfolio/edit | /study/detail | /study/edit 을 위한...
	const exception = useMemo(
		() => sitemapRoutes.find(site => location.pathname.includes(site.path)),
		[location.pathname],
	);

	// 특정 경로에 대한 title 값 설정
	let title = '';
	let desc = '';

	if (exception) {
		// 특정 경로에 대해 다른 title 값을 설정
		if (location.pathname.includes('/portfolio/post')) {
			title = '포폴 : 포트폴리오 리뷰 상세';
			desc = '여기는 포트폴리오 상세 페이지입니다.';
		} else if (location.pathname.includes('/portfolio/edit')) {
			title = '포폴 : 포트폴리오 리뷰 글 수정';
			desc = '여기는 포트폴리오 편집하는 페이지입니다.';
		} else if (location.pathname.includes('/study/detail')) {
			title = '포폴 : 스터디 / 프로젝트 모집 상세';
			desc = '여기는 스터디 / 프로젝트 상세 페이지입니다.';
		} else if (location.pathname.includes('/study/edit')) {
			title = '포폴 : 스터디 / 프로젝트 모집 글 수정';
			desc = '여기는 스터디 / 프로젝트 글 편집하는 페이지입니다.';
		} else {
			title = route.title;
			desc = route.desc;
		}
	}

	useEffect(() => {
		document.title = title;
		console.log(document.head);
	}, [title]);

	return (
		<Helmet>
			{/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
			<title>{title}</title>
			<meta name="description" content={desc} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={desc} />
			{/* 다른 <meta/> 추가 적용 .....  */}
		</Helmet>
	);
};

export default Seo;
