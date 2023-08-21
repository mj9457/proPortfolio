import * as S from './StudyPostDetail.styles';

function StudyPostDetail() {
	return (
		<>
			<S.Container>
				{/* 게시글 상단 정보 */}
				<S.PostDetailTop>
					<S.TitleContainer>
						<S.RecruitmentStatus>모집 중</S.RecruitmentStatus>
						<S.PostTitle>
							제목이 들어가는 공간입니다. 제목이 들어가는
							공간입니다
						</S.PostTitle>
					</S.TitleContainer>
					<S.PostInfoContainer>
						{/* 작성자 정보 */}
						<S.UserProfileContainer>
							<S.UserProfileImage />
							<S.UserName>김건호</S.UserName>
						</S.UserProfileContainer>
						{/* 작성 날짜 */}
						<S.Date>2023. 08. 17. 목요일</S.Date>
					</S.PostInfoContainer>
				</S.PostDetailTop>
				{/* 게시글 하단 상세 정보 */}
				<S.PostDetailBottom>
					{/* 기본 정보 */}
					<S.PostDetailBasic>
						<S.PostDetailBottomTitle>
							기본 정보
						</S.PostDetailBottomTitle>

						<S.PostDetailBasicContainer>
							{/* 오른쪽 */}
							<S.PostDetailBasicList>
								<S.PostDetailBasicItem>
									<span>모집 구분</span>
									<p>프로젝트</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<span>모집 인원</span>
									<p>10명</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<span>연락 방법</span>
									<p>오픈 채팅</p>
								</S.PostDetailBasicItem>
							</S.PostDetailBasicList>
							{/* 왼쪽 */}
							<S.PostDetailBasicList>
								<S.PostDetailBasicItem>
									<span>진행 방식</span>
									<p>온/오프라인</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<span>마감 기간</span>
									<p>2023-08-17</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<span>모집 분야</span>
									<p>프론트엔드</p>
								</S.PostDetailBasicItem>
							</S.PostDetailBasicList>
						</S.PostDetailBasicContainer>
					</S.PostDetailBasic>

					{/* 상세 내용 */}
					<S.PostDetailMainTextBox>
						<S.PostDetailBottomTitle>소개</S.PostDetailBottomTitle>
						<S.PostDetailMainText>
							안녕하세요!
							<br />
							PM으로 일하기를 바라는 사람입니다. <br />
							<br />
							취업 위해서 포트폴리오용 사이드프로젝트를 진행하고자
							합니다. 1~3개월 정도 빠르게 진행하고자 합니다!!{' '}
							<br />
							<br />
							구현하고 싶은 서비스는 2개 정도있는데 1.고령화
							시대에 가족을 위한 서비스이며 2.학생들 공부를 위한
							서비스입니다.
							<br />
							<br />
							옾챗으로 연락주시면 자세히 설명드리도록 하겠습니다.{' '}
							<br />
							<br />
							프론트엔드 1명, 백엔드 1명, uxui 디자이너 1명
							<br />
							함께 성장하는 계기가 되었으면 좋겠습니다.
							<br />
							많은 지원 부탁드립니다!!
						</S.PostDetailMainText>
					</S.PostDetailMainTextBox>
				</S.PostDetailBottom>
			</S.Container>
		</>
	);
}

export default StudyPostDetail;
