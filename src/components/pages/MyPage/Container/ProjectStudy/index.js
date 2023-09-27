import { useEffect, useState } from 'react';
import useApi from 'hooks/useApi';
import * as PL from './ProjectStudy.styles';
import PostListData from 'components/pages/MyPage/Modules/PostListData/PostListData';

// 사용자가 작성한 게시글 리스트(프로젝트/스터디 모집글)
const ProjectStudy = () => {
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
	}, [postLists]);

	return (
		<>
			<PL.DetailOnboradWrapper>
				<PL.MainTitleBox>
					<PL.MainTitle>스터디 / 프로젝트 게시물 관리</PL.MainTitle>
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
};

export default ProjectStudy;
