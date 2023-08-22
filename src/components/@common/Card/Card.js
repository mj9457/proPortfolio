import * as S from './Card.styles';

function PopularCard(props) {
	const { background, mentorData } = props;

	return (
		<>
			{mentorData.map((mentor, idx) => (
				<S.PopularCard
					background={background}
					href={`/portfolio/post/${mentor.postId}`}
					key={idx}
				>
					<S.CoachNumBox>
						<span>👊 코칭 {mentor.numCoaching}회</span>
					</S.CoachNumBox>

					<S.ImgBox>
						<img src="/assets/img/profile/profile4.png" />
					</S.ImgBox>

					<S.ContentsBox>
						<div>
							<S.Name>{mentor.name}</S.Name>
						</div>

						<S.Contents>
							<div>
								<S.ContentSpan>{mentor.company}</S.ContentSpan>
							</div>
							<div>
								<S.ContentSpan>{mentor.job}</S.ContentSpan>
							</div>
							<div>
								<S.ContentSpan>
									경력 {mentor.career}년
								</S.ContentSpan>
							</div>
						</S.Contents>
					</S.ContentsBox>

					<S.TitleBox>
						&quot;<span>{mentor.title}</span>&quot;
					</S.TitleBox>
				</S.PopularCard>
			))}
		</>
	);
}

export default PopularCard;
