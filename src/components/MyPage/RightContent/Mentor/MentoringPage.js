import * as CPS from './MentoringPage.styles';

// 멘토 코칭 페이지
function CoachingPage({
	totalCoaching,
	applyCoaching,
	completedCoaching,
	refuseCoaching,
}) {
	const ApplicationArr = [
		{ subtitle: '신청 받은 건', prop: `${totalCoaching}` },
		{ subtitle: '신청 수락 건', prop: `${applyCoaching}` },
		{ subtitle: '진행 완료 건', prop: `${completedCoaching}` },
		{ subtitle: '신청 거절 건', prop: `${refuseCoaching}` },
	];

	return (
		<>
			<CPS.DetailOnboradWrapper>
				<CPS.MainTitleBox>
					<CPS.MainTitle>멘토링 신청 받은 내역</CPS.MainTitle>

					<CPS.DetailOnborad>
						{ApplicationArr.map((element, index) => (
							<CPS.DetailOnboradBox key={index}>
								<CPS.DetailOnboradSubTitle>
									{element.subtitle}
								</CPS.DetailOnboradSubTitle>
								<CPS.DetailOnboradSubTitleCount>
									{element.prop}
								</CPS.DetailOnboradSubTitleCount>
							</CPS.DetailOnboradBox>
						))}
					</CPS.DetailOnborad>
				</CPS.MainTitleBox>
			</CPS.DetailOnboradWrapper>
		</>
	);
}

export default CoachingPage;
