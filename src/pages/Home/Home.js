import { useEffect, useState } from 'react';
import axios from 'axios';
import * as H from './Home.styles';
import RecommendCard from '../../components/pages/Home/RecommendCard/RecommendCard';
import MentorCard from '../../components/@common/Card/Card';
import RollingSlider from './SlideBanner/SlideBanner';
import Slider from '../../components/@common/Slider/Slider';
import { getCookie } from '../../utils/cookie';

function Home() {
	const [recommendedMentors, setRecommendedMentors] = useState([]);
	const userName = getCookie('userName');
	console.log(userName);
	HTMLFormControlsCollection(document.cookie);

	useEffect(() => {
		const getRecommendedMentors = async () => {
			const res = await axios.get('/mock/recommendMentor.json');

			console.log(res);
			const recommendedMentors = res.data.data;
			setRecommendedMentors(recommendedMentors);
		};

		getRecommendedMentors();
	}, []);

	return (
		<H.Wrap>
			<H.Content>
				<RollingSlider />
				<H.RecommendMentor>
					<H.Title>👀 {userName}님에게 추천하는 멘토</H.Title>
					<H.RecommendCards>
						{recommendedMentors.map((mentor, idx) => (
							<RecommendCard
								key={idx}
								postId={mentor.portfolioId}
								profileimage={mentor.profileImageUrl}
								nickName={mentor.nickName}
								company={mentor.company}
								position={mentor.job}
								career={mentor.career}
							/>
						))}
					</H.RecommendCards>
				</H.RecommendMentor>
				<H.NewStudy>
					<H.TitleBox>
						<H.Title>🔥 방금 올라온 스터디/ 프로젝트</H.Title>
						<H.ViewAll href="/study">
							전체보기
							<img
								src="/assets/img/icons/bluearrow.svg"
								alt="파란화살표"
							/>
						</H.ViewAll>
					</H.TitleBox>
					<H.SlideStudyCard>
						<Slider
							background="lightBlueBackground"
							url={'/mock/studyInfo.json'}
							itemsPerPage={2}
						/>
					</H.SlideStudyCard>
				</H.NewStudy>
				<H.PopularMento>
					<H.TitleBox>
						<H.Title>✨ 지금 인기 있는 멘토</H.Title>
						<H.ViewAll href="/portfolio">
							전체보기
							<img
								src="/assets/img/icons/bluearrow.svg"
								alt="파란화살표"
							/>
						</H.ViewAll>
					</H.TitleBox>
					<H.PopularCards>
						<MentorCard
							variant={'white'}
							url={'/api/portfolio/recommend/topMentor'}
						/>
					</H.PopularCards>
				</H.PopularMento>
			</H.Content>
		</H.Wrap>
	);
}

export default Home;
