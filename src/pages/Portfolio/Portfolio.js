import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './Portfolio.styles';

import PopularCard from '../../components/@common/Card/Card';
import Line from '../../components/@common/Line/Line';
import Buttons from '../../components/pages/Portfolio/Buttons/Buttons';

function Portfolio() {
	const [mentorData, setMentorData] = useState([]); // every mentor data
	const [popularData, setPopularData] = useState([]); // popular mentor data

	useEffect(() => {
		const getMentor = async () => {
			const res = await axios.get('/mock/mentor.json');
			const data = res.data.mentor;
			const newPopularData = [...data]
				.sort((a, b) => Number(b.numCoaching) - Number(a.numCoaching))
				.slice(0, 4);

			setMentorData([...data]);
			setPopularData([...newPopularData]);
		};

		getMentor();
	}, []);

	return (
		<>
			<S.PortfolioBox>
				<S.BannerBox>
					{/* banner */}
					<S.BannerImage src="./assets/img/banner/banner02.png" />
				</S.BannerBox>

				<Buttons />

				<div>
					{/* 지금 인기 있는 멘토들 제목 */}
					<S.TitleBox>
						<span>✨ 지금 인기 있는 멘토</span>
					</S.TitleBox>

					{/* 지금 인기 있는 멘토들 목록 */}
					<S.MentorCardBox>
						<PopularCard
							background="blueBackground"
							mentorData={popularData}
						/>
					</S.MentorCardBox>
				</div>

				<Line size={'small'} />

				<S.MentorBox>
					{/* 모든 멘토 제목 */}
					<S.MentorTitleBox>
						<span>🌟 모든 멘토</span>
						<S.Input placeholder="검색어를 입력하세요." />
					</S.MentorTitleBox>

					<S.MentorCardBox>
						<PopularCard
							background="whiteBackground"
							mentorData={mentorData}
						/>
					</S.MentorCardBox>
				</S.MentorBox>
			</S.PortfolioBox>
		</>
	);
}

export default Portfolio;
