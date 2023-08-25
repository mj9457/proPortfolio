import { useRecoilValue } from 'recoil';
import * as MP from './MentoringPage.styles';
import {
	mentoringItem,
	userData,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MESSAGE from '../../../../../../constants/message';

// 멘토 코칭 페이지
function MentoringPage() {
	const mentoringData = useRecoilValue(mentoringItem);
	const ApplicationArr = [
		{
			subtitleMentor: MESSAGE.MYPAGE.MENTOR.SUBTITLE.TOTAL,
			subtitleMentee: MESSAGE.MYPAGE.MENTEE.SUBTITLE.TOTAL,
			length: `${mentoringData.total.length}`,
		},
		{
			subtitleMentor: MESSAGE.MYPAGE.MENTOR.SUBTITLE.APPLY,
			subtitleMentee: MESSAGE.MYPAGE.MENTEE.SUBTITLE.APPLY,
			length: `${mentoringData.apply.length}`,
		},
		{
			subtitleMentor: MESSAGE.MYPAGE.MENTOR.SUBTITLE.COMPLETED,
			subtitleMentee: MESSAGE.MYPAGE.MENTEE.SUBTITLE.COMPLETED,
			length: `${mentoringData.completed.length}`,
		},
		{
			subtitleMentor: MESSAGE.MYPAGE.MENTOR.SUBTITLE.REFUSE,
			subtitleMentee: MESSAGE.MYPAGE.MENTEE.SUBTITLE.REFUSE,
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
							? MESSAGE.MYPAGE.MENTOR.TITLE
							: MESSAGE.MYPAGE.MENTEE.TITLE}
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
