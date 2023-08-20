import PopularCard from '../../components/@common/Card/Card';
import * as S from './Portfolio.styles';

function Portfolio() {
	return (
		<>
			<S.PortfolioContainer>
				<S.BannerWrapper>
					{/* banner */}
					<S.BannerImage src="./assets/img/banner/portfolio.svg" />
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
					<S.PopularTitle>✨ 지금 인기 있는 멘토</S.PopularTitle>

					{/* 지금 인기 있는 멘토들 목록 */}
					<S.PopularMentoCardWrapper>
						<PopularCard background={'blueBackground'} />
						<PopularCard background={'blueBackground'} />
						<PopularCard background={'blueBackground'} />
						<PopularCard background={'blueBackground'} />
					</S.PopularMentoCardWrapper>
				</S.PopularMento>

				<S.Line></S.Line>

				<S.EveryMentoContainer>
					<S.EveryMentoWrapper>
						{/* 모든 멘토 제목 */}
						<S.EveryMento>🌟 모든 멘토</S.EveryMento>
						<S.Input placeholder="검색어를 입력하세요." />
					</S.EveryMentoWrapper>

					<S.PopularMentoCardWrapper>
						{/* 모든 멘토 목록 */}
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
						<PopularCard background={'whiteBackground'} />
					</S.PopularMentoCardWrapper>
				</S.EveryMentoContainer>
			</S.PortfolioContainer>
		</>
	);
}

export default Portfolio;
