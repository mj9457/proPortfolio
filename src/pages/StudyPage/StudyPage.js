import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './StudyPage.styles';
import PopularCard from '../../components/pages/StudyPage/PopularCard/PopularCard';
import PostCard from '../../components/pages/StudyPage/PostCard/PostCard';
import Slider from '../../components/pages/StudyPage/Slider/Slider';
import Button from '../../components/@common/Button/Button';

function StudyPage() {
	const navigate = useNavigate();

	const onClickAddPost = () => {
		navigate('/study/edit');
	};
	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.Title>🔥 인기 스터디/ 프로젝트</S.Title>
						<S.SubTitle>
							지금 인기 있는 스터디, 프로젝트를 확인해보세요!
						</S.SubTitle>
					</S.TitleWrapper>

					<S.PopularCardWrapper>
						<Slider />
						{/* <PopularCard />
						<PopularCard />
						<PopularCard />
						<PopularCard /> */}
					</S.PopularCardWrapper>

					{/* 스터디, 프로젝트 목록 */}
				</S.PopularContents>

				<S.StudyContents>
					<S.TitleWrapper>
						<S.Title>✨ 함께 성장할 동료를 찾아보세요!</S.Title>
					</S.TitleWrapper>

					{/* 상단 필터 카테고리 버튼 영역 */}
					<S.CategoryList>
						<S.CategoryItem>전체</S.CategoryItem>
						<S.CategoryItem>스터디</S.CategoryItem>
						<S.CategoryItem>프로젝트</S.CategoryItem>
					</S.CategoryList>

					<S.CategoryBottomList>
						{/* // 컴포넌트 분리 */}
						<S.PositionCategoryList>
							<S.PositionCategoryItem>
								전체
							</S.PositionCategoryItem>
							<S.PositionCategoryItem>
								프론트엔드
							</S.PositionCategoryItem>
						</S.PositionCategoryList>
						{/*  */}
						<Button
							variant={'add'}
							shape={'default'}
							size={'normal'}
							onClick={onClickAddPost}
						>
							글쓰기
						</Button>
					</S.CategoryBottomList>

					{/* 하단 글 리스트 영역 */}
					<S.PostCardContainer>
						<PostCard />
						<PostCard />
						<PostCard />
					</S.PostCardContainer>
				</S.StudyContents>
			</S.Container>
		</>
	);
}

export default StudyPage;
