import { useRecoilValue } from 'recoil';
import * as PLD from './PostListData.styles';
import { userData } from '../../../../../../recoil/atoms/myPage/myPage.atom';
import { useEffect } from 'react';

// 유저가 작성한 게시글(스터디/프로젝트 모집글, 멘토링 신청 게시글)
function PostListData({ postList, onDelete }) {
	const user = useRecoilValue(userData);

	// 유저 정보 제대로 불러와지면 삭제
	const newUser = { ...user };
	newUser.userRole = 'mentor';

	// 게시물 보기
	const showPost = postId => {
		console.log(postId);
		if (user.role === 'mentor') {
			window.open(
				`https://www.naver.com/${postId}`,
				'_blank',
				'noopener, noreferrer',
			);
		} // 멘토링 게시물 (멘토)

		window.open(
			`https://www.naver.com/${postId}`,
			'_blank',
			'noopener, noreferrer',
		); // 프로젝트 / 스터디 게시물 (유저)
	};

	return (
		<>
			{postList.map((item, index) => {
				return (
					<PLD.ContentList key={item.id}>
						<PLD.ContentNumber>{index + 1}</PLD.ContentNumber>
						<PLD.ContentCategory>{item.title}</PLD.ContentCategory>
						<PLD.ContentTitle onClick={() => showPost(item.postId)}>
							{item.title}
						</PLD.ContentTitle>
						{newUser.userRole === 'mentor' ? null : (
							<PLD.ContentDate>{`~ ${item.id}`}</PLD.ContentDate>
						)}
						<PLD.ButtonBox>
							<PLD.DeleteButton onClick={() => onDelete(item.id)}>
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
