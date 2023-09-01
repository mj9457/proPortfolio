import EditModal from '../../Modal/Mentor/EditModal/EditModal';
import RefuseModal from '../../Modal/Mentor/RefuseModal/RefuseModal';
import { useEffect, useState } from 'react';
import * as CCS from './ApplicationCard.styles';
import InfoViewModal from '../../Modal/Mentor/InfoViewModal/InfoViewModal';
import RefuseViewModal from '../../Modal/Mentee/RefuseViewModal/RefuseViewModal';
import InfoEditModal from '../../Modal/Mentee/InfoEditModal/InfoEditModal';
import EditViewModal from '../../Modal/Mentee/EditViewModal/EditViewModal';
import ApplyModal from '../../../../../../@common/ApplyModal/ApplyModal';
import MYPAGEOPTION from '../../../../../../../constants/mypage';
import MESSAGE from '../../../../../../../constants/message';
import useApi from '../../../../../../../hooks/useApi';
import { useRecoilValue } from 'recoil';
import { userItem } from '../../../../../../../recoil/atoms/myPage/myPage.atom';

// 카드 리스트
function ApplicationCard({ categoryKey, item }) {
	// useEffect(() => {
	// 	console.log('categoryKey', categoryKey, 'item: ', item);
	// }, [categoryKey]);
	// 모달창 노출 여부 state
	const [infoModalOpenState, setInfoModalOpenState] = useState(false);
	const [editModalOpenState, setEditModalOpenState] = useState(false);
	const [refuseModalOpenState, setRefuseModalOpenState] = useState(false);

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

	// 현재 데이터 변경
	const nowDataFun = e => {
		setNowData(e);
	};

	return (
		<>
			{categoryKey === 'accepted' ? (
				<CardLayout
					showInfoModal={showInfoModal}
					infoModalOpenState={infoModalOpenState}
					setInfoModalOpenState={setInfoModalOpenState}
					showEditModal={showEditModal}
					editModalOpenState={editModalOpenState}
					setEditModalOpenState={setEditModalOpenState}
					categoryKey={categoryKey}
					item={item}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			) : categoryKey === 'completed' ? (
				<CardLayout
					showInfoModal={showInfoModal}
					infoModalOpenState={infoModalOpenState}
					setInfoModalOpenState={setInfoModalOpenState}
					showEditModal={showEditModal}
					editModalOpenState={editModalOpenState}
					setEditModalOpenState={setEditModalOpenState}
					categoryKey={categoryKey}
					item={item}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			) : categoryKey === 'rejected' ? (
				<CardLayout
					showInfoModal={showInfoModal}
					infoModalOpenState={infoModalOpenState}
					setInfoModalOpenState={setInfoModalOpenState}
					showRefuseModal={showRefuseModal}
					refuseModalOpenState={refuseModalOpenState}
					setRefuseModalOpenState={setRefuseModalOpenState}
					categoryKey={categoryKey}
					item={item}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			) : (
				<CardLayout
					showInfoModal={showInfoModal}
					infoModalOpenState={infoModalOpenState}
					setInfoModalOpenState={setInfoModalOpenState}
					showRefuseModal={showRefuseModal}
					refuseModalOpenState={refuseModalOpenState}
					setRefuseModalOpenState={setRefuseModalOpenState}
					categoryKey={categoryKey}
					item={item}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			)}
		</>
	);
}

export default ApplicationCard;

