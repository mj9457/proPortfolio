import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './StudyPage.styles';
// import PopularCard from '../../components/pages/StudyPage/PopularCard/PopularCard';
import PostCard from '../../components/pages/StudyPage/PostCard/PostCard';
// import Slider from '../../components/pages/StudyPage/Slider/Slider';
import Slider from '../../components/@common/Slider/Slider';
import Button from '../../components/@common/Button/Button';
import Category from '../../components/@common/Category/Category';

function StudyPage() {
	const navigate = useNavigate();
	const [studyData, setStudyData] = useState([]);

	const URL = '/mock/study.json';
	useEffect(() => {
		const getPost = async () => {
			try {
				const res = await axios.get(URL);
				const data = res.data.data;
				// console.log(data);

				setStudyData([...data]);
			} catch (err) {
				console.log(err);
			}
		};

		getPost();
	}, []);

	const onClickAddPost = () => {
		navigate('/study/post');
	};
	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.Title>🔥 프론트엔드 추천 스터디/ 프로젝트</S.Title>
						<S.SubTitle>
							포지션에 맞는 스터디, 프로젝트를 확인해보세요!
						</S.SubTitle>
					</S.TitleWrapper>

					<S.PopularCardWrapper>
						<Slider
							background="whiteBackground"
							url={'/mock/studyInfo.json'}
						/>
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
						<S.PositionCategoryList>
							<Category
								variant={'reverse'}
								shape={'round'}
								size={'small'}
							/>
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
						{studyData.map((studyData, idx) => (
							<PostCard data={studyData} key={idx} />
						))}
					</S.PostCardContainer>
				</S.StudyContents>
			</S.Container>
		</>
	);
}

export default StudyPage;
