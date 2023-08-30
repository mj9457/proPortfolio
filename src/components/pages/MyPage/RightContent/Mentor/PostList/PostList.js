import { useEffect, useState } from 'react';
import * as PL from './PostList.styles';
import PostListData from '../PostListData/PostListData';
import useApi from '../../../../../../hooks/useApi';

// 유저가 작성한 게시글 리스트(프로젝트/스터디 모집글)
function PostListPage() {
	// 프로젝트/스터디 정보 담을 state
	const [postList, setPostList] = useState([]);
	// 프로젝트/스터디 정보 통신(GET)
	const { result: postLists } = useApi({
		path: `/projectStudy/mypage`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (postLists) {
			setPostList(postLists);
		}
		console.log(postLists);
	}, [postLists]);

	return (
		<>
			<PL.DetailOnboradWrapper>
				<PL.MainTitleBox>
					<PL.MainTitle>프로젝트 / 스터디 게시물 관리</PL.MainTitle>
				</PL.MainTitleBox>
				<PL.ContentBox>
					<PL.SubTitle>작성한 글 내역</PL.SubTitle>
					<PL.ContentListBox>
						{postList.length === 0 ? (
							<PL.NothingContentList>
								내역이 없습니다.
							</PL.NothingContentList>
						) : (
							<PostListData />
						)}
					</PL.ContentListBox>
				</PL.ContentBox>
			</PL.DetailOnboradWrapper>
		</>
	);
}

export default PostListPage;
