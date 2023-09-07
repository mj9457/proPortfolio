import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as H from './Home.styles';
import RecommendCard from '../../components/pages/Home/RecommendCard/RecommendCard';
import MentorCard from '../../components/@common/Card/Card';
import RollingSlider from './SlideBanner/SlideBanner';
import Slider from '../../components/@common/Slider/Slider';
import useApi from '../../hooks/useApi';
import EmptyMessage from '../../components/@common/EmptyMessage/EmptyMessage';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../recoil/atoms/index.atom';

function Home() {
	const [recommendedMentors, setRecommendedMentors] = useState([]);
	const { isAuth } = useRecoilValue(userAtom);
	const [nickName, setNickName] = useState('');

	const { trigger: recommandTrigger } = useApi({
		path: '/portfolio/recommend/recommendMentor',
		shouldFetch: false,
	});

	const getRecommandMentors = async () => {
		const getResult = await recommandTrigger({ applyResult: false });

		if (getResult && getResult.portfolios && getResult.portfolios.length) {
			setNickName(getResult.nickName);
			setRecommendedMentors([...getResult.portfolios]);
		}
	};

	useEffect(() => {
		if (isAuth) {
			getRecommandMentors();
		}
	}, [isAuth]);

	return (
		<H.Wrap>
			<H.Content>
				<RollingSlider />
				{isAuth && (
					<H.RecommendMentor>
						<H.Title>👀 {nickName} 님에게 추천하는 멘토</H.Title>
						<H.RecommendCards>
							{recommendedMentors.map((mentor, idx) => (
								<RecommendCard
									key={idx}
									id={mentor._id}
									profileImageUrl={mentor.profileImageUrl}
									nickName={mentor.nickName}
									company={mentor.company}
									position={mentor.position}
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
						<Link to="/study">
							{' '}
							<H.ViewAll>
								전체보기
								<img
									src="/assets/img/icons/bluearrow.svg"
									alt="파란화살표"
								/>
							</H.ViewAll>
						</Link>
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
						<Link to="/portfolio">
							<H.ViewAll>
								전체보기
								<img
									src="/assets/img/icons/bluearrow.svg"
									alt="파란화살표"
								/>
							</H.ViewAll>
						</Link>
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
