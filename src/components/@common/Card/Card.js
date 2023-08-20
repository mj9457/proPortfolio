import * as S from './Card.styles';

function PopularCard({ background }) {
	return (
		<S.PopularCard background={background} href="/post">
			<S.CoachNumBox>
				<span>👊 코칭 30회</span>
			</S.CoachNumBox>

			<S.ImgBox>
				<img src="./assets/img/profile/profile.png" />
			</S.ImgBox>

			<S.ContentsBox>
				<div>
					<S.Name>산마루</S.Name>
				</div>

				<S.Contents>
					<div>
						<S.ContentSpan>Naver</S.ContentSpan>
					</div>
					<div>
						<S.ContentSpan>프론트엔드 개발자</S.ContentSpan>
					</div>
					<div>
						<S.ContentSpan>경력 15년</S.ContentSpan>
					</div>
				</S.Contents>
			</S.ContentsBox>

			<S.TitleBox>
				<span>&quot;경력 엔년차 코칭해 줌&quot;</span>
			</S.TitleBox>
		</S.PopularCard>
	);
}

export default PopularCard;
