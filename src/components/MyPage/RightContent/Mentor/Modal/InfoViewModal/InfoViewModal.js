import * as IM from './InfoViewModal.styles';

function InfoViewModal() {
	return (
		<>
			<IM.Modal>
				<IM.ModalWrapper>
					<IM.InfoWrapper>
						<IM.InfoTitle>신청 정보</IM.InfoTitle>
						<IM.InfoBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>신청 제목</IM.InfoSubTitle>
								<span>신입입니다. 잘부탁드립니다</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>질문 내용</IM.InfoSubTitle>
								<span>
									안녕하세요. 김현규입니다. 포트폴리오가 잘
									작성되었는지 무언가 부족한 부분은 없는지
									알려주시면 좋겠습니다. 잘부탁드립니다.
								</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>이메일 주소</IM.InfoSubTitle>
								<span>sdfsdfsdfsdf@naver.com</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									포트폴리오 주소
								</IM.InfoSubTitle>
								<span>http://github......</span>
							</IM.InfoSubTitleBox>
						</IM.InfoBox>
					</IM.InfoWrapper>
					<IM.ModalButton>닫기</IM.ModalButton>
				</IM.ModalWrapper>
			</IM.Modal>
		</>
	);
}

export default InfoViewModal;
