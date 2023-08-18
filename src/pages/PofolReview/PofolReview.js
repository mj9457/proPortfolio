import * as S from './PofolReview.styles';

function Portfolio() {
	return (
		<>
			<S.PortfolioContainer>
				<S.BannerWrapper>
					{/* banner */}
					<S.BannerImage src="./assets/img/banner/portpolio.svg" />
				</S.BannerWrapper>

				<S.ButtonWrapper>
					{/* buttons */}
					<div>
						<S.Buttons>전체</S.Buttons>
						<S.Buttons>프론트엔드</S.Buttons>
						<S.Buttons>백엔드</S.Buttons>
						<S.Buttons>Android</S.Buttons>
						<S.Buttons>IOS</S.Buttons>
					</div>
					<div>
						<S.WriteButtons>작성하기</S.WriteButtons>
					</div>
				</S.ButtonWrapper>

				<S.PopularMento>
					{/* 지금 인기 있는 멘토들 제목 */}
					<span>✨ 지금 인기 있는 멘토</span>

					{/* 지금 인기 있는 멘토들 목록 */}
					<S.PopularMentoCardWrapper>
						<S.PopularMentoCard>
							<div>
								<div>
									<span>👊 코칭 30회</span>
								</div>
								<div>
									<img src="./assets/img/profile/profile.png" />
								</div>
								<div>
									<div>
										<span>Naver</span>
									</div>
									<div></div>
								</div>
								<div>{'경력 엔년차 코칭해 줌'}</div>
							</div>
						</S.PopularMentoCard>
						<S.PopularMentoCard>
							<div>
								<div>
									<span>👊 코칭 30회</span>
								</div>
								<div>
									<img src="./assets/img/profile/profile.png" />
								</div>
								<div>
									<div>
										<span>Naver</span>
									</div>
									<div></div>
								</div>
								<div>{'경력 엔년차 코칭해 줌'}</div>
							</div>
						</S.PopularMentoCard>
						<S.PopularMentoCard>
							<div>
								<div>
									<span>👊 코칭 30회</span>
								</div>
								<div>
									<img src="./assets/img/profile/profile.png" />
								</div>
								<div>
									<div>
										<span>Naver</span>
									</div>
									<div>{'프론트엔드 개발자'}</div>
									<div>{'경력 7년'}</div>
								</div>
								<div>{'경력 엔년차 코칭해 줌'}</div>
							</div>
						</S.PopularMentoCard>
						<S.PopularMentoCard>
							<div>
								<div>
									<span>👊 코칭 30회</span>
								</div>
								<div>
									<img src="./assets/img/profile/profile.png" />
								</div>
								<div>
									<div>
										<span>Naver</span>
									</div>
									<div></div>
								</div>
								<div>{'경력 엔년차 코칭해 줌'}</div>
							</div>
						</S.PopularMentoCard>
					</S.PopularMentoCardWrapper>
				</S.PopularMento>

				<div>
					<div>
						{/* 모든 멘토 제목 */}
						<span></span>
						<input />
					</div>

					<div>
						{/* 모든 멘토 목록 */}
						<div></div>
					</div>
				</div>
			</S.PortfolioContainer>
		</>
	);
}

export default Portfolio;
