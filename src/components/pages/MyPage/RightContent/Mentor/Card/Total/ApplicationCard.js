import EditModal from '../../Modal/Mentor/EditModal/EditModal';
import RefuseModal from '../../Modal/Mentor/RefuseModal/RefuseModal';
import { useEffect, useState } from 'react';
import * as CCS from './ApplicationCard.styles';
import InfoViewModal from '../../Modal/Mentor/InfoViewModal/InfoViewModal';
import RefuseViewModal from '../../Modal/Mentee/RefuseViewModal/RefuseViewModal';
import InfoEditModal from '../../Modal/Mentee/InfoEditModal/InfoEditModal';
import EditViewModal from '../../Modal/Mentee/EditViewModal/EditViewModal';
import { useRecoilValue } from 'recoil';
import { mentoringItem } from '../../../../../../../recoil/atoms/myPage/myPage.atom';
import axios from 'axios';
import ApplyModal from '../../../../../../@common/ApplyModal/ApplyModal';
import MYPAGEOPTION from '../../../../../../../constants/mypage';
import MESSAGE from '../../../../../../../constants/message';
import useApi from '../../../../../../../hooks/useApi';

// 카드 리스트
function ApplicationCard({ categoryKey }) {
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

	const mentoringData = useRecoilValue(mentoringItem);
	const requestedData = mentoringData.requested;
	const acceptedData = mentoringData.accepted;
	const completedData = mentoringData.completed;
	const refuseData = mentoringData.refuse;
	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users, trigger: usersT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log(user);
	}, [users]);

	const [mData, setMData] = useState('');

	// 게시글 삭제
	const onDelete = targetId => {
		async function deleteList() {
			try {
				if (user.role === 'mentor') {
					const response = await axios.delete(
						`https://jsonplaceholder.typicode.com/posts/:${targetId}`, // 요청 주소 다르게
					);
					console.log(response);
					console.log(response.data);
					// const newpostList = mData.filter(
					// 	data => data.id !== targetId,
					// );
					// console.log(newpostList);
					// setMData(newpostList);
				} else {
					const response = await axios.delete(
						`https://jsonplaceholder.typicode.com/posts/:${targetId}`, // 요청 주소를 다르게
					);
					console.log(response);
					console.log(response.data);
					// const newpostList = mData.filter(
					// 	data => data.id !== targetId,
					// );
					// console.log(newpostList);
					// setMData(newpostList);
				}
			} catch (err) {
				console.log(err);
			}
		}
		deleteList();
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
					onDelete={onDelete}
					itemArr={acceptedData}
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
					itemArr={completedData}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			) : categoryKey === 'refuse' ? (
				<CardLayout
					showInfoModal={showInfoModal}
					infoModalOpenState={infoModalOpenState}
					setInfoModalOpenState={setInfoModalOpenState}
					showRefuseModal={showRefuseModal}
					refuseModalOpenState={refuseModalOpenState}
					setRefuseModalOpenState={setRefuseModalOpenState}
					categoryKey={categoryKey}
					onDelete={onDelete}
					itemArr={refuseData}
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
					onDelete={onDelete}
					itemArr={requestedData}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			)}
		</>
	);
}

export default ApplicationCard;

function CardLayout(props) {
	const { categoryKey, onDelete, itemArr } = props;
	const { nowData, nowDataFun } = props;
	const { showInfoModal, infoModalOpenState, setInfoModalOpenState } = props;
	const { showEditModal, editModalOpenState, setEditModalOpenState } = props;
	const { showRefuseModal, refuseModalOpenState, setRefuseModalOpenState } =
		props;

	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users, trigger: usersT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log(user);
	}, [users]);

	const newArr = [...itemArr];

	return (
		<>
			{newArr.map((element, index) => {
				return (
					<CCS.CardWrapper key={index}>
						<CCS.Wrapper>
							{users.role === 'mentor' ? (
								<CCS.Title>
									{MYPAGEOPTION.MENTOR.CARDTITLE}
								</CCS.Title>
							) : undefined}
							<CCS.UserBox>
								<CCS.UserImage></CCS.UserImage>
								<CCS.UserInfoBox>
									<CCS.UserName>{`${element.userId}`}</CCS.UserName>
									<CCS.ApplicationTitle
										onClick={() => {
											showInfoModal(element);
											nowDataFun(element);
										}}
									>
										{users.role === 'mentor'
											? `${element.title}`
											: `개발 경력:${element.title}`}
									</CCS.ApplicationTitle>
									{users.role === 'mentor'
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
												// <InfoEditModal
												// 	setInfoModalOpenState={
												// 		setInfoModalOpenState
												// 	}
												// 	nowData={nowData}
												// />
										  )}
								</CCS.UserInfoBox>
							</CCS.UserBox>

							<CCS.ButtonBox>
								{categoryKey === 'accepted' ? (
									<>
										{users.role === 'mentor' ? (
											<CCS.OneButton
												onClick={() => {
													showEditModal();
													nowDataFun(element);
												}}
											>
												{
													MYPAGEOPTION.MENTOR
														.BUTTONTITLE.EDIT
												}
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
												nowDataFun(element);
											}}
										>
											{users.role === 'mentor'
												? MYPAGEOPTION.MENTOR
														.BUTTONTITLE.MODIFY
												: MYPAGEOPTION.MENTEE
														.BUTTONTITLE.EDITVIEW}
										</CCS.OneButton>
										{users.role === 'mentor'
											? editModalOpenState && (
													<EditModal
														categoryKey={
															categoryKey
														}
														setEditModalOpenState={
															setEditModalOpenState
														}
														item={nowData}
													/>
											  )
											: editModalOpenState && (
													<EditViewModal
														categoryKey={
															categoryKey
														}
														setEditModalOpenState={
															setEditModalOpenState
														}
														item={nowData}
													/>
											  )}
									</>
								) : categoryKey === 'refuse' ? (
									<>
										{users.role === 'mentor' ? (
											<CCS.OneButton
												onClick={() => {
													alert(
														MESSAGE.MYPAGE.REFUSE
															.CANCLE,
													);
													console.log(
														MESSAGE.MYPAGE.REFUSE
															.COMPLETE,
													);
												}}
											>
												{
													MYPAGEOPTION.MENTOR
														.BUTTONTITLE
														.REFUSECANCLE
												}
											</CCS.OneButton>
										) : (
											<CCS.OneButton
												onClick={showRefuseModal}
											>
												{
													MYPAGEOPTION.MENTEE
														.BUTTONTITLE.REFUSEVIEW
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
										<CCS.RefuseButton
											onClick={showRefuseModal}
										>
											{
												MYPAGEOPTION.MENTOR.BUTTONTITLE
													.REFUSE
											}
										</CCS.RefuseButton>
										{refuseModalOpenState && (
											<RefuseModal
												setRefuseModalOpenState={
													setRefuseModalOpenState
												}
												onDelete={onDelete}
											/>
										)}
										<CCS.ApplyButton
											onClick={() => {
												alert(
													MESSAGE.MYPAGE.APPLY
														.REQUSET,
												);
											}}
										>
											{
												MYPAGEOPTION.MENTOR.BUTTONTITLE
													.ACCEPTED
											}
										</CCS.ApplyButton>
									</>
								)}
							</CCS.ButtonBox>
						</CCS.Wrapper>
					</CCS.CardWrapper>
				);
			})}
		</>
	);
}
