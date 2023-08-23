import { createElement, useRef, useState } from 'react';
import {
	ApplyModalWrap,
	ButtonArea,
	CloseIcon,
	ContentArea,
	IconBox,
	ImageModal,
	ImgBox,
	MainTitle,
	Modal,
	OriginalImage,
	OriginalImageBox,
	OriginalImageWrap,
	SubTitle,
	TextArea,
	TextWrap,
} from './AdminApplyModal.styles';
// import IMG from 'assets/img/banner/banner01.png';

const AdminApplyModal = ({ onClose, id, approveHandler, refuseHandler }) => {
	const outside = useRef();
	const imageOutside = useRef();
	console.log('Modal');

	const [isImageModalVisible, setIsImageModalVisible] = useState(false);

	const imageClickHandler = () => {
		setIsImageModalVisible(true);
	};

	// const [isOpen, setIsOpen] = useState(false);
	return (
		<Modal
			ref={outside}
			onClick={e => {
				if (e.target === outside.current) onClose();
			}}
		>
			<ApplyModalWrap>
				<IconBox>
					<CloseIcon onClick={onClose} />
				</IconBox>
				<MainTitle>멘토 전환 신청서</MainTitle>
				<ContentArea>
					<TextWrap>
						<TextArea>
							<SubTitle>이름</SubTitle>
						</TextArea>
						<span>{id.name}</span>
						<TextWrap></TextWrap>
						<TextArea>
							<SubTitle>닉네임</SubTitle>
						</TextArea>
						<span>엘리스랩</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>이메일주소</SubTitle>
						</TextArea>
						<span>eilce@naver.com</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>직무</SubTitle>
						</TextArea>
						<span>프론트 엔드 개발</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>기업명</SubTitle>
						</TextArea>
						<span>엘리스</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>경력</SubTitle>
						</TextArea>
						<span>3년차</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>사원증 및 재직증명서</SubTitle>
						</TextArea>
					</TextWrap>
					<ImgBox>
						<img
							src="/assets/img/banner/banner01.png"
							onClick={imageClickHandler}
						/>
					</ImgBox>
					<ButtonArea>
						<button
							onClick={() => {
								refuseHandler(id);
							}}
						>
							거절
						</button>
						<button
							onClick={() => {
								approveHandler(id);
							}}
						>
							승인
						</button>
					</ButtonArea>
				</ContentArea>
			</ApplyModalWrap>
			{isImageModalVisible && (
				<ImageModal
					ref={imageOutside}
					onClick={e => {
						if (e.target === imageOutside.current)
							setIsImageModalVisible(false);
					}}
				>
					<OriginalImageWrap>
						<OriginalImageBox>
							<IconBox>
								<CloseIcon
									onClick={() => {
										setIsImageModalVisible(false);
									}}
								/>
							</IconBox>
							<OriginalImage src="/assets/img/banner/banner01.png" />
						</OriginalImageBox>
					</OriginalImageWrap>
				</ImageModal>
			)}
		</Modal>
	);
};
export default AdminApplyModal;
