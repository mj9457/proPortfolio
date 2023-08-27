import { useEffect, useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';
import axios from 'axios';
import { mentoringItem } from '../../../../recoil/atoms/myPage/myPage.atom';
import { useRecoilState } from 'recoil';

function MentoringListPage() {
	const [userData, setUserData] = useRecoilState(mentoringItem); // 멘토링 신청 받은 총 내역
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
				);
				const totalData = response.data.filter(
					// (item, index) => item.state === 'total',
					(item, index) => index % 86 === 1,
				);
				const applyData = response.data.filter(
					// (item, index) => item.state === 'apply',
					(item, index) => index % 20 === 1,
				);
				const completedData = response.data.filter(
					// (item, index) => item.state === 'completed',
					(item, index) => index % 50 === 1,
				);
				const refuseData = response.data.filter(
					// (item, index) => item.state === 'refuse',
					(item, index) => index % 30 === 1,
				);
				setUserData({
					total: totalData,
					apply: applyData,
					completed: completedData,
					refuse: refuseData,
				});
			} catch (err) {
				setError(err);
			}
		}
		getData();
	}, []);

	return (
		<M.Wrapper>
			<M.LightContent>
				<MentoringPage></MentoringPage>
				<CardList></CardList>
			</M.LightContent>
		</M.Wrapper>
	);
}

export default MentoringListPage;
