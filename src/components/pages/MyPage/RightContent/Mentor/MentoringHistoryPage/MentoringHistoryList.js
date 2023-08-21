import * as MHL from './MentoringHistoryList.styles';

// 멘토 코칭 페이지
function MentoringHistoryList() {
	const UserMetoringData = [
		{
			category: '프로젝트',
			title: '나랑 같이 게더 타운 같은 웹 사이트 만들어 볼 사람 중에 백엔드 구함',
			date: '2023-08-13',
		},
		{
			category: '스터디',
			title: '나랑 같이 게더 타운 같은 웹 사이트 만들어 볼 사람 중에 백엔드 구함',
			date: '2023-08-14',
		},
		{
			category: '프로젝트',
			title: '나랑 같이 게더 타운 같은 웹 사이트 만들어 볼 사람 중에 백엔드 구함',
			date: '2023-08-15',
		},
		{
			category: '스터디',
			title: '나랑 같이 게더 타운 같은 웹 사이트 만들어 볼 사람 중에 백엔드 구함',
			date: '2023-08-16',
		},
	];

	return (
		<>
			<MHL.DetailOnboradWrapper>
				<MHL.MainTitleBox>
					<MHL.MainTitle>멘토링 신청 게시물 작성 내역</MHL.MainTitle>
				</MHL.MainTitleBox>
				<MHL.ContentBox>
					<MHL.SubTitle>작성한 글 내역</MHL.SubTitle>
					<MHL.ContentListBox>
						{UserMetoringData.length === 0 ? (
							<MHL.NothingContentList>
								내역이 없습니다.
							</MHL.NothingContentList>
						) : (
							<>
								{UserMetoringData.map((element, index) => (
									<MHL.ContentList key={index}>
										<MHL.ContentNumber>
											{index + 1}
										</MHL.ContentNumber>
										<MHL.ContentCategory>
											{element.category}
										</MHL.ContentCategory>
										<MHL.ContentTitle>
											{element.title}
										</MHL.ContentTitle>
										<MHL.ContentDate>
											{`~ ${element.date}`}
										</MHL.ContentDate>
										<MHL.ButtonBox>
											<MHL.DeleteButton>
												삭제
											</MHL.DeleteButton>
										</MHL.ButtonBox>
									</MHL.ContentList>
								))}
							</>
						)}
					</MHL.ContentListBox>
				</MHL.ContentBox>
			</MHL.DetailOnboradWrapper>
		</>
	);
}

export default MentoringHistoryList;
