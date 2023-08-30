import { useRecoilValue } from 'recoil';
import * as MP from './MentoringPage.styles';
import {
	mentoringItem,
	userData,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import { useEffect, useState } from 'react';
import useApi from '../../../../../../hooks/useApi';

// 멘토 코칭 페이지
function MentoringPage() {
	// const mentoringData = useRecoilValue(mentoringItem);

	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users, trigger: usersT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log(user);
	}, [users]);

	// 멘토링 신청 정보 담을 state
	const [mentoringData, setMentoringDatas] = useState([]);
	// 멘토링 신청 정보 통신(GET)
	const { result: mentoringDatas, trigger: mentoringDatasT } = useApi({
		path: `/portfolio/mentoringRequests`,
		shouldFetch: true,
	});
	// 멘토링 신청 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (mentoringDatas) {
			setMentoringDatas(mentoringDatas);
		}
		console.log(mentoringData);
	}, [mentoringDatas]);

	const ApplicationArr = [
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.TOTAL,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.TOTAL,
			length: `${mentoringData?.total?.length || 0}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.APPLY,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.APPLY,
			length: `${mentoringData?.apply?.length || 0}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.COMPLETED,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.COMPLETED,
			length: `${mentoringData?.completed?.length || 0}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.REFUSE,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.REFUSE,
			length: `${mentoringData?.refuse?.length || 0}`,
		},
	];

	return (
		<>
			<MP.DetailOnboradWrapper>
				<MP.MainTitleBox>
					<MP.MainTitle>
						{users.role === 'mentor'
							? MYPAGEOPTION.MENTOR.TITLE
							: MYPAGEOPTION.MENTEE.TITLE}
					</MP.MainTitle>

					<MP.DetailOnborad>
						{ApplicationArr.map((element, index) => (
							<MP.DetailOnboradBox key={index}>
								<MP.DetailOnboradSubTitle>
									{users.role === 'mentor'
										? element.subtitleMentor
										: element.subtitleMentee}
								</MP.DetailOnboradSubTitle>
								<MP.DetailOnboradSubTitleCount>
									{element.length}
								</MP.DetailOnboradSubTitleCount>
							</MP.DetailOnboradBox>
						))}
					</MP.DetailOnborad>
				</MP.MainTitleBox>
			</MP.DetailOnboradWrapper>
		</>
	);
}

export default MentoringPage;
