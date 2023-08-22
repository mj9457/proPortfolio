import Line from '../../../components/@common/Line/Line';
import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/pages/Portfolio/Review/Review';
import ReviewComment from '../../../components/pages/Portfolio/Review/ReviewComment/ReviewComment';
import * as S from './PortfolioPost.styles';

function PortfolioPost() {
	return (
		<S.PostBox>
			<S.TitleBox>
				<span>경력 엔년차! 코칭을 해드립니다. 믿고 맡겨 주세요!</span>
			</S.TitleBox>

			<S.ContentsBox>
				<S.MentorBox>
					<S.NameBox>
						<img src="/assets/img/profile/profile.png" />
						<strong>산마루</strong>

						<Line size={'height'} />

						<span>2023.08.16 오후 10:00</span>
					</S.NameBox>
					<S.Button>신청하기</S.Button>
				</S.MentorBox>

				<Line size={'small'} />

				<IntroContents />

				<Line size={'small'} />

				<Review />

				<ReviewComment />
				<ReviewComment />
				<ReviewComment />
			</S.ContentsBox>
		</S.PostBox>
	);
}

export default PortfolioPost;
