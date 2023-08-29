import { useState, useEffect, useRef } from 'react';
import * as IM from './InfoViewModal.styles';
import axios from 'axios';
import MYPAGEOPTION from '../../../../../../../../constants/mypage';

// 멘토 - 멘토링 신청서 보기 모달
function InfoViewModal({ setInfoModalOpenState, item }) {
	const [textareaValue, setTextareaValue] = useState(''); //
	const [error, setError] = useState(null); // 에러 state

	// // 서버통신 (GET)
	// useEffect(() => {
	// 	async function getInfo() {
	// 		try {
	// 			const response = await axios.get(
	// 				'https://jsonplaceholder.typicode.com/todos/1',
	// 			);
	// 			setTextareaValue(response.data);
	// 		} catch (err) {
	// 			setError(err);
	// 		}
	// 	}
	// 	getInfo();
	// }, []);

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
							{MYPAGEOPTION.MENTOR.FORM.TITLE.APPLY}
						</IM.InfoTitle>
						<IM.InfoBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{MYPAGEOPTION.MENTOR.FORM.SUBTITLE.APPLY}
								</IM.InfoSubTitle>
								<span>{item.title}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{MYPAGEOPTION.MENTOR.FORM.SUBTITLE.CONTENT}
								</IM.InfoSubTitle>
								<span>{item.body}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{MYPAGEOPTION.MENTOR.FORM.SUBTITLE.EMAIL}
								</IM.InfoSubTitle>
								<span>{item.userId}</span>
							</IM.InfoSubTitleBox>
							<IM.InfoSubTitleBox>
								<IM.InfoSubTitle>
									{
										MYPAGEOPTION.MENTOR.FORM.SUBTITLE
											.PORTFOLIO
									}
								</IM.InfoSubTitle>
								<span>{item.id}</span>
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
