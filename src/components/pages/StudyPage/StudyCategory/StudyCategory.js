import React, { useState, useEffect, useRef } from 'react';
import * as S from './StudyCategory.styles';
import PostCard from '../PostCard/PostCard';
import useApi from '../../../../hooks/useApi';
import EmptyMessage from '../../../@common/EmptyMessage/EmptyMessage';

function StudyCategory() {
	const [category, setCategory] = useState([
		{ name: '스터디', id: 0 },
		{ name: '프로젝트', id: 1 },
	]);
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
		isLoading,
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

	// const handleObserver = entries => {
	// 	const target = entries[0];
	// 	if (target.isIntersecting) {
	// 		console.log('통과');
	// 		setSkip(prevSkip => {
	// 			const newSkip = prevSkip + limit;
	// 			triggerProjectStudy({
	// 				path: '/projectStudy',
	// 				params: {
	// 					classification: selectedValues.classification,
	// 					position: selectedValues.position,
	// 					limit,
	// 					skip: newSkip,
	// 				},
	// 				shouldFetch: true,
	// 				applyResult: true,
	// 			});

	// 			return newSkip;
	// 		});
	// 		console.log('SKIP', skip);
	// 		console.log('projectStudy', projectStudy);
	// 		setProjectStudy(prevProjectStudy => [
	// 			...prevProjectStudy,
	// 			...resultProjectStudy,
	// 		]);
	// 		console.log('projectStudy22222222222222222222', projectStudy);
	// 	}
	// };

	// ***********************************************

	const handleObserver = entries => {
		const target = entries[0];

		if (target.isIntersecting && !isLoadingProjectStudy) {
			console.log('플젝스터디1', projectStudy);

			setCurrentSkip(prevSkip => {
				return prevSkip + limit;
				// triggerProjectStudy({
				// 	path: '/projectStudy',
				// 	params: {
				// 		classification: selectedValues.classification,
				// 		position: selectedValues.position,
				// 		limit,
				// 		skip: newSkip,
				// 	},
				// 	applyResult: true,
				// });
			});

			console.log('LIMIT', limit, 'SKIP', currentSkip);

			triggerProjectStudy({
				path: '/projectStudy',
				params: {
					classification: selectedValues.classification,
					position: selectedValues.position,
					// limit,
					skip: currentSkip,
				},
				applyResult: true,
			});

			setProjectStudy(prevProjectStudy => [
				...prevProjectStudy,
				...resultProjectStudy.projectStudies,
			]);

			console.log('스킵나온후플젝스터디5', projectStudy);
		}
		console.log('플젝스터디', projectStudy);
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

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [observer.current, observerElement]);

	// 전체, 스터디, 프로젝트 클릭
	const handleCategoryClick = classificationValue => {
		setLimit(6);
		// setCurrentSkip(0);

		setSelectedValues(prev => ({
			...prev,
			classification: classificationValue,
		}));

		triggerProjectStudy({
			params: {
				classification: classificationValue,
				position: selectedValues.position,
				limit,
				skip: 0,
			},
			applyResult: true,
		});
	};

	// 포지션 클릭
	const handlePositionClick = positionValue => {
		setLimit(6);
		// setSkip(0);

		setSelectedValues(prev => ({
			...prev,
			position: positionValue,
		}));

		triggerProjectStudy({
			params: {
				classification: selectedValues.classification,
				position: positionValue,
				limit,
				skip: 0,
			},
			applyResult: true,
		});
	};

	// useEffect(() => {
	// 	console.log('STudyproject1', projectStudy);
	// 	console.log('selectedValues', selectedValues);
	// 	console.log('STudyproject2', projectStudy);
	// }, [selectedValues]);

	useEffect(() => {
		if (positionResult.positions && positionResult.positions.length > 0) {
			setPosition(positionResult.positions);
		}
	}, [positionResult]);

	useEffect(() => {
		console.log(
			'resultProjectStudy.projectStudies222',
			resultProjectStudy.projectStudies,
		);

		if (
			resultProjectStudy.projectStudies &&
			resultProjectStudy.projectStudies.length > 0 &&
			currentSkip === 6
		) {
			console.log('projectStudy209', projectStudy);

			console.log('처음set');
			setProjectStudy(resultProjectStudy.projectStudies);
		}
	}, [resultProjectStudy]);

	// ***********************************************************************
	// ***********************************************************************

	return (
		<>
			<S.CategoryList>
				<S.CategoryItem
					onClick={() => handleCategoryClick('')}
					$isSelected={selectedValues.classification === ''}
				>
					전체
				</S.CategoryItem>
				{category.map(el => (
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
				{isLoading && <S.EmptyText>로딩 중입니다...!</S.EmptyText>}
				{!Array.isArray(projectStudy) || projectStudy.length === 0 ? (
					<EmptyMessage />
				) : (
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
				)}
			</S.PostCardContainer>
		</>
	);
}

export default StudyCategory;
