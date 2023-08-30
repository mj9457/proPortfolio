import React, { useState, useEffect } from 'react';
import * as S from './StudyCategory.styles';
import PostCard from '../PostCard/PostCard';
import useApi from '../../../../hooks/useApi';

function StudyCategory() {
	const [category, setCategory] = useState([
		{ name: '스터디' },
		{ name: '프로젝트' },
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

	console.log('RESULT****************', resultProjectStudy);
	console.log('classification : 스터디 파람스로', resultProjectStudy);

	useEffect(() => {
		if (resultProjectStudy) {
			setProjectStudy(resultProjectStudy);
		}
	}, [resultProjectStudy, selectedValues]);

	console.log('프로젝트 스터디 리스트', projectStudy);
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
				position: selectedValues.position, // 이 부분을 추가하여 position 값도 포함시킴
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
				classification: selectedValues.classification, // classification 값도 포함시킴
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
					isSelected={selectedValues.classification === ''}
				>
					전체
				</S.CategoryItem>
				{category.map(el => (
					<S.CategoryItem
						key={el._id}
						onClick={() => handleCategoryClick(el.name)}
						isSelected={selectedValues.classification === el.name}
					>
						{el.name}
					</S.CategoryItem>
				))}
			</S.CategoryList>

			<S.CategoryBottomList>
				<S.PositionCategoryList>
					{position.length === 0 ? (
						<>
							<p>아무것도 없어요</p>
						</>
					) : (
						<>
							<S.PositionCategoryItem
								onClick={() => handlePositionClick('')}
								isSelected={selectedValues.position === ''}
							>
								전체
							</S.PositionCategoryItem>

							{position.map(el => (
								<S.PositionCategoryItem
									isSelected={
										selectedValues.position === el.name
									}
									key={el._id}
									onClick={() => handlePositionClick(el.name)}
								>
									{el.name}
								</S.PositionCategoryItem>
							))}
						</>
					)}
				</S.PositionCategoryList>
			</S.CategoryBottomList>

			<S.PostCardContainer>
				{isLoading && <S.EmptyText>로딩 중입니다...!</S.EmptyText>}
				{!Array.isArray(projectStudy) || projectStudy.length === 0 ? (
					<S.EmptyText>아직 아무것도 없어요! 😭</S.EmptyText>
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
