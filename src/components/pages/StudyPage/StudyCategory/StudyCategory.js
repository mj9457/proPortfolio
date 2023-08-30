import React, { useState, useEffect } from 'react';
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

	// 포지션 리스트
	const { trigger, isLoading, error, result } = useApi({
		path: '/position',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result && result.length > 0) {
			setPosition(result);
		}
	}, [result]);

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
		if (resultProjectStudy) {
			setProjectStudy(resultProjectStudy);
		}
	}, [resultProjectStudy, selectedValues]);

	// console.log(
	// 	'selectedValue - 버튼 선택한 값 (파람스로 보내는 값)',
	// 	selectedValues,

	// 	'resultProjectStudy - result 프로젝트 스터디 데이터 리스트',
	// 	resultProjectStudy,

	// 	'projectStudy - set한 프로젝트 스터디 데이터 리스트',
	// 	projectStudy,
	// );

	const handleCategoryClick = classificationValue => {
		setSelectedValues(prev => ({
			...prev,
			classification: classificationValue,
		}));

		triggerProjectStudy({
			params: {
				classification: classificationValue,
				position: selectedValues.position,
			},
			applyResult: true,
		});
	};

	const handlePositionClick = positionValue => {
		setSelectedValues(prev => ({
			...prev,
			position: positionValue,
		}));

		triggerProjectStudy({
			params: {
				classification: selectedValues.classification,
				position: positionValue,
			},
			applyResult: true,
		});
	};

	console.log('PROJECTSTUDY', projectStudy);

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

					{position.map(el => (
						<S.PositionCategoryItem
							$isSelected={selectedValues.position === el.name}
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
					projectStudy.map((projectStudy, idx) => (
						<PostCard data={projectStudy} key={idx} />
					))
				)}
			</S.PostCardContainer>
		</>
	);
}

export default StudyCategory;
