import { useEffect, useState } from 'react';
import * as MHL from './MentoringHistoryList.styles';
import axios from 'axios';
import ListView from '../ListView/ListView';

// 멘토 - 멘토링 게시글 내역 페이지
function MentoringHistoryList() {
	const [mentoringList, setMentoringList] = useState([]); // get 요청으로 받은 데이터 담을 state
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getMentoringList() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos',
					mentoringList,
				);
				setMentoringList(response.data);
			} catch (err) {
				setError(err);
			}
		}
		getMentoringList();
	}, []);

	const onDelete = targetId => {
		async function deleteList() {
			try {
				const response = await axios.delete(
					`https://jsonplaceholder.typicode.com/posts/${targetId}`,
					// {
					// 	headers: {
					// 		Authorization: 'token',
					// 	},
					// 	data: {
					// 		targetId,
					// 	},
					// },
				);
				console.log(response);
				console.log(response.data);
				const newMentoringList = response.data.filter(
					data => data.id !== targetId,
				);
				console.log(newMentoringList);
				setMentoringList(newMentoringList);
			} catch (err) {
				console.log(err);
				setError(err);
			}
		}
		deleteList();
	};

	return (
		<>
			<MHL.DetailOnboradWrapper>
				<MHL.MainTitleBox>
					<MHL.MainTitle>멘토링 신청 게시물 작성 내역</MHL.MainTitle>
				</MHL.MainTitleBox>
				<MHL.ContentBox>
					<MHL.SubTitle>작성한 글 내역</MHL.SubTitle>
					<MHL.ContentListBox>
						{mentoringList.length === 0 ? (
							<MHL.NothingContentList>
								내역이 없습니다.
							</MHL.NothingContentList>
						) : (
							<ListView
								mentoringList={mentoringList}
								onDelete={onDelete}
							/>
						)}
					</MHL.ContentListBox>
				</MHL.ContentBox>
			</MHL.DetailOnboradWrapper>
		</>
	);
}

export default MentoringHistoryList;
