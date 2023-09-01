import { useEffect, useRef, useState } from 'react';

import { checkToken } from '../../utils/cookie';
import useApi from '../../hooks/useApi';

import * as S from './Portfolio.styles';

import Line from '../../components/@common/Line/Line';
import MentorCard from '../../components/pages/Portfolio/PortfolioCard/Card';
import Button from '../../components/@common/Button/Button';
import Select from '../../components/@common/Select/Select';
import EmptyMessage from '../../components/@common/EmptyMessage/EmptyMessage';

function Portfolio() {
	// 로그인 유저 체크
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());

	// 멘토 체크
	const [isMentor, setIsMentor] = useState(false);

	// 모든 멘토 데이터
	const [mentorData, setMentorData] = useState([]);
	const [mentorDataTotal, setMentorDataTotal] = useState(0);

	// 인기 멘토
	const [popularData, setPopularData] = useState([]);

	// 포지션 === 카테고리 관리
	const [positions, setPositions] = useState([]);
	const [selectedValues, setSelectedValues] = useState({
		position: '',
		selectedSort: 'newest',
	});

	// 무한 스크롤
	const [limit, setLimit] = useState(12);
	const [currentSkip, setCurrentSkip] = useState(12);

	const observer = useRef();
	const observerElement = useRef();

	// api 통신 1. 유저 정보 / 2. 포지션 === 카테고리 정보 / 3. 모든 멘토 데이터 호출
	const { result } = useApi({
		path: isLoggedIn ? '/user' : '',
		shouldFetch: isLoggedIn,
	});

	const { result: positionResult } = useApi({
		path: '/position',
		shouldFetch: true,
	});

	const {
		result: mentorResult,
		isLoading,
		trigger,
	} = useApi({
		path: '/portfolio',
		shouldFetch: true,
	});

	const { result: popularMentorResult } = useApi({
		path: '/portfolio/recommend/topMentor',
		shouldFetch: true,
	});
	useEffect(() => {
		if (mentorResult.data && mentorResult.data.length > 0) {
			setMentorData(prev => [...prev, ...mentorResult.data]);
			setMentorDataTotal(mentorResult.total);

			if (currentSkip <= 12) {
				setMentorData(mentorResult.data);
			}
		}
	}, [mentorResult]);

	// 로그인 체크
	useEffect(() => {
		const tokenStatus = checkToken();
		setIsLoggedIn(tokenStatus);
	}, []);

	// 멘토 롤 체크 && 카테고리 값 들어오는지 체크
	useEffect(() => {
		const mentor = result.role === 'mentor';

		if (mentor) setIsMentor(true);
		else setIsMentor(false);

		if (positionResult.positions) {
			setPositions(positionResult.positions);
		}

		if (mentorResult.data && mentorResult.data.length > 0) {
			setMentorData(mentorResult.data);
		}

		if (popularMentorResult && popularMentorResult.length > 0) {
			setPopularData(popularMentorResult);
		}
	}, [result, positionResult, popularMentorResult]);

	// 무한 스크롤
	const handleObserver = entries => {
		const target = entries[0];

		if (mentorData.length >= mentorDataTotal) return;
		if (target.isIntersecting && !isLoading) {
			setCurrentSkip(prevSkip => {
				return prevSkip + limit;
			});

			trigger({
				params: {
					category: selectedValues.position,
					sort: selectedValues.selectedSort,
					limit,
					skip: currentSkip,
				},
				applyResult: true,
			});
		}
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		};

		observer.current = new IntersectionObserver(handleObserver, options);

		if (observerElement.current) {
			observer.current.observe(observerElement.current);
		}

		if (mentorData.length >= mentorDataTotal) {
			observer.current.disconnect();
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [observer.current, observerElement, mentorData, mentorDataTotal]);

	// select 클릭
	const handleChange = e => {
		setLimit(12);
		setCurrentSkip(0);

		const { value } = e.target;

		trigger({
			params: {
				category: selectedValues.position,
				sort: value,
				limit,
				skip: currentSkip,
			},

			applyResult: true,
		});
	};

	// 포지션 클릭
	const handlePositionClick = positionValue => {
		setLimit(12);
		setCurrentSkip(0);

		setSelectedValues(prev => ({
			...prev,
			position: positionValue,
		}));

		trigger({
			params: {
				category: positionValue,
				sort: selectedValues.selectedSort,
				limit,
				skip: 0,
			},

			applyResult: true,
		});
	};

	useEffect(() => {
		if (positionResult.positions && positionResult.positions.length > 0) {
			setPositions(positionResult.positions);
		}
	}, [positionResult.positions]);

	return (
		<S.PortfolioBox>
			<S.BannerBox>
				{/* banner */}
				<S.BannerImage src="./assets/img/banner/banner02.png" />

				{isMentor && (
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
				)}
			</S.BannerBox>

			<S.ButtonBox>
				<div>
					<S.PositionCategoryItem
						onClick={() => handlePositionClick('')}
						$isSelected={selectedValues.position === ''}
					>
						전체
					</S.PositionCategoryItem>

					{positions &&
						positions.map(position => (
							<S.PositionCategoryItem
								key={position.id}
								onClick={() =>
									handlePositionClick(position.name)
								}
								$isSelected={
									selectedValues.position === position.name
								}
							>
								{position.name}
							</S.PositionCategoryItem>
						))}
				</div>
			</S.ButtonBox>

			<div>
				{/* 지금 인기 있는 멘토들 제목 */}
				<S.TitleBox>
					<span>✨ 지금 인기 있는 멘토</span>
				</S.TitleBox>

				{/* 지금 인기 있는 멘토들 목록 4개 */}
				<S.MentorCardBox>
					{!Array.isArray(popularData) || popularData.length === 0 ? (
						<EmptyMessage />
					) : (
						<>
							{popularData.map((mentor, idx) => (
								<div key={mentor._id + idx}>
									<MentorCard
										variant={'blue'}
										mentor={mentor}
									/>
								</div>
							))}
						</>
					)}
				</S.MentorCardBox>
			</div>

			<Line size={'small'} />

			<S.MentorBox>
				{/* 모든 멘토 제목 쫘르르르륵~ */}
				<S.MentorTitleBox>
					<span>🌟 모든 멘토</span>

					<Select
						variant={'none'}
						font={'regular'}
						onChange={handleChange}
					>
						<option value="newest">최신순</option>
						<option value="popular">인기순</option>
					</Select>
				</S.MentorTitleBox>

				<S.MentorCardBox>
					{!Array.isArray(mentorData) || mentorData.length === 0 ? (
						<EmptyMessage />
					) : (
						<>
							{mentorData.map((mentor, idx) => (
								<div key={mentor._id + idx}>
									<MentorCard
										variant={'white'}
										mentor={mentor}
									/>
								</div>
							))}
							<div
								style={{
									height: '10px',
									border: '1px solid white',
								}}
								ref={observerElement}
							/>
						</>
					)}
				</S.MentorCardBox>
			</S.MentorBox>
		</S.PortfolioBox>
	);
}

export default Portfolio;
