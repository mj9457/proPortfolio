import { useEffect, useState } from 'react';
import * as CCS from './ApplicationCard.styles';

import InfoViewModal from 'components/pages/MyPage/Modules/Modal/Mentor/InfoViewModal';
import EditModal from 'components/pages/MyPage/Modules/Modal/Mentor/EditModal';
import EditViewModal from 'components/pages/MyPage/Modules/Modal/User/EditViewModal';
import ReviewModal from 'components/pages/MyPage/Modules/Modal/User/ReviewModal';
import RefuseModal from 'components/pages/MyPage/Modules/Modal/Mentor/RefuseModal';
import RefuseViewModal from 'components/pages/MyPage/Modules/Modal/User/RefuseViewModal';

import MYPAGEOPTION from 'constants/mypage';
import MESSAGE from 'constants/message';
import useApi from 'hooks/useApi';
import { useNavigate } from 'react-router-dom';

// 카드 리스트
function ApplicationCard({ item, category, userInfo, type }) {
	const navigate = useNavigate();

	// 모달창 노출 여부 state
	const [infoModalOpenState, setInfoModalOpenState] = useState(false);
	const [editModalOpenState, setEditModalOpenState] = useState(false);
	const [refuseModalOpenState, setRefuseModalOpenState] = useState(false);
	const [reviewModalOpenState, setReviewModalOpenState] = useState(false);

	// 모달창에 전달할 현재 데이터
	const [nowData, setNowData] = useState();

	// 모달창 노출
	const showInfoModal = e => {
		setInfoModalOpenState(true);
	};
	const showEditModal = () => {
		setEditModalOpenState(true);
	};
	const showRefuseModal = () => {
		setRefuseModalOpenState(true);
	};

	const showReviewModal = () => {
		setReviewModalOpenState(true);
	};

	// 현재 데이터 변경
	const nowDataFun = e => {
		setNowData(e);
	};

	// 멘토가 등록한 멘토링 신청 페이지(유저)
	const movePageToPortFolio = item => {
		navigate(`/portfolio/post/${item.portfolioId}`); // 멘토링 게시물 (멘토)
	};

	const { trigger } = useApi({});

	// 멘토 - 멘토링 신청 수락하기 / 거절하기
	const acceptedHandler = async item => {
		const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
		const requestId = item._id; // 멘토가 신청 받은 id
		const acceptedPostData = { status: 'accepted' }; // 수락할때 보내줄 데이터,

		trigger({
			method: 'post',
			path: `/portfolios/updateMentoringRequest/${portfolioId}/${requestId}`,
			data: acceptedPostData,
			shouldFetch: true,
		});
	};

	// 유저 - 멘토링 신청한 내역 취소하기 /
	const rejectMentoring = item => {
		const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
		const requestId = item._id; // 유저가 신청한 id
		const requestedPostData = { status: 'rejected' }; // 취소할때 보내줄 데이터,

		trigger({
			method: 'post',
			path: `/portfolios/updateMentoringRequest/${portfolioId}/${requestId}`,
			data: requestedPostData,
			shouldFetch: true,
		});
		navigate('/mypage');
		window.location.replace('/mypage');
	};

	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				{type === 'mentor' ? (
					<CCS.Title>{MYPAGEOPTION.MENTOR.CARDTITLE}</CCS.Title>
				) : undefined}
				<CCS.UserBox>
					<CCS.UserImage
						src={userInfo.profileImageUrl}
					></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>{userInfo.name}</CCS.UserName>
						{type === 'mentor' ? (
							<CCS.ApplicationTitle
								onClick={() => {
									showInfoModal(item);
								}}
							>
								{item.title}
							</CCS.ApplicationTitle>
						) : (
							<CCS.ApplicationTitle
								onClick={() => {
									movePageToPortFolio(item);
								}}
							>
								{item.title}
							</CCS.ApplicationTitle>
						)}
						{type === 'mentor'
							? infoModalOpenState && (
									<InfoViewModal
										setInfoModalOpenState={
											setInfoModalOpenState
										}
										item={item}
									/>
							  )
							: infoModalOpenState && (
									<InfoViewModal
										setInfoModalOpenState={
											setInfoModalOpenState
										}
										item={item}
									/>
							  )}
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					{category === 'accepted' ? (
						<>
							{type === 'mentor' ? (
								<CCS.OneButton
									onClick={() => {
										showEditModal();
										nowDataFun(item);
									}}
								>
									{MYPAGEOPTION.MENTOR.BUTTONTITLE.EDIT}
								</CCS.OneButton>
							) : undefined}

							{editModalOpenState && (
								<EditModal
									category={category}
									setEditModalOpenState={
										setEditModalOpenState
									}
									item={nowData}
								/>
							)}
						</>
					) : category === 'completed' ? (
						<>
							{type === 'mentor' ? (
								<CCS.OneButton
									onClick={() => {
										showEditModal();
										nowDataFun(item);
									}}
								>
									{MYPAGEOPTION.MENTOR.BUTTONTITLE.EDITVIEW}
								</CCS.OneButton>
							) : (
								<>
									<CCS.RefuseButton
										onClick={() => {
											showEditModal();
											nowDataFun(item);
										}}
									>
										{
											MYPAGEOPTION.MENTOR.BUTTONTITLE
												.EDITVIEW
										}
									</CCS.RefuseButton>
									<CCS.ApplyButton
										onClick={() => {
											showReviewModal();
											nowDataFun(item);
										}}
									>
										{
											MYPAGEOPTION.MENTEE.BUTTONTITLE
												.REVIEWEDIT
										}
									</CCS.ApplyButton>
								</>
							)}

							{type === 'mentor'
								? editModalOpenState && (
										<EditViewModal
											category={category}
											setEditModalOpenState={
												setEditModalOpenState
											}
											item={item}
										/>
								  )
								: editModalOpenState && (
										<EditViewModal
											category={category}
											setEditModalOpenState={
												setEditModalOpenState
											}
											item={item}
										/>
								  )}
							{reviewModalOpenState && (
								<ReviewModal
									category={category}
									setReviewModalOpenState={
										setReviewModalOpenState
									}
									item={item}
								/>
							)}
						</>
					) : category === 'rejected' ? (
						<>
							{type === 'mentor' ? undefined : (
								<CCS.OneButton
									onClick={() => {
										showRefuseModal();
									}}
								>
									{MYPAGEOPTION.MENTEE.BUTTONTITLE.REFUSEVIEW}
								</CCS.OneButton>
							)}
							{refuseModalOpenState && (
								<RefuseViewModal
									setRefuseModalOpenState={
										setRefuseModalOpenState
									}
									item={item}
								/>
							)}
						</>
					) : (
						<>
							{type === 'mentor' ? (
								<>
									<CCS.ApplyButton
										onClick={() => {
											alert(MESSAGE.MYPAGE.APPLY.CONFIRM);
											acceptedHandler(item);
											window.location.replace('/mypage');
										}}
									>
										{
											MYPAGEOPTION.MENTOR.BUTTONTITLE
												.ACCEPTED
										}
									</CCS.ApplyButton>
									<CCS.RefuseButton onClick={showRefuseModal}>
										{
											MYPAGEOPTION.MENTOR.BUTTONTITLE
												.REJECTED
										}
									</CCS.RefuseButton>
									{refuseModalOpenState && (
										<RefuseModal
											setRefuseModalOpenState={
												setRefuseModalOpenState
											}
											item={item}
										/>
									)}
								</>
							) : (
								<>
									<CCS.ApplyButton
										onClick={item => {
											showInfoModal(item);
											nowDataFun(item);
										}}
									>
										신청서 보기
									</CCS.ApplyButton>
									<CCS.RefuseButton
										onClick={event => {
											alert(
												'멘토링 신청이 취소되었습니다.',
											);
											rejectMentoring(item);
											window.location.replace('/mypage');
										}}
									>
										{MYPAGEOPTION.MENTEE.BUTTONTITLE.CANCLE}
									</CCS.RefuseButton>
									{infoModalOpenState && (
										<InfoViewModal
											setInfoModalOpenState={
												setInfoModalOpenState
											}
											item={item}
										/>
									)}
								</>
							)}
						</>
					)}
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}

export default ApplicationCard;
