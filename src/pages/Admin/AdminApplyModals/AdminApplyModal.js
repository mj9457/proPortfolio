import { useRef, useState } from 'react';
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

const AdminApplyModal = ({
	onClose,
	userInfo,
	approveHandler,
	refuseHandler,
}) => {
	console.log(userInfo);
	const outside = useRef();
	const imageOutside = useRef();

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
						<span>{userInfo.name}</span>
						<TextWrap></TextWrap>
						<TextArea>
							<SubTitle>닉네임</SubTitle>
						</TextArea>
						<span>{userInfo.nickName}</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>이메일주소</SubTitle>
						</TextArea>
						<span>{userInfo.email}</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>직무</SubTitle>
						</TextArea>
						<span>{userInfo.position}</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>기업명</SubTitle>
						</TextArea>
						<span>{userInfo.company}</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>경력</SubTitle>
						</TextArea>
						<span>{userInfo.career}</span>
					</TextWrap>
					<TextWrap>
						<TextArea>
							<SubTitle>사원증 및 재직증명서</SubTitle>
						</TextArea>
					</TextWrap>
					<ImgBox url={userInfo.authenticationImageUrl}>
						{/* <img
							src={userInfo.authenticationImageUrl}
							onClick={imageClickHandler}
						/> */}
						<div onClick={imageClickHandler}></div>
					</ImgBox>
					<ButtonArea>
						<button
							onClick={() => {
								refuseHandler(userInfo._id);
							}}
						>
							거절
						</button>
						<button
							onClick={() => {
								approveHandler(userInfo.userId, userInfo._id);
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
							<OriginalImage
								src={userInfo.authenticationImageUrl}
							/>
						</OriginalImageBox>
					</OriginalImageWrap>
				</ImageModal>
			)}
		</Modal>
	);
};
export default AdminApplyModal;
