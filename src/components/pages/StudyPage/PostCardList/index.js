import React, { useState, useEffect, useRef, useContext } from 'react';
import PostCard from '../PostCard';
import * as S from './index.styles';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import { useRecoilState } from 'recoil';
import { studyPageState } from 'recoil/atoms/studyPage.atom';

import LoadingBar from 'components/@common/Loading';
import EmptyMessage from 'components/@common/EmptyMessage';

function PostCardList({
	isLoadingProjectStudy,
	selectedValues,
	trigger,
	setCurrentSkip,
	currentSkip,
	limit,
}) {
	const [data, setData] = useRecoilState(studyPageState);
	const [disableLoadData, setDisableLoadData] = useState(false);
	const observerRef = useRef();

	const loadData = async () => {
		if (disableLoadData) return;
		const nextSkip = currentSkip + limit;
		setCurrentSkip(nextSkip);
		const addedData = await trigger({
			path: '/projectStudies',
			data: {
				classification: selectedValues.classification,
				position: selectedValues.position,
				limit,
				skip: nextSkip,
			},
			applyResult: false,
		});
		if (addedData && !addedData.projectStudies.length) {
			setDisableLoadData(true);
			return;
		}
		// console.log(data);
		setData(prev => [...prev, ...addedData.projectStudies]);
	};

	const { setTargetRef } = useInfiniteScroll(loadData, disableLoadData, [
		currentSkip,
	]);
	useEffect(() => {
		if (observerRef?.current) {
			setTargetRef(observerRef);
		}
	}, [observerRef.current]);

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
					</>
				)}
				{(!isLoadingProjectStudy || currentSkip) && (
					<div
						style={{
							height: '10px',
							border: 'none',
						}}
						ref={observerRef}
					/>
				)}
			</S.PostCardContainer>
		</>
	);
}

export default PostCardList;
