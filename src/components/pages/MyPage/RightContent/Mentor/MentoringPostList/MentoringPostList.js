import { useEffect, useState } from 'react';
import * as MPL from './MentoringPostList.styles';
import useApi from '../../../../../../hooks/useApi';
import MentoringPostListData from '../MentoringPostListData/MentoringPostListData';

// 멘토가 작성한 게시글 리스트(멘토링 신청 게시글)
function MentoringPostList() {
	// 멘토링 신청 게시글 정보 담을 state
	const [postList, setPostList] = useState([]);
	// 멘토링 신청 게시글 정보 통신(GET)
	const { result: postLists } = useApi({
		path: `/portfolio/mypage`,
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
			<MPL.DetailOnboradWrapper>
				<MPL.MainTitleBox>
					<MPL.MainTitle>멘토링 신청 게시물 작성 내역</MPL.MainTitle>
				</MPL.MainTitleBox>
				<MPL.ContentBox>
					<MPL.SubTitle>작성한 글 내역</MPL.SubTitle>
					<MPL.ContentListBox>
						{postList.length === 0 ? (
							<MPL.NothingContentList>
								내역이 없습니다.
							</MPL.NothingContentList>
						) : (
							<MentoringPostListData />
						)}
					</MPL.ContentListBox>
				</MPL.ContentBox>
			</MPL.DetailOnboradWrapper>
		</>
	);
}

export default MentoringPostList;
