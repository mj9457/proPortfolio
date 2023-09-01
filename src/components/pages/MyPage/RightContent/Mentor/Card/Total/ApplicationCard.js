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
	// 	console.log('categoryKey', categoryKey, 'itme: ', item);
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

	// const portfolioId = item.portfolioId; // 유저가 불러올 멘토링 신청한 멘토의 아이디 ( 유저 : 멘토의 아이디 )
	// const userId = item.userId; // 멘토가 불러올 멘토링을 신청한 유저의 아이디 ( 멘토 : 유저의 아이디 )
	// // console.log('멘토링의 멘토 아이디 : ', portfolioId);
	// // console.log('멘토링 신청한 유저 아이디 :', userId);

	// // 멘토 신청 받은 건
	// const [userData, setUserData] = useState([]); // 유저가 불러올 멘토링 신청한 멘토의 정보
	// const [mentorData, setMentorData] = useState([]); // 멘토가 불러올 멘토링을 신청한 유저의 정보

	// const { result: userDatas } = useApi({
	// 	path: `/user/${userId}/profile`,
	// 	shouldFetch: true,
	// });
	// const { result: mentorDatas } = useApi({
	// 	path: `/portfolio/${portfolioId}`,
	// 	shouldFetch: true,
	// });

	// useEffect(() => {
	// 	if (userDatas) {
	// 		setUserData(userDatas);
	// 	}
	// }, [userDatas]);

	// useEffect(() => {
	// 	if (mentorDatas) {
	// 		setMentorData(mentorDatas);
	// 	}
	// }, [mentorDatas]);

	// // useEffect(() => {
	// // 	console.log('userData : ', userDatas);
	// // }, [userDatas]);

	// // useEffect(() => {
	// // 	console.log('mentorData : ', mentorDatas);
	// // }, [mentorDatas]);

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
					// userItems={userItems}
					// mentoringItems={mentoringItems}
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
					// userItems={userItems}
					// mentoringItems={mentoringItems}
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
					// userItems={userItems}
					// mentoringItems={mentoringItems}
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
					// userItems={userItems}
					// mentoringItems={mentoringItems}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			)}
		</>
	);
}

export default ApplicationCard;

function CardLayout(props) {
	// const { categoryKey, item, userItems, mentoringItems } = props;
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

	const portfolioId = item.portfolioId;

	const movePageToPortFolio = item => {
		window.open(
			`http://localhost:3000/portfolio/post/${portfolioId}`,
			'_blank',
			'noopener, noreferrer',
		); // 멘토링 게시물 (멘토)
	};

	// /// ////////////////////////////////////////////////
	// // 멘토
	// // 멘토링 신청 게시글(portfolioId)
	// const [portfolioId, setPorfoiloId] = useState();
	// const { result: mentoringRequests } = useApi({
	// 	path: `/portfolio/mentor/mentoringRequests`,
	// 	shouldFetch: true,
	// });

	// useEffect(() => {
	// 	if (mentoringRequests) {
	// 		setPorfoiloId(mentoringRequests);
	// 	}
	// }, [mentoringRequests]);

	// console.log('포폴 ID: ', portfolioId);
	// /// ////////////////////////////////////////////////

	const { trigger } = useApi({});

	const acceptedHandler = async (event, item) => {
		console.log(event);
		console.log(event.target.innerText);
		console.log('target1: ', item);

		// 멘토
		const portfolioId = item.portfolioId; // 멘토가 올린 신청 게시글의 id
		const requestId = item._id; // 멘토가 신청 받은 id
		const acceptedPostData = { status: 'accepted' }; // 수락할때 보내줄 데이터,
		const requestedPostData = { status: 'requested' }; // 거절 취소할때 보내줄 데이터,

		console.log('portfolioId', portfolioId);
		console.log('requestId', requestId);
		console.log('postData', acceptedPostData);

		if (event.target.innerText === '수락하기') {
			trigger({
				method: 'post',
				path: `/portfolio/updateMentoringRequest/${portfolioId}/${requestId}`,
				data: acceptedPostData,
				shouldFetch: true,
			});
		} else {
			trigger({
				method: 'post',
				path: `/portfolio/updateMentoringRequest/${portfolioId}/${requestId}`,
				data: requestedPostData,
				shouldFetch: true,
			});
		}
	};

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
									? item?.profileImageUrl
									: item?.profileImageUrl
							}
						></CCS.UserImage>
						<CCS.UserInfoBox>
							<CCS.UserName>
								{user.role === 'mentor'
									? item?.name
									: item?.name}
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
									onClick={item => {
										movePageToPortFolio(item);
									}}
								>
									{item?.title}
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
										<ApplyModal
											setInfoModalOpenState={
												setInfoModalOpenState
											}
											action={'수정'}
											path={'/'}
											nowData={nowData}
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
												item={nowData}
											/>
									  )
									: editModalOpenState && (
											<EditViewModal
												categoryKey={categoryKey}
												setEditModalOpenState={
													setEditModalOpenState
												}
												item={nowData}
											/>
									  )}
							</>
						) : categoryKey === 'rejected' ? (
							<>
								{user.role === 'mentor' ? (
									<CCS.OneButton
										onClick={event => {
											alert(MESSAGE.MYPAGE.REFUSE.CANCLE);
											console.log(
												MESSAGE.MYPAGE.REFUSE.COMPLETE,
											);
											alert(MESSAGE.MYPAGE.APPLY.CONFIRM);
											acceptedHandler(event, item);
											window.location.replace('/mypage');
										}}
									>
										{
											MYPAGEOPTION.MENTOR.BUTTONTITLE
												.REJECTEDCANCLE
										}
									</CCS.OneButton>
								) : (
									<CCS.OneButton onClick={showRefuseModal}>
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
									/>
								)}
							</>
						) : (
							<>
								{user.role === 'mentor' ? (
									<>
										<CCS.ApplyButton
											onClick={event => {
												alert(
													MESSAGE.MYPAGE.APPLY
														.CONFIRM,
												);
												acceptedHandler(event, item);
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
											onClick={() =>
												alert(
													'멘토링 신청이 취소되었습니다.',
												)
											}
										>
											{
												MYPAGEOPTION.MENTEE.BUTTONTITLE
													.CANCLE
											}
										</CCS.RefuseButton>
										{infoModalOpenState && (
											<ApplyModal
												setInfoModalOpenState={
													setInfoModalOpenState
												}
												action={'수정'}
												path={item.portfolioId}
												nowData={item}
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
