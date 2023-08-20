import PopularCard from '../../components/@common/Card/Card';
import Buttons from '../../components/pages/Portfolio/Buttons/Buttons';
import Line from '../../components/@common/Line/Line';
import * as S from './Portfolio.styles';

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
						<PopularCard background={'blueBackground'} />
						<PopularCard background={'blueBackground'} />
						<PopularCard background={'blueBackground'} />
						<PopularCard background={'blueBackground'} />
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
						{/* 모든 멘토 목록 */}
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
					</S.MentorCardBox>
				</S.MentorBox>
			</S.PortfolioBox>
		</>
	);
}

export default Portfolio;
