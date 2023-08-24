import { useRecoilValue } from 'recoil';
import * as MP from './MentoringPage.styles';
import { mentoringItem } from '../../../../../../recoil/atoms/myPage/myPage.atom';

// 멘토 코칭 페이지
function MentoringPage() {
	const mentoringData = useRecoilValue(mentoringItem);
	const ApplicationArr = [
		{ subtitle: '신청 받은 건', length: `${mentoringData.total.length}` },
		{ subtitle: '신청 수락 건', length: `${mentoringData.apply.length}` },
		{
			subtitle: '진행 완료 건',
			length: `${mentoringData.completed.length}`,
		},
		{ subtitle: '신청 거절 건', length: `${mentoringData.refuse.length}` },
	];

	return (
		<>
			<MP.DetailOnboradWrapper>
				<MP.MainTitleBox>
					<MP.MainTitle>멘토링 신청 받은 내역</MP.MainTitle>

					<MP.DetailOnborad>
						{ApplicationArr.map((element, index) => (
							<MP.DetailOnboradBox key={index}>
								<MP.DetailOnboradSubTitle>
									{element.subtitle}
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
