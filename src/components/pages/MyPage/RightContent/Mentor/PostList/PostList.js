import { useEffect, useState } from 'react';
import * as PL from './PostList.styles';
import axios from 'axios';
import PostListData from '../PostListData/PostListData';
import { useRecoilValue } from 'recoil';
import { userData } from '../../../../../../recoil/atoms/myPage/myPage.atom';
import useApi from '../../../../../../hooks/useApi';

// 유저가 작성한 게시글 리스트(스터디/프로젝트 모집글, 멘토링 신청 게시글)
function PostListPage() {
	// const [error, setError] = useState(null); // 에러 state

	// 유저 정보 담을 state
	const [postList, setPostList] = useState({});
	// 유저 정보 통신(GET)
	const { result: postLists, trigger: postListsT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (postLists) {
			setPostList(postLists);
		}
		console.log(postList);
	}, [postLists]);

	useEffect(() => {
		// async function getPostList() {
		// 	try {
		// 		if (user.role === 'mentor') {
		// 			const response = await axios.get(
		// 				'https://jsonplaceholder.typicode.com/todos', // 요청 주소를 다르게
		// 				postList,
		// 			);
		// 			setPostList(response.data);
		// 		} else {
		// 			const response = await axios.get(
		// 				'https://jsonplaceholder.typicode.com/todos', // 요청 주소를 다르게
		// 				postList,
		// 			);
		// 			setPostList(response.data);
		// 		}
		// 	} catch (err) {
		// 		setError(err);
		// 	}
		// }
		// getPostList();
	}, []);

	// 게시글 삭제
	const onDelete = targetId => {
		// async function deleteList() {
		// 	try {
		// 		if (user.role === 'mentor') {
		// 			const response = await axios.delete(
		// 				`https://jsonplaceholder.typicode.com/posts/:${targetId}`, // 요청 주소 다르게
		// 			);
		// 			console.log(response);
		// 			console.log(response.data);
		// 			const newpostList = postList.filter(
		// 				data => data.id !== targetId,
		// 			);
		// 			console.log(newpostList);
		// 			setPostList(newpostList);
		// 		} else {
		// 			const response = await axios.delete(
		// 				`https://jsonplaceholder.typicode.com/posts/:${targetId}`, // 요청 주소를 다르게
		// 			);
		// 			console.log(response);
		// 			console.log(response.data);
		// 			const newpostList = postList.filter(
		// 				data => data.id !== targetId,
		// 			);
		// 			console.log(newpostList);
		// 			setPostList(newpostList);
		// 		}
		// 	} catch (err) {
		// 		console.log(err);
		// 		setError(err);
		// 	}
		// }
		// deleteList();
	};

	return (
		<>
			<PL.DetailOnboradWrapper>
				<PL.MainTitleBox>
					<PL.MainTitle>멘토링 신청 게시물 작성 내역</PL.MainTitle>
				</PL.MainTitleBox>
				<PL.ContentBox>
					<PL.SubTitle>작성한 글 내역</PL.SubTitle>
					<PL.ContentListBox>
						{/* {postList.length === 0 ? (
							<PL.NothingContentList>
								내역이 없습니다.
							</PL.NothingContentList>
						) : (
							<PostListData
								postList={postList}
								onDelete={onDelete}
							/>
						)} */}
					</PL.ContentListBox>
				</PL.ContentBox>
			</PL.DetailOnboradWrapper>
		</>
	);
}

export default PostListPage;
