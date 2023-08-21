import * as MP from './MentoringPage.styles';

// 멘토 코칭 페이지
function MentoringPage({
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
									{element.prop}
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