function CardLayout(props) {
	const { categoryKey, item } = props;
	const { nowData, nowDataFun } = props;
	const { showInfoModal, infoModalOpenState, setInfoModalOpenState } = props;
	const { showEditModal, editModalOpenState, setEditModalOpenState } = props;
	const { showRefuseModal, refuseModalOpenState, setRefuseModalOpenState } =
		props;

	// useEffect(() => {
	// 	console.log(userItems);
	// }, [userItems]);

	// useEffect(() => {
	// 	console.log(mentoringItems);
	// }, [mentoringItems]);

	// 유저 데이터
	const user = useRecoilValue(userItem);

	const movePageToPortFolio = item => {
		console.log(item);
		window.location.replace(`/portfolio/post/${item.portfolioId}`); // 멘토링 게시물 (멘토)
	};

	const { trigger } = useApi({});

	// 멘토 - 멘토링 신청 수락하기 / 거절하기
	const acceptedHandler = async item => {
		// 멘토
		const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
		const requestId = item._id; // 멘토가 신청 받은 id
		const acceptedPostData = { status: 'accepted' }; // 수락할때 보내줄 데이터,

		trigger({
			method: 'post',
			path: `/portfolio/updateMentoringRequest/${portfolioId}/${requestId}`,
			data: acceptedPostData,
			shouldFetch: true,
		});
	}; // 유저
	const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
	const requestId = item.userId; // 멘토가 신청 받은 id
	const requestedPostData = { status: 'rejected' }; // 취소할때 보내줄 데이터,

	const rejectMentoring = item => {
		console.log(portfolioId, requestId, requestedPostData);
		trigger({
			method: 'post',
			path: `/portfolio/updateMentoringRequest/${portfolioId}/${requestId}`,
			data: requestedPostData,
			shouldFetch: true,
		});
	};
	useEffect(() => {
		console.log(item);
	}, [item]);
	// const portfolioId = item.portfolioId; // 유저가 불러올 멘토링 신청한 멘토의 아이디 ( 유저 : 멘토의 아이디 )
	const userId = item.userId; // 멘토가 불러올 멘토링을 신청한 유저의 아이디 ( 멘토 : 유저의 아이디 )
	// // console.log('멘토링의 멘토 아이디 : ', portfolioId);
	useEffect(() => {
		console.log('멘토링 신청한 유저 아이디 :', userId);
	}, [userId]);

	// // 멘토 신청 받은 건
	const [userData, setUserData] = useState([]); // 유저가 불러올 멘토링 신청한 멘토의 정보
	const [mentorData, setMentorData] = useState([]); // 멘토가 불러올 멘토링을 신청한 유저의 정보

	const { result: userDatas } = useApi({
		path: `/user/${userId}/profile`,
		shouldFetch: true,
	});
	const { result: mentorDatas } = useApi({
		path: `/portfolio/${portfolioId}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (userDatas) {
			setUserData(userDatas);
		}
	}, [userDatas]);

	useEffect(() => {
		if (mentorDatas) {
			setMentorData(mentorDatas);
		}
	}, [mentorDatas]);

	useEffect(() => {
		console.log('userData : ', userData);
	}, [userData]);

	useEffect(() => {
		console.log('mentorData : ', mentorData);
	}, [mentorData]);

	// const userItems = {
	// 	...item,
	// 	...userData,
	// };

	// const mentoringItems = {
	// 	...item,
	// 	...mentorData,
	// };

	// // useEffect(() => {
	// // 	console.log('내가바로 새로운 유저아이템:', userItems);
	// // }, [userItems]);

	// // useEffect(() => {
	// // 	console.log('내가바로 새로운 멘토링아이템:', mentoringItems);
	// // }, [mentoringItems]);

	return (
		<>
			<CCS.CardWrapper>
				<CCS.Wrapper>
					{user.role === 'mentor' ? (
						<CCS.Title>{MYPAGEOPTION.MENTOR.CARDTITLE}</CCS.Title>
					) : undefined}
					<CCS.UserBox>
						<CCS.UserImage
							src={
								user.role === 'mentor'
									? userDatas?.profileImageUrl
									: mentorDatas?.profileImageUrl
							}
						></CCS.UserImage>
						<CCS.UserInfoBox>
							<CCS.UserName>
								{user.role === 'mentor'
									? userDatas?.name
									: mentorDatas?.name}
							</CCS.UserName>
							{user.role === 'mentor' ? (
								<CCS.ApplicationTitle
									onClick={() => {
										showInfoModal(item);
										nowDataFun(item);
									}}
								>
									{item?.title}
								</CCS.ApplicationTitle>
							) : (
								<CCS.ApplicationTitle
									onClick={() => {
										movePageToPortFolio(item);
									}}
								>
									{mentorDatas?.title}
								</CCS.ApplicationTitle>
							)}
							{user.role === 'mentor'
								? infoModalOpenState && (
										<InfoViewModal
											setInfoModalOpenState={
												setInfoModalOpenState
											}
											item={nowData}
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
						{categoryKey === 'accepted' ? (
							<>
								{user.role === 'mentor' ? (
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
										categoryKey={categoryKey}
										setEditModalOpenState={
											setEditModalOpenState
										}
										item={nowData}
									/>
								)}
							</>
						) : categoryKey === 'completed' ? (
							<>
								<CCS.OneButton
									onClick={() => {
										showEditModal();
										nowDataFun(item);
									}}
								>
									{MYPAGEOPTION.MENTOR.BUTTONTITLE.EDITVIEW}
								</CCS.OneButton>
								{user.role === 'mentor'
									? editModalOpenState && (
											<EditViewModal
												categoryKey={categoryKey}
												setEditModalOpenState={
													setEditModalOpenState
												}
												item={item}
											/>
									  )
									: editModalOpenState && (
											<EditViewModal
												categoryKey={categoryKey}
												setEditModalOpenState={
													setEditModalOpenState
												}
												item={item}
											/>
									  )}
							</>
						) : categoryKey === 'rejected' ? (
							<>
								{user.role === 'mentor' ? undefined : (
									<CCS.OneButton
										onClick={() => {
											showRefuseModal();
										}}
									>
										{
											MYPAGEOPTION.MENTEE.BUTTONTITLE
												.REFUSEVIEW
										}
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
								{user.role === 'mentor' ? (
									<>
										<CCS.ApplyButton
											onClick={() => {
												alert(
													MESSAGE.MYPAGE.APPLY
														.CONFIRM,
												);
												acceptedHandler(item);
												window.location.replace(
													'/mypage',
												);
											}}
										>
											{
												MYPAGEOPTION.MENTOR.BUTTONTITLE
													.ACCEPTED
											}
										</CCS.ApplyButton>
										<CCS.RefuseButton
											onClick={showRefuseModal}
										>
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
												window.location.replace(
													'/mypage',
												);
											}}
										>
											{
												MYPAGEOPTION.MENTEE.BUTTONTITLE
													.CANCLE
											}
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
		</>
	);
}
