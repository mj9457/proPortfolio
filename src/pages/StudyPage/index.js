import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from './index.styles';

import Slider from 'components/@common/Slider';
import SignupModal from 'components/pages/SignUp/Modal';
import Button from 'components/@common/Button';
import MESSAGE from 'constants/message';
import StudyCategory from 'components/pages/StudyPage/StudyCategory';
import PostCardList from 'components/pages/StudyPage/PostCardList';

import useApi from 'hooks/useApi';

import { useRecoilValue, useRecoilState } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';
import { studyPageState } from 'recoil/atoms/studyPage.atom';

function StudyPage() {
	const navigate = useNavigate();

	const { isAuth, nickName } = useRecoilValue(userAtom);

	const [openModal, setOpenModal] = useState(false);
	const [limit, setLimit] = useState(6);
	const [currentSkip, setCurrentSkip] = useState(6);

	// 카테고리 (스터디, 프로젝트 / 포지션) 클릭
	const [selectedValues, setSelectedValues] = useState({
		classification: '',
		position: '',
	});

	// 스터디 프로젝트 데이터
	const [data, setData] = useRecoilState(studyPageState);

	// 글작성 버튼
	const onClickAddPost = () => {
		if (!isAuth) {
			alert(MESSAGE.LOGIN.REQUIRED);
			setOpenModal(true);
		} else {
			navigate('/study/post');
		}
	};

	// 카테고리에 맞는 스터디 프로젝트
	const {
		trigger: triggerProjectStudy,
		isLoading: isLoadingProjectStudy,
		error: errorProjectStudy,
		result: resultProjectStudy,
	} = useApi({
		path: '/projectStudies',
		shouldFetch: true,
	});

	// 카테고리 선택해서 바뀔 때 마다 (selectedValues가 바뀔 때 마다) trigger 호출
	useEffect(() => {
		triggerProjectStudy({
			path: '/projectStudies',
			data: {
				classification: selectedValues.classification,
				position: selectedValues.position,
				limit,
				skip: 0,
			},
			applyResult: true,
		});

		setLimit(6);
		setCurrentSkip(0);
	}, [selectedValues]);

	// trigger 호출해서 불러오는 데이터가 바뀔 때 마다 새롭게 데이터 set
	// 1. 처음 페이지 들어왔을 때 데이터 업데이트 (shouldFetch : true => 데이터 호출 => setData)
	// 2. 카테고리 변경 클릭해서 skip이 초기화 될 때
	useEffect(() => {
		if (resultProjectStudy.projectStudies && currentSkip <= 6) {
			setData(resultProjectStudy.projectStudies);
		}
	}, [resultProjectStudy]);

	// 로그인 모달
	const handleSignupClose = () => {
		setOpenModal(false);
	};

	// 스크롤 맨 위로
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.TopBox>
							<S.Title>
								<img
									src="assets/img/icons/fire.svg"
									alt="불 아이콘"
								/>
								{isAuth && nickName
									? `${nickName} 님 추천 스터디 / 프로젝트`
									: '추천 스터디 / 프로젝트'}
							</S.Title>
							<S.SubTitle>
								{isAuth
									? '포지션에 맞는 스터디, 프로젝트를 확인해 보세요!'
									: '로그인하고 스터디, 프로젝트에 참여해 보세요!'}
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
							$background="whiteBackground"
							url={
								isAuth
									? '/projectStudies/recommend/recommendProjectStudy'
									: '/projectStudies/recommend/recommendProjectStudyForGuest'
							}
							slidesToShow={4}
						/>
					</S.PopularCardWrapper>
				</S.PopularContents>

				<S.StudyContents>
					<S.TitleWrapper>
						<S.Title>
							<img
								src="assets/img/icons/stars.svg"
								alt="별 아이콘"
							/>{' '}
							함께 성장할 동료를 찾아보세요!
						</S.Title>
					</S.TitleWrapper>

					{/* 필터 카테고리 버튼 영역 */}

					<S.CategoryContainer>
						<StudyCategory
							selectedValues={selectedValues}
							setSelectedValues={setSelectedValues}
						/>
						<PostCardList
							trigger={triggerProjectStudy}
							isLoadingProjectStudy={isLoadingProjectStudy}
							result={resultProjectStudy}
							limit={limit}
							currentSkip={currentSkip}
							setCurrentSkip={setCurrentSkip}
							selectedValues={selectedValues}
						/>
					</S.CategoryContainer>
				</S.StudyContents>
			</S.Container>

			{openModal && <SignupModal onClose={handleSignupClose} />}
		</>
	);
}

export default StudyPage;
