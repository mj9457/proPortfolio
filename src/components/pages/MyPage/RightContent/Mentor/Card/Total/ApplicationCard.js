import * as CCS from './ApplicationCard.styles';

// 카드 리스트
function ApplicationCard({ item }) {
	return (
		<>
			{item === 'apply' ? (
				<ApplyCard></ApplyCard>
			) : item === 'completed' ? (
				<CompletedCard></CompletedCard>
			) : item === 'refuse' ? (
				<RefuseCard></RefuseCard>
			) : (
				<TotalCard></TotalCard>
			)}
		</>
	);
}

export default ApplicationCard;

// 신청 받은 건(총 신청 건) 카드
function TotalCard() {
	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				<CCS.Title>포트폴리오 리뷰 신청</CCS.Title>
				<CCS.UserBox>
					<CCS.UserImage></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>사용자이름</CCS.UserName>
						<CCS.ApplicationTitle>
							신입입니다. 잘부탁드립니다.
						</CCS.ApplicationTitle>
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					<CCS.TwoButton>거절하기</CCS.TwoButton>
					<CCS.TwoButton>수락하기</CCS.TwoButton>
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}

// 신청 수락 건 카드
function ApplyCard() {
	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				<CCS.Title>포트폴리오 리뷰 신청</CCS.Title>
				<CCS.UserBox>
					<CCS.UserImage></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>사용자이름</CCS.UserName>
						<CCS.ApplicationTitle>
							신입입니다. 잘부탁드립니다.
						</CCS.ApplicationTitle>
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					<CCS.OneButton>첨삭하기</CCS.OneButton>
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}

// 리뷰 완료 건 카드
function CompletedCard() {
	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				<CCS.Title>포트폴리오 리뷰 신청</CCS.Title>
				<CCS.UserBox>
					<CCS.UserImage></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>사용자이름</CCS.UserName>
						<CCS.ApplicationTitle>
							신입입니다. 잘부탁드립니다.
						</CCS.ApplicationTitle>
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					<CCS.OneButton>수정하기</CCS.OneButton>
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}

// 신청 거절 건 카드
function RefuseCard() {
	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				<CCS.Title>포트폴리오 리뷰 신청</CCS.Title>
				<CCS.UserBox>
					<CCS.UserImage></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>사용자이름</CCS.UserName>
						<CCS.ApplicationTitle>
							신입입니다. 잘부탁드립니다.
						</CCS.ApplicationTitle>
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					<CCS.OneButton>거절 취소하기</CCS.OneButton>
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}
