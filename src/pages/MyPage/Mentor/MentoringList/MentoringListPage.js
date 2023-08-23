import { useEffect, useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';
import axios from 'axios';
import { mentoringItem } from '../../../../recoil/atoms/myPage/myPage.atom';
import { useRecoilState } from 'recoil';

function MentoringListPage() {
	const [totalCoaching, setTotalCoaching] = useState(0);
	const [applyCoaching, setApplyCoaching] = useState(0);
	const [completedCoaching, setCompletedCoaching] = useState(0);
	const [refuseCoaching, setRefuseCoaching] = useState(0);

	const [userData, setUserData] = useRecoilState(mentoringItem); // 멘토링 신청 받은 총 내역
	const [error, setError] = useState(null); // 에러 state

	// 서버통신 (GET)
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
				);
				const dummyData = response.data.filter(
					(item, index) => index % 25 === 0,
				);
				setUserData(dummyData);
				setTotalCoaching(dummyData.length);
				// setUserData(response.data);
				// setTotalCoaching(response.data.length);
			} catch (err) {
				setError(err);
			}
		}
		getData();
	}, []);

	return (
		<M.Wrapper>
			<M.LightContent>
				<MentoringPage
					totalCoaching={totalCoaching}
					applyCoaching={applyCoaching}
					completedCoaching={completedCoaching}
					refuseCoaching={refuseCoaching}
				></MentoringPage>

				<CardList
					totalCoaching={totalCoaching}
					applyCoaching={applyCoaching}
					completedCoaching={completedCoaching}
					refuseCoaching={refuseCoaching}
				></CardList>
			</M.LightContent>
		</M.Wrapper>
	);
}

export default MentoringListPage;
