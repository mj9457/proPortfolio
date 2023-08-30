import { useEffect, useState } from 'react';
import * as MPL from './MentoringPostList.styles';
import PostListData from '../PostListData/PostListData';
import useApi from '../../../../../../hooks/useApi';

// 유저가 작성한 게시글 리스트(스터디/프로젝트 모집글, 멘토링 신청 게시글)
function MentoringPostList() {
	const [postList, setPostList] = useState([]); // 게시글 리스트
	const [error, setError] = useState(null); // 에러 state

	// // 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const {
		result: users,
		trigger: usersT,
		isLoading: usersL,
		error: usersE,
	} = useApi({
		path: `/user`,
		shouldFetch: true,
	});
	// /projectStudy/myPage

	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log(user);
	}, [users]);

	// 유저 정보 담을 state
	const [port, setPort] = useState({});
	// 유저 정보 통신(GET)
	const { result: portR, trigger: portT } = useApi({
		path: `/portfolio/mypage`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (portR) {
			setPort(portR);
		}
		console.log(port);
	}, [portR]);
	console.log(1);
	// useEffect(() => {
	// 	async function getPostList() {
	// 		try {
	// 			if (user.role === 'mentor') {
	// 				const response = await axios.get(
	// 					'https://jsonMPLaceholder.typicode.com/todos', // 요청 주소를 다르게
	// 					postList,
	// 				);
	// 				setPostList(response.data);
	// 			} else {
	// 				const response = await axios.get(
	// 					'https://jsonMPLaceholder.typicode.com/todos', // 요청 주소를 다르게
	// 					postList,
	// 				);
	// 				setPostList(response.data);
	// 			}
	// 		} catch (err) {
	// 			setError(err);
	// 		}
	// 	}
	// 	getPostList();
	// }, []);

	// // 게시글 삭제
	const onDelete = targetId => {
		// async function deleteList() {
		// 	try {
		// 		if (user.role === 'mentor') {
		// 		} else {
		// 		}
		// 	} catch (err) {
		// 		console.log(err);
		// 		setError(err);
		// 	}
		// }
		// deleteList();
		console.log(targetId);
	};

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
							<PostListData
								postList={postList}
								onDelete={onDelete}
							/>
						)}
					</MPL.ContentListBox>
				</MPL.ContentBox>
			</MPL.DetailOnboradWrapper>
		</>
	);
}

export default MentoringPostList;
