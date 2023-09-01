import { useRecoilValue } from 'recoil';
import * as MP from './MentoringPage.styles';
import {
	applyItem,
	mentoringItem,
	userItem,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';

// 멘토 코칭 페이지
function MentoringPage() {
	// 유저 데이터
	const user = useRecoilValue(userItem);

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
						{user.role === 'mentor'
							? MYPAGEOPTION.MENTOR.TITLE
							: MYPAGEOPTION.MENTEE.TITLE}
					</MP.MainTitle>

					<MP.DetailOnborad>
						{ApplicationArr.map((element, index) => (
							<MP.DetailOnboradBox key={index}>
								<MP.DetailOnboradSubTitle>
									{user.role === 'mentor'
										? element.subtitleMentor
										: element.subtitleMentee}
								</MP.DetailOnboradSubTitle>
								<MP.DetailOnboradSubTitleCount>
									{user.role === 'mentor'
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
