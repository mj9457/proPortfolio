import * as EVM from './EditViewModal.styles';

// 멘티 - 첨삭 보기 모달
function InfoViewModal({ setEditModalOpenState, item }) {
	// 모달 끄기
	const closeModal = () => {
		setEditModalOpenState(false);
	};

	return (
		<>
			<EVM.Modal>
				<form>
					<EVM.InfoWrapper>
						<EVM.InfoTitle>첨삭 하기</EVM.InfoTitle>
						<EVM.InfoBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>신청 제목</EVM.InfoSubTitle>

								<span>{item.title}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>질문 내용</EVM.InfoSubTitle>

								<span>{item.content}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>이메일 주소</EVM.InfoSubTitle>

								<span>{item.email}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>
									포트폴리오 주소
								</EVM.InfoSubTitle>

								<span>{item.portfolioAddress}</span>
							</EVM.InfoSubTitleBox>
							<EVM.InfoSubTitleBox>
								<EVM.InfoSubTitle>첨삭 내용</EVM.InfoSubTitle>
								<span>{item.advice}</span>
							</EVM.InfoSubTitleBox>
						</EVM.InfoBox>
					</EVM.InfoWrapper>
					<EVM.ModalButton onClick={closeModal}>닫기</EVM.ModalButton>
				</form>
			</EVM.Modal>
		</>
	);
}

export default InfoViewModal;
