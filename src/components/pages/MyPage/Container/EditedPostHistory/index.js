import { useEffect, useState } from 'react';
import MentoringPostListData from '../../Modules/MentoringPostListData/MentoringPostListData';
import useApi from '../../../../../hooks/useApi';
import * as EPH from './EditedPostHistory.Styles';
import PostListData from '../../Modules/PostListData/PostListData';

const EditedPostHistory = () => {
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

	// 프로젝트/스터디 게시물 정보 담을 state
	const [studyPostList, setStudyPostList] = useState([]);
	// 프로젝트/스터디 게시물 정보 통신(GET)
	const { result: studyPostLists } = useApi({
		path: `/projectStudy/mypage`,
		shouldFetch: true,
	});

	// 프로젝트/스터디 게시물 정보 변경될 때 마다 리렌더링
	useEffect(() => {
		if (studyPostLists) {
			setStudyPostList(studyPostLists);
		}
	}, [studyPostLists]);

	return (
		<EPH.Wrapper>
			<EPH.DetailOnboradWrapper>
				<EPH.MainTitleBox>
					<EPH.MainTitle>멘토링 신청 게시물 작성 내역</EPH.MainTitle>
				</EPH.MainTitleBox>
				<EPH.ContentBox>
					<EPH.SubTitle>작성한 글 내역</EPH.SubTitle>
					<EPH.ContentListBox>
						{postList.length === 0 ? (
							<EPH.NothingContentList>
								내역이 없습니다.
							</EPH.NothingContentList>
						) : (
							<MentoringPostListData />
						)}
					</EPH.ContentListBox>
				</EPH.ContentBox>
			</EPH.DetailOnboradWrapper>

			<EPH.DetailOnboradWrapper>
				<EPH.MainTitleBox>
					<EPH.MainTitle>스터디 / 프로젝트 게시물 관리</EPH.MainTitle>
				</EPH.MainTitleBox>
				<EPH.ContentBox>
					<EPH.SubTitle>작성한 글 내역</EPH.SubTitle>
					<EPH.ContentListBox>
						{studyPostList.length === 0 ? (
							<EPH.NothingContentList>
								내역이 없습니다.
							</EPH.NothingContentList>
						) : (
							<PostListData />
						)}
					</EPH.ContentListBox>
				</EPH.ContentBox>
			</EPH.DetailOnboradWrapper>
		</EPH.Wrapper>
	);
};
export default EditedPostHistory;
