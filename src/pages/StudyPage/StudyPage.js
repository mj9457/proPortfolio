import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import * as S from './StudyPage.styles';
// import PopularCard from '../../components/pages/StudyPage/PopularCard/PopularCard';
import PostCard from '../../components/pages/StudyPage/PostCard/PostCard';
import Slider from '../../components/@common/Slider/Slider';
import SignupModal from '../../components/pages/SignUp/Modal/SignUpModal';
import Button from '../../components/@common/Button/Button';
import Category from '../../components/@common/Category/Category';
import useApi from '../../hooks/useApi';
import { checkToken } from '../../utils/cookie';

function StudyPage() {
	const navigate = useNavigate();
	const [studyData, setStudyData] = useState([]);
	const [openModal, setOpenModal] = useState(false);

	const { trigger, isLoading, error, result } = useApi({
		path: '/projectStudy',
		shouldFetch: true,
	});

	console.log('로그인 유무', checkToken());

	const isLoggedIn = checkToken();

	const onClickAddPost = () => {
		if (!isLoggedIn) {
			alert('로그인이 필요합니다.\n로그인 후 글을 작성해주세요!');
			setOpenModal(true);
		} else {
			navigate('/study/post');
		}
	};

	const handleSignupClose = () => {
		setOpenModal(false);
	};

	useEffect(() => {
		if (result && result.length > 0) {
			setStudyData(result);
		}
	}, [result]);

	// useEffect(() => {
	// 	getData();
	// }, [page]);

	// const handleObserver = entries => {
	// 	const target = entries[0];
	// 	if (target.isIntersecting) {
	// 		setPage(prevPage => prevPage + 1);
	// 	}
	// };

	// useEffect(() => {
	// 	const options = {
	// 		root: null,
	// 		rootMargin: '0px',
	// 		threshold: 1.0,
	// 	};

	// 	if (loading) return;
	// 	observer.current = new IntersectionObserver(handleObserver, options);

	// 	if (observer.current && observerElement.current) {
	// 		observer.current.observe(observerElement.current);
	// 	}

	// 	return () => {
	// 		if (observer.current) {
	// 			observer.current.disconnect();
	// 		}
	// 	};
	// }, [loading]);

	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.TopBox>
							<S.Title>
								🔥 프론트엔드 추천 스터디/ 프로젝트
							</S.Title>
							<S.SubTitle>
								포지션에 맞는 스터디, 프로젝트를 확인해보세요!
							</S.SubTitle>
						</S.TopBox>
						{/*  */}
						<Button
							variant={'add'}
							shape={'default'}
							size={'normal'}
							onClick={onClickAddPost}
						>
							글쓰기
						</Button>
					</S.TitleWrapper>

					<S.PopularCardWrapper>
						<Slider
							background="whiteBackground"
							url={
								'http://localhost:8080/api/projectStudy/recommend/latestProjectStudy'
							}
							slidesToShow={4}
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
					</S.CategoryBottomList>

					{/* 하단 글 리스트 영역 */}
					<S.PostCardContainer>
						{isLoading && <p>로딩 중입니다.</p>}
						{studyData.map((studyData, idx) => (
							<PostCard data={studyData} key={idx} />
						))}
					</S.PostCardContainer>
				</S.StudyContents>
			</S.Container>

			{openModal && <SignupModal onClose={handleSignupClose} />}
		</>
	);
}

export default StudyPage;
