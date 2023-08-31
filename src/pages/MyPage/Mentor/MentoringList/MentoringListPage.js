import { useEffect, useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';
import {
	applyItem,
	mentoringItem,
} from '../../../../recoil/atoms/myPage/myPage.atom';
import { useRecoilState } from 'recoil';
import useApi from '../../../../hooks/useApi';

function MentoringListPage() {
	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users, trigger: usersT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 멘토링 신청 정보 담을 state
	const [mentoringData, setMentoringData] = useRecoilState(mentoringItem);
	// 멘토링 신청 정보 통신(GET)
	const { result: mentoringDatas, trigger: mentoringDatasT } = useApi({
		path: `/portfolio/mentor/mentoringRequests`,
		shouldFetch: true,
	});

	// 멘토링 신청한 정보 담을 state
	const [applyData, setApplyData] = useRecoilState(applyItem);
	// 멘토링 신청한 정보 통신(GET)
	const { result: applyDatas, trigger: applyDatasT } = useApi({
		path: `/portfolio/user/myMentoringRequests`,
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log('user정보: ', user);
	}, [users]);

	// 멘토링 신청 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (mentoringDatas && mentoringDatas.length > 0) {
			// const totalData = mentoringDatas.filter(
			// 	item => item.status === 'requested',
			// );
			const requestedData = mentoringDatasT({
				path: `/portfolio/mentor/mentoringRequests/?status=requested`,
			});
			const acceptedData = mentoringDatasT({
				path: `/portfolio/mentor/mentoringRequests/?status=apply`,
			});
			const completedData = mentoringDatasT({
				path: `/portfolio/mentor/mentoringRequests/?status=completed`,
			});
			const rejectedData = mentoringDatasT({
				path: `/portfolio/mentor/mentoringRequests/?status=refuse`,
			});
			setMentoringData({
				requested: requestedData,
				accepted: acceptedData,
				completed: completedData,
				rejected: rejectedData,
			});
		}
		console.log('멘토 신청 받은 내역 : ', mentoringDatas);
		console.log('멘토 신청 받은 내역 : ', mentoringData);
	}, [mentoringDatas]);

	// 멘토링 신청 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (applyDatas && applyDatas.length > 0) {
			setApplyData(applyDatas);
			const requestedData = applyDatasT({
				path: `/portfolio/user/myMentoringRequests/?status=requested`,
			});
			const acceptedData = applyDatasT({
				path: `/portfolio/user/myMentoringRequests/?status=apply`,
			});
			const completedData = applyDatasT({
				path: `/portfolio/user/myMentoringRequests/?status=completed`,
			});
			const rejectedData = applyDatasT({
				path: `/portfolio/user/myMentoringRequests/?status=refuse`,
			});
			setApplyData({
				requested: requestedData,
				accepted: acceptedData,
				completed: completedData,
				rejected: rejectedData,
			});
		}
		console.log('유저 신청 내역 : ', applyDatas);
		console.log('유저 신청 내역 : ', applyData);
	}, [applyDatas]);

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
