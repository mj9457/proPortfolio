import * as IM from './InfoViewModal.styles';
import axios from 'axios';
import MYPAGEOPTION from 'constants/mypage';

// 멘토 - 멘토링 신청서 보기 모달
function InfoViewModal({ setInfoModalOpenState, item }) {
	// 모달 끄기
	const closeModal = () => {
		setInfoModalOpenState(false);
	};

	return (
		<>
			<IM.Modal>
				<form>
					<IM.InfoWrapper>
						<IM.InfoTitle>
							{MYPAGEOPTION.MENTOR.FORM.TITLE.ACCEPTED}
						</IM.InfoTitle>
						<IM.InfoBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{MYPAGEOPTION.MENTOR.FORM.SUBTITLE.ACCEPTED}
								</IM.InfoSubTitle>
								<span>{item.title}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{MYPAGEOPTION.MENTOR.FORM.SUBTITLE.CONTENT}
								</IM.InfoSubTitle>
								<span>{item.content}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{MYPAGEOPTION.MENTOR.FORM.SUBTITLE.EMAIL}
								</IM.InfoSubTitle>
								<span>{item.email}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{
										MYPAGEOPTION.MENTOR.FORM.SUBTITLE
											.PORTFOLIO
									}
								</IM.InfoSubTitle>
								<span>{item.portfolioAddress}</span>
							</IM.InfoSubTitleBox>
						</IM.InfoBox>
					</IM.InfoWrapper>
					<IM.ModalButton onClick={closeModal}>
						{MYPAGEOPTION.MENTOR.BUTTONTITLE.CLOSE}
					</IM.ModalButton>
				</form>
			</IM.Modal>
		</>
	);
}

export default InfoViewModal;
