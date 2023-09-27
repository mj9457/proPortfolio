import useApi from 'hooks/useApi';
import * as PLD from './PostListData.styles';
import { useEffect, useState } from 'react';

// 유저가 작성한 게시글(스터디/프로젝트 모집글)
function PostListData() {
	// 프로젝트/스터디 게시물 정보 담을 state
	const [postList, setPostList] = useState([]);
	// 프로젝트/스터디 게시물 정보 통신(GET)
	const {
		result: postLists,
		trigger: postListsT,
		// isLoading: postListsL,
	} = useApi({
		path: `/projectStudy/mypage`,
		shouldFetch: true,
	});

	// 프로젝트/스터디 게시물 정보 변경될 때 마다 리렌더링
	useEffect(() => {
		if (postLists) {
			setPostList(postLists);
		}
	}, [postLists]);

	// 게시물 보기
	const showPost = postId => {
		window.open(
			`/study/detail/${postId}`,
			'_blank',
			'noopener, noreferrer',
		); // 프로젝트 / 스터디 게시물 (유저)
	};

	// 게시글 삭제
	const onDelete = async targetId => {
		await postListsT({
			method: 'delete',
			path: `/projectStudy/${targetId}`,
		});
		alert('삭제 되었습니다.');
		await postListsT({
			method: 'get',
			path: `/projectStudy/mypage`,
		});
	};

	return (
		<>
			{/* {postListsL && <div>로딩 중입니다.</div>} */}
			{postList.length > 0 &&
				postList.map((item, index) => {
					return (
						<PLD.ContentList key={index}>
							<PLD.ContentNumber>{index + 1}</PLD.ContentNumber>
							<PLD.ContentCategory>
								{item.classification}
							</PLD.ContentCategory>
							<PLD.ContentTitle
								onClick={() => showPost(item._id)}
							>
								{item.title}
							</PLD.ContentTitle>
							<PLD.ContentDate>{`~ ${item.deadline.slice(
								0,
								10,
							)}`}</PLD.ContentDate>
							<PLD.ButtonBox>
								<PLD.DeleteButton
									onClick={() => onDelete(item._id)}
								>
									삭제
								</PLD.DeleteButton>
							</PLD.ButtonBox>
						</PLD.ContentList>
					);
				})}
		</>
	);
}

export default PostListData;
