import * as S from './Portfolio.styles';

import Buttons from '../../components/pages/Portfolio/Buttons/Buttons';
import Line from '../../components/@common/Line/Line';
import MentorCard from '../../components/@common/Card/Card';

function Portfolio() {
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
						<MentorCard
							variant={'blue'}
							url={'/mock/bestMentor.json'}
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
						<MentorCard
							variant={'white'}
							url={'/mock/mentor.json'}
						/>
					</S.MentorCardBox>
				</S.MentorBox>
			</S.PortfolioBox>
		</>
	);
}

export default Portfolio;
