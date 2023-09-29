import React, { useState, useEffect, useRef } from 'react';
import * as S from './PostCardList.styles';
import LoadingBar from 'components/@common/Loading';
import EmptyMessage from 'components/@common/EmptyMessage';

function PostCardList() {
	return (
		<>
			<S.PostCardContainer>
				{/* {isLoadingProjectStudy && !projectStudy.length && (
					<LoadingBar />
				)} */}
				{/* {!isLoadingProjectStudy && !projectStudy.length && (
					<EmptyMessage />
				)} */}
				{/* {Array.isArray(projectStudy) && projectStudy.length > 0 && ( */}
				<>
					{/* {projectStudy.map((projectStudy, idx) => (
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
						/> */}
				</>
				{/* )} */}
			</S.PostCardContainer>
		</>
	);
}

export default PostCardList;
