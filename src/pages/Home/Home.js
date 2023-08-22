import { useEffect, useState } from 'react';
import axios from 'axios';
import * as H from './Home.styles';
import RecommendCard from '../../components/pages/Home/RecommendCard/RecommendCard';
import PopularCard from '../../components/@common/Card/Card';
import RollingSlider from './SlideBanner/SlideBanner';
import Slider from '../../components/@common/Slider/Slider';

function Home() {
	const [popularData, setPopularData] = useState([]);

	useEffect(() => {
		const getMentor = async () => {
			const res = await axios.get('/mock/mentor.json');
			const data = res.data.mentor;
			const newPopularData = [...data]
				.sort((a, b) => Number(b.numCoaching) - Number(a.numCoaching))
				.slice(0, 4);
			setPopularData(newPopularData);
		};

		getMentor();
	}, []);

	return (
		<>
			<H.Wrap>
				<H.Content>
					<RollingSlider />
					<H.RecommendMentor>
						<H.Title>👀 000님에게 추천하는 멘토</H.Title>
						<H.RecommendCards>
							<RecommendCard link="#" />
							<RecommendCard link="#" />
							<RecommendCard link="#" />
							<RecommendCard link="#" />
							<RecommendCard link="#" />
						</H.RecommendCards>
					</H.RecommendMentor>
					<H.NewStudy>
						<H.TitleBox>
							<H.Title>🔥 방금 올라온 스터디/ 프로젝트</H.Title>
							<H.ViewAll href="/study">
								전체보기
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="5"
									height="11"
									viewBox="0 0 5 11"
									fill="none"
								>
									<path
										d="M0 10.5V0.5L5 5.5L0 10.5Z"
										fill="#3377FF"
									/>
								</svg>
							</H.ViewAll>
						</H.TitleBox>
						<H.SlideStudyCard>
							<Slider />
						</H.SlideStudyCard>
					</H.NewStudy>
					<H.PopularMento>
						<H.TitleBox>
							<H.Title>✨ 지금 인기 있는 멘토</H.Title>
							<H.ViewAll href="/portfolio">
								전체보기
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="5"
									height="11"
									viewBox="0 0 5 11"
									fill="none"
								>
									<path
										d="M0 10.5V0.5L5 5.5L0 10.5Z"
										fill="#3377FF"
									/>
								</svg>
							</H.ViewAll>
						</H.TitleBox>
						<H.PopularCards>
							<PopularCard
								background="whiteBackground"
								mentorData={popularData}
							/>
						</H.PopularCards>
					</H.PopularMento>
				</H.Content>
			</H.Wrap>
		</>
	);
}

export default Home;
