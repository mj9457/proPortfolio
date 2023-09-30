import path from 'path';
import fs from 'fs';
import { sitemapUrl, sitemapRoutes } from './src/data/sitemapRoutes';

const generateSitemapFile = () => {
	if (!sitemapRoutes || !sitemapRoutes.length) {
		console.log('(!) 사이트맵 정보가 없음.');
		return;
	}

	const sitemapElements = sitemapRoutes
		.filter(site => !site.disable)
		.map(
			site => `
        <url>
            <loc>${sitemapUrl}${site.path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        `,
		)
		.join('');

	const sitemapTemplate = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
		${sitemapElements}
    </urlset>
    `;

	const sitemapFilePath = path.resolve('./public/sitemap.xml');

	try {
		fs.writeFileSync(sitemapFilePath, sitemapTemplate);
		console.log('sitemap 생성완료');
	} catch (err) {
		console.log(err);
		return err;
	}
};

generateSitemapFile();
