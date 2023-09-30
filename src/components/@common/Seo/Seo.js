import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { sitemapRoutes } from 'data/sitemapRoutes';

const Seo = () => {
	const location = useLocation();
	const { title = 'title', desc = 'description' } = useMemo(
		() => sitemapRoutes.find(site => site.path === location.pathname),
		[location.pathname],
	);

	useEffect(() => {
		console.log(document.head);
	}, []);

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={desc} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={desc} />
			{/* 다른 <meta/> 추가 적용 .....  */}
		</Helmet>
	);
};

export default Seo;
