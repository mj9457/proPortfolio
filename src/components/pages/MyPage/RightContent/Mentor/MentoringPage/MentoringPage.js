import { useRecoilValue } from 'recoil';
import * as MP from './MentoringPage.styles';
import {
	mentoringItem,
	userData,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';

// 멘토 코칭 페이지
function MentoringPage() {
	const mentoringData = useRecoilValue(mentoringItem);
	const ApplicationArr = [
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.TOTAL,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.TOTAL,
			length: `${mentoringData.total.length}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.APPLY,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.APPLY,
			length: `${mentoringData.apply.length}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.COMPLETED,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.COMPLETED,
			length: `${mentoringData.completed.length}`,
		},
		{
			subtitleMentor: MYPAGEOPTION.MENTOR.SUBTITLE.REFUSE,
			subtitleMentee: MYPAGEOPTION.MENTEE.SUBTITLE.REFUSE,
			length: `${mentoringData.refuse.length}`,
		},
	];

	const user = useRecoilValue(userData);
	const users = { ...user };
	users.role = 'mentor';

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
