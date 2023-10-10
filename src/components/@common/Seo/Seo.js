import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { sitemapRoutes } from 'data/sitemapRoutes';

const exceptionPaths = [
	'/portfolio/post',
	'/portfolio/edit',
	'/study/detail',
	'/study/edit',
];

const getSeoData = targetPath => {
	const exceptedPath = exceptionPaths.find(
		exceptionPath =>
			targetPath &&
			typeof targetPath === 'string' &&
			targetPath.includes(exceptionPath),
	);
	const { title, desc } = sitemapRoutes.find(
		({ path: sitemapPath }) => sitemapPath === (exceptedPath || targetPath),
	);
	return { title, desc };
};

const targetMetaTags = ['description', 'og:title', 'og:description'];

const Seo = () => {
	const location = useLocation();

	const [seoData, setSeoData] = useState({ title: '', desc: '' });
	const checkSeoData = pathname => {
		setSeoData(getSeoData(pathname));
	};

	useEffect(() => {
		checkSeoData(location.pathname);
	}, [location.pathname]);

	useEffect(() => {
		document.title = seoData.title;
		const metaTags = document.getElementsByTagName('meta');
		Array.from(metaTags).forEach(metaTag => {
			if (targetMetaTags.includes(metaTag.getAttribute('name'))) {
				document.head.removeChild(metaTag);
			}
		});

		targetMetaTags.forEach(name => {
			const newMetaTag = document.createElement('meta');
			newMetaTag.setAttribute('name', name);
			newMetaTag.setAttribute(
				'content',
				name === 'og:title' ? seoData.title : seoData.desc,
			);
			document.head.append(newMetaTag);
		});
	}, [seoData]);

	return (
		<Helmet>
			<title>{seoData.title}</title>
			{/* 다른 <meta/> 추가 적용 */}
		</Helmet>
	);
};

export default Seo;
