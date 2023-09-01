import { useEffect, useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';
import {
	applyItem,
	mentoringItem,
	userItem,
} from '../../../../recoil/atoms/myPage/myPage.atom';
import { useRecoilState } from 'recoil';
import useApi from '../../../../hooks/useApi';

function MentoringListPage() {
	// const [mentoringData, setMentoringData] = useRecoilState(mentoringItem);
	// const [applyData, setApplyData] = useRecoilState(applyItem);
	// const [userData, setUserData] = useRecoilState(userItem);
	// // 유저 정보 담을 state
	// const [user, setUser] = useState({});
	// // 유저 정보 통신(GET)
	// const { result: users } = useApi({
	// 	path: `/user`,
	// 	shouldFetch: true,
	// });

	// // 유저 정보가 변경될 때 리렌더링
	// useEffect(() => {
	// 	if (users) {
	// 		setUser(users);
	// 	}
	// }, [users]);

	// const statuses = ['requested', 'accepted', 'completed', 'rejected'];
	// // Dynamic api requests for each status and type (mentor/user)
	// statuses.forEach(status => {
	// 	// Mentor data request
	// 	const { result: mentoringResult } = useApi({
	// 		path: `/portfolio/mentor/mentoringRequests?status=${status}`,
	// 		shouldFetch: true,
	// 	});

	// 	useEffect(() => {
	// 		if (mentoringResult && mentoringResult.length > 0) {
	// 			setMentoringData(prevState => ({
	// 				...prevState,
	// 				[status]: mentoringResult,
	// 			}));
	// 		}
	// 	}, [mentoringResult]);

	// 	// User data request
	// 	const { result: applyResult } = useApi({
	// 		path: `/portfolio/user/myMentorinRequests?status=${status}`,
	// 		shouldFetch: true,
	// 	});

	// 	useEffect(() => {
	// 		if (applyResult && applyResult.length > 0) {
	// 			setApplyData(prevState => ({
	// 				...prevState,
	// 				[status]: applyResult,
	// 			}));
	// 		}
	// 	}, [applyResult]);
	// });

	// 멘토 신청 받은 건
	const [requestedMentoringData, setRequestedMentoringData] = useState([]);
	const { result: requestedMentoringDatas } = useApi({
		path: `/portfolio/mentor/mentoringRequests?status=requested`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (requestedMentoringDatas && requestedMentoringDatas.length > 0) {
			setRequestedMentoringData(requestedMentoringDatas);
		}
		// console.log('(멘토)신청 받은 건: ', requestedMentoringData);
	}, [requestedMentoringDatas]);

	// 멘토 신청 수락 건
	const [acceptedMentoringData, setAcceptedMentoringData] = useState([]);
	const { result: acceptedMentoringDatas } = useApi({
		path: `/portfolio/mentor/mentoringRequests?status=accepted`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (acceptedMentoringDatas && acceptedMentoringDatas.length > 0) {
			setAcceptedMentoringData(acceptedMentoringDatas);
		}
		// console.log('(멘토)신청 수락 건: ', acceptedMentoringData);
	}, [acceptedMentoringDatas]);

	// 멘토 리뷰 완료 건
	const [completedMentoringData, setCompletedMentoringData] = useState([]);
	const { result: completedMentoringDatas } = useApi({
		path: `/portfolio/mentor/mentoringRequests?status=completed`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (completedMentoringDatas && completedMentoringDatas.length > 0) {
			setCompletedMentoringData(completedMentoringDatas);
		}
		// console.log('(멘토)리뷰 완료 건: ', completedMentoringData);
	}, [completedMentoringDatas]);

	// 멘토 신청 거절 건
	const [rejectedMentoringData, setRejectedMentoringData] = useState([]);
	const { result: rejectedMentoringDatas } = useApi({
		path: `/portfolio/mentor/mentoringRequests?status=rejected`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (rejectedMentoringDatas && rejectedMentoringDatas.length > 0) {
			setRejectedMentoringData(rejectedMentoringDatas);
		}
		// console.log('(멘토)신청 거절 건: ', rejectedMentoringData);
	}, [rejectedMentoringDatas]);

	/// //////////////////////////////////////////
	// 유저 신청 완료 건
	const [requestedApplyData, setRequestedApplyData] = useState([]);
	const { result: requestedApplyDatas } = useApi({
		path: `/portfolio/user/myMentoringRequests?status=requested`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (requestedApplyDatas && requestedApplyDatas.length > 0) {
			setRequestedApplyData(requestedApplyDatas);
		}
		// console.log('(유저)신청 완료 건: ', requestedApplyData);
	}, [requestedApplyDatas]);

	// 유저 진행 중인 건
	const [acceptedApplyData, setAcceptedApplyData] = useState([]);
	const { result: acceptedApplyDatas } = useApi({
		path: `/portfolio/user/myMentoringRequests?status=accepted`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (acceptedApplyDatas && acceptedApplyDatas.length > 0) {
			setAcceptedApplyData(acceptedApplyDatas);
		}
		// console.log('(유저)진행 중인 건: ', acceptedApplyData);
	}, [acceptedApplyDatas]);

	// 유저 리뷰 완료 건
	const [completedApplyData, setCompletedApplyData] = useState([]);
	const { result: completedApplyDatas } = useApi({
		path: `/portfolio/user/myMentoringRequests?status=completed`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (completedApplyDatas && completedApplyDatas.length > 0) {
			setCompletedApplyData(completedApplyDatas);
		}
		// console.log('(유저)리뷰 완료 건: ', completedApplyData);
	}, [completedApplyDatas]);

	// 유저 취소 건
	const [rejectedApplyData, setRejectedApplyData] = useState([]);
	const { result: rejectedApplyDatas } = useApi({
		path: `/portfolio/user/myMentoringRequests?status=rejected`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (rejectedApplyDatas && rejectedApplyDatas.length > 0) {
			setRejectedApplyData(rejectedApplyDatas);
		}
		// console.log('(유저)취소 건: ', rejectedApplyData);
	}, [rejectedApplyDatas]);

	/// //////////////////////////////////////////////
	// 유저 정보 통신(GET)
	const { result: users } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	const [mentoringData, setMentoringData] = useRecoilState(mentoringItem);
	const [applyData, setApplyData] = useRecoilState(applyItem);

	const [userData, setUserData] = useRecoilState(userItem);
	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUserData(users);
		}
	}, [users]);

	useEffect(() => {
		// 모든 데이터가 로드되었는지 확인
		if (
			requestedMentoringData &&
			acceptedMentoringData &&
			completedMentoringData &&
			rejectedMentoringData &&
			requestedApplyData &&
			acceptedApplyData &&
			completedApplyData &&
			rejectedApplyData
		) {
			// 모든 데이터가 로드되었다면 Recoil 상태 업데이트
			setMentoringData({
				requested: requestedMentoringData,
				accepted: acceptedMentoringData,
				completed: completedMentoringData,
				rejected: rejectedMentoringData,
			});
			setApplyData({
				requested: requestedApplyDatas,
				accepted: acceptedApplyDatas,
				completed: completedApplyDatas,
				rejected: rejectedApplyDatas,
			});
		}
	}, [
		requestedMentoringDatas,
		acceptedMentoringDatas,
		completedMentoringDatas,
		rejectedMentoringDatas,
		requestedApplyDatas,
		acceptedApplyDatas,
		completedApplyDatas,
		rejectedApplyDatas,
	]);

	// useEffect(() => {
	// 	console.log(mentoringData);
	// }, [mentoringData]);

	// useEffect(() => {
	// 	console.log(applyData);
	// }, [applyData]);
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
