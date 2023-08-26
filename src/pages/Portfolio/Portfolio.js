import * as S from './Portfolio.styles';

import Line from '../../components/@common/Line/Line';
import MentorCard from '../../components/@common/Card/Card';
import Button from '../../components/@common/Button/Button';
import Category from '../../components/@common/Category/Category';
import { useRef } from 'react';

function Portfolio() {
	// 어딘가에 저장된 user role을 가져와서 mentor의 경우만 작성하기 버튼 확인 가능
	// 버튼 클릭시 렌더링 되는 데이터 다르게 하는 로직 작성
	// infinite scroll → intersection observer 사용...? 모르겠음

	const ref = useRef();
	// if(scrollTo)

	return (
		<S.PortfolioBox>
			<S.BannerBox>
				{/* banner */}
				<S.BannerImage src="./assets/img/banner/banner02.png" />

				<S.ApplyBox>
					<a href="/portfolio/apply">
						<Button
							variant={'add'}
							shape={'default'}
							size={'normal'}
						>
							작성하기
						</Button>
					</a>
				</S.ApplyBox>
			</S.BannerBox>

			<Category variant={'cancel'} shape={'round'} size={'medium'} />

			<div>
				{/* 지금 인기 있는 멘토들 제목 */}
				<S.TitleBox>
					<span>✨ 지금 인기 있는 멘토</span>
				</S.TitleBox>

				{/* 지금 인기 있는 멘토들 목록 */}
				<S.MentorCardBox>
					<MentorCard
						variant={'blue'}
						url={'/api/portfolio/recommend/topMentor'}
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
						ref={ref}
						variant={'white'}
						url={'http://localhost:8080/api/portfolio'}
					/>
				</S.MentorCardBox>
			</S.MentorBox>
		</S.PortfolioBox>
	);
}

export default Portfolio;
