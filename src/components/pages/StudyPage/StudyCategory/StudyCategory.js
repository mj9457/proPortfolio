/* eslint-disable no-useless-return */
import React, { useState, useEffect, useRef } from 'react';
import * as S from './StudyCategory.styles';
import PostCard from '../PostCard/PostCard';
import useApi from '../../../../hooks/useApi';
import EmptyMessage from '../../../@common/EmptyMessage/EmptyMessage';
import LoadingBar from '../../../@common/Loading/LoadingBar';

const defaultCategories = [
	{ name: '스터디', id: 0 },
	{ name: '프로젝트', id: 1 },
];

function StudyCategory() {
	const [position, setPosition] = useState([]);
	const [projectStudy, setProjectStudy] = useState([]);
	const [selectedValues, setSelectedValues] = useState({
		classification: '',
		position: '',
	});

	// 무한스크롤
	const [limit, setLimit] = useState(6);
	const [currentSkip, setCurrentSkip] = useState(6);

	const observer = useRef();
	const observerElement = useRef();

	// 포지션 리스트
	const {
		trigger,
		isLoading: isLoadingPosition,
		error,
		result: positionResult,
	} = useApi({
		path: '/position',
		shouldFetch: true,
	});

	// 카테고리에 맞는 스터디 프로젝트
	const {
		trigger: triggerProjectStudy,
		isLoading: isLoadingProjectStudy,
		error: errorProjectStudy,
		result: resultProjectStudy,
	} = useApi({
		path: '/projectStudy',
		shouldFetch: true,
	});

	useEffect(() => {
		if (
			resultProjectStudy.projectStudies &&
			resultProjectStudy.projectStudies.length > 0
		) {
			if (currentSkip <= 6) {
				setProjectStudy(resultProjectStudy.projectStudies);
			}
		}
	}, [resultProjectStudy.projectStudies]);

	const handleObserver = (entries, observer) => {
		const target = entries[0];
		if (target.isIntersecting && !isLoadingProjectStudy) {
			setCurrentSkip(prevSkip => {
				return prevSkip + limit;
			});

			if (resultProjectStudy.projectStudies.length === 0) {
				return;
			}
			// console.log(
			// 	'handleObserver selectedValues',
			// 	selectedValues.position,
			// );
			triggerProjectStudy({
				path: '/projectStudy',
				data: {
					classification: selectedValues.classification,
					position: selectedValues.position,
					limit,
					skip: currentSkip,
				},
				applyResult: true,
			});

			const newProjectStudies = resultProjectStudy.projectStudies.filter(
				newData =>
					!projectStudy.some(
						existingData => existingData._id === newData._id,
					),
			);

			setProjectStudy(prevProjectStudy => [
				...prevProjectStudy,
				...newProjectStudies,
			]);
		}
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		};

		observer.current = new IntersectionObserver(handleObserver, options);

		if (
			resultProjectStudy.projectStudies &&
			resultProjectStudy.projectStudies.length === 0
		) {
			if (observerElement.current) {
				observer.current.unobserve(observerElement.current);
			}
			observer.current.disconnect();
		}

		if (observerElement.current) {
			observer.current.observe(observerElement.current);
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [observer.current, observerElement, resultProjectStudy.projectStudies]);

	// 전체, 스터디, 프로젝트 클릭
	const handleCategoryClick = classificationValue => {
		setLimit(6);
		setCurrentSkip(0);

		setSelectedValues(prev => ({
			...prev,
			classification: classificationValue,
		}));

		if (selectedValues.classificationValue !== classificationValue) {
			setProjectStudy([]);
		}
	};

	// 포지션 클릭
	const handlePositionClick = positionValue => {
		setLimit(6);
		setCurrentSkip(0);

		// console.log({ positionValue });

		setSelectedValues(prev => ({
			...prev,
			position: positionValue,
		}));

		if (selectedValues.position !== positionValue) {
			setProjectStudy([]);
		}
	};

	useEffect(() => {
		triggerProjectStudy({
			data: {
				classification: selectedValues.classification,
				position: selectedValues.position,
				limit,
				skip: 0,
			},
			applyResult: true,
		});
	}, [selectedValues.classification, selectedValues.position]);

	useEffect(() => {
		if (positionResult.positions && positionResult.positions.length > 0) {
			setPosition(positionResult.positions);
		}
	}, [positionResult]);

	return (
		<>
			<S.CategoryList>
				<S.CategoryItem
					onClick={() => handleCategoryClick('')}
					$isSelected={selectedValues.classification === ''}
				>
					전체
				</S.CategoryItem>
				{defaultCategories.map(el => (
					<S.CategoryItem
						key={el.id}
						onClick={() => handleCategoryClick(el.name)}
						$isSelected={selectedValues.classification === el.name}
					>
						{el.name}
					</S.CategoryItem>
				))}
			</S.CategoryList>

			<S.CategoryBottomList>
				<S.PositionCategoryList>
					<S.PositionCategoryItem
						onClick={() => handlePositionClick('')}
						$isSelected={selectedValues.position === ''}
					>
						전체
					</S.PositionCategoryItem>

					{position &&
						position.map(el => (
							<S.PositionCategoryItem
								$isSelected={
									selectedValues.position === el.name
								}
								key={el._id}
								onClick={() => handlePositionClick(el.name)}
							>
								{el.name}
							</S.PositionCategoryItem>
						))}
				</S.PositionCategoryList>
			</S.CategoryBottomList>

			<S.PostCardContainer>
				{isLoadingProjectStudy && !projectStudy.length && (
					<LoadingBar />
				)}
				{/* {!isLoadingProjectStudy && !projectStudy.length && (
					<EmptyMessage />
				)}
				{!isLoadingProjectStudy &&
					Array.isArray(projectStudy) &&
					projectStudy.length && (
						<>
							{projectStudy.map((projectStudy, idx) => (
								<div key={projectStudy._id + idx}>
									<PostCard data={projectStudy} />
								</div>
							))}

							<div
								style={{
									height: '10px',
									border: '1px solid black',
								}}
								ref={observerElement}
							/>
						</>
					)} */}

				{!isLoadingProjectStudy && !projectStudy.length && (
					<EmptyMessage />
				)}
				{Array.isArray(projectStudy) && projectStudy.length > 0 && (
					<>
						{projectStudy.map((projectStudy, idx) => (
							<div key={projectStudy._id + idx}>
								<PostCard data={projectStudy} />
							</div>
						))}

						<div
							style={{
								height: '10px',
								border: 'none',
							}}
							ref={observerElement}
						/>
					</>
				)}
			</S.PostCardContainer>
		</>
	);
}

export default StudyCategory;
