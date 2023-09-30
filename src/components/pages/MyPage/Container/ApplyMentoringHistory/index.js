import { useEffect, useMemo, useState } from 'react';
import useApi from 'hooks/useApi';
import * as AMH from './index.styles';
import MYPAGEOPTION from 'constants/mypage';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';
import MESSAGE from 'constants/message';
import ApplicationCard from '../../Modules/Card/ApplicationCard';

const countTitles = {
	user: [
		{ label: '신청 완료', value: 'requested' },
		{ label: '멘토링 진행 중', value: 'accepted' },
		{ label: '멘토링 진행 완료', value: 'completed' },
		{ label: '신청 취소', value: 'rejected' },
	],
	mentor: [
		{ label: '신청 받은 건', value: 'requested' },
		{ label: '신청 수락 건', value: 'accepted' },
		{ label: '리뷰 완료 건', value: 'completed' },
		{ label: '신청 거절 건', value: 'rejected' },
	],
};

const mapTypeToApiPath = {
	user: '/portfolio/user/myMentoringRequests',
	mentor: '/portfolio/mentor/mentoringRequests',
};

const ApplyMentoringHistory = ({ type }) => {
	const { result: statusResult, trigger: statusTrigger } = useApi({
		path: mapTypeToApiPath[type],
		shouldFetch: true,
	});

	const [tabIndex, setTabIndex] = useState(countTitles[type][0].value);

	const statusObj = useMemo(() => {
		if (Array.isArray(statusResult.mentoringRequests)) {
			return statusResult.mentoringRequests?.reduce((acc, cur) => {
				cur.status in acc
					? (acc[cur.status] = acc[cur.status] + 1)
					: (acc[cur.status] = 1);
				return acc;
			}, {});
		}
		return {};
	}, [statusResult.mentoringRequests]);

	const counts = useMemo(
		() => [
			'requested' in statusObj ? statusObj.requested : 0,
			'accepted' in statusObj ? statusObj.accepted : 0,
			'completed' in statusObj ? statusObj.completed : 0,
			'rejected' in statusObj ? statusObj.rejected : 0,
		],
		[statusObj],
	);

	const getUnitStatusData = async status => {
		try {
			const result = await statusTrigger({
				data: { status },
				applyResult: false,
				showBoundary: false,
			});
			setData(result.mentoringRequests);
			setUserData(result.userInfos || result.UserInfos);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClickTab = status => {
		getUnitStatusData(status);
	};

	const initFetch = async () => {
		getUnitStatusData(countTitles[type][0].value);
	};

	useEffect(() => {
		initFetch();
	}, []);

	const user = useRecoilValue(userAtom);

	const [data, setData] = useState([]);
	const [userData, setUserData] = useState([]);
	const [category, setCategory] = useState('requested');

	return (
		<AMH.DetailOnboradWrapper>
			<AMH.MainTitleBox>
				<AMH.MainTitle>
					{user?.role === 'mentor'
						? MYPAGEOPTION.MENTOR.TITLE
						: MYPAGEOPTION.MENTEE.TITLE}
				</AMH.MainTitle>
				<AMH.DetailOnborad>
					{counts.map((count, index) => (
						<AMH.DetailOnboradBox
							key={`${countTitles[type][index].value}-count`}
						>
							<AMH.DetailOnboradSubTitle>
								{countTitles[type][index].label}
							</AMH.DetailOnboradSubTitle>
							<AMH.DetailOnboradSubTitleCount>
								{count}
							</AMH.DetailOnboradSubTitleCount>
						</AMH.DetailOnboradBox>
					))}
				</AMH.DetailOnborad>
			</AMH.MainTitleBox>

			<AMH.SubContentBox>
				<AMH.SubContentBar>
					<AMH.SubTitleFlexBox>
						{countTitles[type].map(v => (
							<AMH.Clicked
								onClick={() => {
									handleClickTab(v.value);
									setCategory(v.value);
								}}
								key={`${v.value}-tab`}
								isSelected={v.value === category}
							>
								{v.label}
							</AMH.Clicked>
						))}
					</AMH.SubTitleFlexBox>

					<p>총 {data.length}건</p>
				</AMH.SubContentBar>

				{data.length === 0 ? (
					<AMH.NonSubContentListBox>
						{MESSAGE.MYPAGE.NODATA.LIST}
					</AMH.NonSubContentListBox>
				) : (
					<AMH.SubContentListBox>
						{data.map((item, index) => {
							return (
								<ApplicationCard
									key={index}
									item={item}
									userInfo={userData[index]}
									category={category}
									type={type}
								></ApplicationCard>
							);
						})}
					</AMH.SubContentListBox>
				)}
			</AMH.SubContentBox>
		</AMH.DetailOnboradWrapper>
	);
};

export default ApplyMentoringHistory;
