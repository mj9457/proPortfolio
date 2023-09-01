import { useEffect, useState } from 'react';
import * as H from './Home.styles';
import RecommendCard from '../../components/pages/Home/RecommendCard/RecommendCard';
import MentorCard from '../../components/@common/Card/Card';
import RollingSlider from './SlideBanner/SlideBanner';
import Slider from '../../components/@common/Slider/Slider';
import { checkToken } from '../../utils/cookie';
import useApi from '../../hooks/useApi';
import EmptyMessage from '../../components/@common/EmptyMessage/EmptyMessage';

function Home() {
	const [recommendedMentors, setRecommendedMentors] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());

	useEffect(() => {
		const tokenStatus = checkToken();
		setIsLoggedIn(tokenStatus);
	}, []);

	const { result, error } = useApi({
		path: isLoggedIn ? '/portfolio/recommend/recommendMentor' : '',
		shouldFetch: isLoggedIn,
	});

	useEffect(() => {
		if (result && result.portfolios && result.portfolios.length > 0) {
			setRecommendedMentors([...result.portfolios]);
			console.log(error);
		}
	}, [result]);

	const userNickName = result.nickName;

	return (
		<H.Wrap>
			<H.Content>
				<RollingSlider />
				{isLoggedIn && (
					<H.RecommendMentor>
						<H.Title>
							👀 {userNickName} 님에게 추천하는 멘토
						</H.Title>
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
							{recommendedMentors.length === 0 && (
								<EmptyMessage />
							)}
						</H.RecommendCards>
					</H.RecommendMentor>
				)}
				<H.NewStudy>
					<H.TitleBox>
						<H.Title>🔥 방금 올라온 스터디 / 프로젝트</H.Title>
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
							$background="lightBlueBackground"
							url={'/projectStudy/recommend/latestProjectStudy'}
							slidesToShow={2}
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
							url={'/portfolio/recommend/topMentor'}
						/>
					</H.PopularCards>
				</H.PopularMento>
			</H.Content>
		</H.Wrap>
	);
}

export default Home;
