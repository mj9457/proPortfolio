import { useNavigate } from 'react-router-dom';
import useApi from '../../../../../hooks/useApi';
import * as MPLD from './MentoringPostListData.styles';
import { useEffect, useState } from 'react';

// 유저가 작성한 게시글(스터디/프로젝트 모집글)
function MentoringPostListData() {
	const navigate = useNavigate();
	// 멘토링 신청 게시글 정보 담을 state
	const [postList, setPostList] = useState([]);
	// 멘토링 신청 게시글 정보 통신(GET)
	const {
		result: postLists,
		trigger: postListsT,
		// isLoading: postListsL,
	} = useApi({
		path: `/portfolio/mypage`,
		shouldFetch: true,
	});

	// 멘토링 신청 게시글 정보 변경될 때 마다 리렌더링
	useEffect(() => {
		if (postLists) {
			setPostList(postLists);
		}
		console.log(postLists);
	}, [postLists]);

	// 게시물 보기
	const showPost = postId => {
		console.log(postId);
		navigate(`/portfolio/post/${postId}`); // 멘토링 게시물 (멘토)
	};

	// 게시글 삭제
	const onDelete = async targetId => {
		await postListsT({
			method: 'delete',
			path: `/portfolio/${targetId}`,
		});
		alert('삭제 되었습니다.');
		await postListsT({
			method: 'get',
			path: `/portfolio/mypage`,
		});
	};

	return (
		<>
			{postList.length > 0 &&
				postList.map((item, index) => {
					return (
						<MPLD.ContentList key={index}>
							<MPLD.ContentCategory>
								{item.position[0]}
							</MPLD.ContentCategory>
							<MPLD.ContentTitle
								onClick={() => showPost(item._id)}
							>
								{item.title}
							</MPLD.ContentTitle>
							<MPLD.ButtonBox>
								<MPLD.DeleteButton
									onClick={() => onDelete(item._id)}
								>
									삭제
								</MPLD.DeleteButton>
							</MPLD.ButtonBox>
						</MPLD.ContentList>
					);
				})}
		</>
	);
}

export default MentoringPostListData;
