import { useEffect, useState } from 'react';

import { checkToken } from '../../utils/cookie';
import useApi from '../../hooks/useApi';

import * as S from './Portfolio.styles';

import Line from '../../components/@common/Line/Line';
import MentorCard from '../../components/@common/Card/Card';
import Button from '../../components/@common/Button/Button';
import Select from '../../components/@common/Select/Select';

function Portfolio() {
	// 로그인 유저 체크
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());

	// 멘토 체크
	const [isMentor, setIsMentor] = useState(false);

	// 포지션 === 카테고리 관리
	const [positions, setPositions] = useState([]);

	// api 통신 1. 유저 정보 / 2. 포지션 === 카테고리 정보
	const { result, trigger, isLoading, error } = useApi({
		path: isLoggedIn ? '/user' : '',
		shouldFetch: isLoggedIn,
	});

	const { result: positionResult } = useApi({
		path: '/position',
		shouldFetch: true,
	});

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
			console.log(error);
		}
	}, [result, positionResult]);

	return (
		<S.PortfolioBox>
			<S.BannerBox>
				{/* banner */}
				<S.BannerImage src="./assets/img/banner/banner02.png" />

				{isMentor && (
					<S.ApplyBox>
						<a href="/portfolio/apply">
							<Button variant={'add'} shape={'default'} size={'normal'}>
								작성하기
							</Button>
						</a>
					</S.ApplyBox>
				)}
			</S.BannerBox>

			<S.ButtonBox>
				<div>
					<Button variant={'primary'} shape={'round'} size={'medium'}>
						전체
					</Button>

					{positions.map((position, idx) => (
						<Button
							variant={'primary'}
							shape={'round'}
							size={'medium'}
							key={idx}
						>
							{position.name}
						</Button>
					))}
				</div>
			</S.ButtonBox>

			<div>
				{/* 지금 인기 있는 멘토들 제목 */}
				<S.TitleBox>
					<span>✨ 지금 인기 있는 멘토</span>
				</S.TitleBox>

				{/* 지금 인기 있는 멘토들 목록 */}
				<S.MentorCardBox>
					{isLoading ? (
						<h2>로딩 중입니다.</h2>
					) : (
						<MentorCard
							variant={'blue'}
							url={'/portfolio/recommend/topMentor'}
						/>
					)}
				</S.MentorCardBox>
			</div>

			<Line size={'small'} />

			<S.MentorBox>
				{/* 모든 멘토 제목 */}
				<S.MentorTitleBox>
					<span>🌟 모든 멘토</span>

					<Select variant={'none'} font={'regular'}>
						<option value="popular">인기순</option>
						<option value="newest">최신순</option>
					</Select>
				</S.MentorTitleBox>

				<S.MentorCardBox>
					{isLoading ? (
						<h2>로딩 중입니다.</h2>
					) : (
						<MentorCard variant={'white'} url={'/portfolio'} />
					)}
				</S.MentorCardBox>
			</S.MentorBox>
		</S.PortfolioBox>
	);
}

export default Portfolio;
