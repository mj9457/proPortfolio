import { useRecoilState, useRecoilValue } from 'recoil';
import * as MP from './MentoringPage.styles';
import {
	applyItem,
	mentoringItem,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import { useEffect, useState } from 'react';
import useApi from '../../../../../../hooks/useApi';

// 멘토 코칭 페이지
function MentoringPage() {
	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
	}, [users]);

	// 멘토링 신청 받은 내역, 멘토링 신청 내역 데이터
	const mentoringData = useRecoilValue(mentoringItem);
	const applyData = useRecoilValue(applyItem);

	const ApplicationArr = [
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.REQUESTED,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.REQUESTED,
			mentorLength: `${mentoringData.requested.length || 0}`,
			userLength: `${applyData.requested.length || 0}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.ACCEPTED,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.ACCEPTED,
			mentorLength: `${mentoringData.accepted.length || 0}`,
			userLength: `${applyData.accepted.length || 0}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.COMPLETED,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.COMPLETED,
			mentorLength: `${mentoringData.completed.length || 0}`,
			userLength: `${applyData.completed.length || 0}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.REJECTED,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.REJECTED,
			mentorLength: `${mentoringData.rejected.length || 0}`,
			userLength: `${applyData.rejected.length || 0}`,
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
									{users.role === 'mentor'
										? element.mentorLength
										: element.userLength}
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
