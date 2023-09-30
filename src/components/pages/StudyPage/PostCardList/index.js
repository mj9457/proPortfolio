import React, { useState, useEffect, useRef } from 'react';
import PostCard from '../PostCard';
import * as S from './index.styles';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import { useRecoilState } from 'recoil';
import { studyPageState } from 'recoil/atoms/studyPageAtoms';

import LoadingBar from 'components/@common/Loading';
import EmptyMessage from 'components/@common/EmptyMessage';

function PostCardList({
	isLoadingProjectStudy,
	selectedValues,
	trigger,
	result,
	setCurrentSkip,
	currentSkip,
	limit,
}) {
	const [data, setData] = useRecoilState(studyPageState);

	const loadData = () => {
		console.log('통과할 때 콜백함수');
		setCurrentSkip(prevSkip => {
			return prevSkip + limit;
		});

		trigger({
			path: '/projectStudies',
			data: {
				classification: selectedValues.classification,
				position: selectedValues.position,
				limit,
				skip: currentSkip,
			},
			applyResult: true,
		});

		setData(prev => [...prev, ...result.projectStudies]);
	};
	const { observeElement } = useInfiniteScroll(loadData);

	return (
		<>
			<S.PostCardContainer>
				{isLoadingProjectStudy && !data.length && <LoadingBar />}
				{!isLoadingProjectStudy && !data.length && <EmptyMessage />}
				{Array.isArray(data) && data.length > 0 && (
					<>
						{data.map((data, idx) => (
							<div key={data._id + idx}>
								<PostCard data={data} />
							</div>
						))}

						<div
							style={{
								height: '10px',
								border: 'none',
							}}
							ref={observeElement}
						/>
					</>
				)}
			</S.PostCardContainer>
		</>
	);
}

export default PostCardList;
