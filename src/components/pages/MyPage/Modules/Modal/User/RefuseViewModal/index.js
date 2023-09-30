import * as RVM from './index.styles';
import Textarea from 'components/@common/Textarea';

// 멘티 - 거절 사유 보기 모달
function RefuseViewModal({ setRefuseModalOpenState, item }) {
	// 모달 끄기
	const closeModal = () => {
		setRefuseModalOpenState(false);
	};

	return (
		<>
			<RVM.Modal>
				<form>
					<RVM.InfoWrapper>
						<RVM.InfoTitle>거절 사유</RVM.InfoTitle>
						<RVM.InfoBox>
							<RVM.InfoSubTitleBox>
								<RVM.InfoSubTitle>거절사유</RVM.InfoSubTitle>
								<Textarea
									name={'content'}
									size={'regular'}
									placeholder={'거절 사유 입니다.'}
									defaultValue={
										item.message === undefined
											? '사용자가 취소하였습니다.'
											: item.message === ''
											? '공란입니다.'
											: item.message
									}
									readOnly
								/>
							</RVM.InfoSubTitleBox>
						</RVM.InfoBox>
					</RVM.InfoWrapper>
					<RVM.ButtonBox>
						<RVM.OneButton onClick={closeModal}>닫기</RVM.OneButton>
					</RVM.ButtonBox>
				</form>
			</RVM.Modal>
		</>
	);
}

export default RefuseViewModal;
