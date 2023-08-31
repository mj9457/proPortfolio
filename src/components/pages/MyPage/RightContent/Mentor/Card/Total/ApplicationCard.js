import EditModal from '../../Modal/Mentor/EditModal/EditModal';
import RefuseModal from '../../Modal/Mentor/RefuseModal/RefuseModal';
import { useEffect, useState } from 'react';
import * as CCS from './ApplicationCard.styles';
import InfoViewModal from '../../Modal/Mentor/InfoViewModal/InfoViewModal';
import RefuseViewModal from '../../Modal/Mentee/RefuseViewModal/RefuseViewModal';
import InfoEditModal from '../../Modal/Mentee/InfoEditModal/InfoEditModal';
import EditViewModal from '../../Modal/Mentee/EditViewModal/EditViewModal';
import { useRecoilValue } from 'recoil';
import {
	applyItem,
	mentoringItem,
} from '../../../../../../../recoil/atoms/myPage/myPage.atom';
import axios from 'axios';
import ApplyModal from '../../../../../../@common/ApplyModal/ApplyModal';
import MYPAGEOPTION from '../../../../../../../constants/mypage';
import MESSAGE from '../../../../../../../constants/message';
import useApi from '../../../../../../../hooks/useApi';

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

	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
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
					item={item}
					onDelete={onDelete}
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
					onDelete={onDelete}
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
					onDelete={onDelete}
					nowData={nowData}
					nowDataFun={nowDataFun}
				></CardLayout>
			)}
		</>
	);
}

export default ApplicationCard;

function CardLayout(props) {
	const { categoryKey, onDelete, item } = props;
	const { nowData, nowDataFun } = props;
	const { showInfoModal, infoModalOpenState, setInfoModalOpenState } = props;
	const { showEditModal, editModalOpenState, setEditModalOpenState } = props;
	const { showRefuseModal, refuseModalOpenState, setRefuseModalOpenState } =
		props;

	useEffect(() => {
		console.log('내가바로 새로운 아이템:', item);
	}, [item]);

	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users, trigger } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	const portfolioId = item.portfolioId;

	// 멘토 신청 받은 건
	const [MD1, setMD1] = useState([]);
	const { result: MD } = useApi({
		path: `/portfolio/${portfolioId}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (MD && MD.length > 0) {
			setMD1(MD);
		}
	}, [MD]);

	const newItem = {
		...item,
		...MD,
	};

	useEffect(() => {
		// console.log('내가바로 새로운 아이템:', newItem);
	}, [newItem]);

	const movePageToPortFolio = item => {
		window.open(
			`http://localhost:3000/portfolio/post/${portfolioId}`,
			'_blank',
			'noopener, noreferrer',
		); // 멘토링 게시물 (멘토)
	};

	const acceptedHandler = async e => {
		console.log('target: ', e);
		const [requestId] = [e.userId];
		const postData = { ...e, status: 'accepted' };

		console.log('requestId', requestId);
		console.log('postData', postData);

		try {
			const portfolioId = trigger({
				method: 'get',
				path: `/portfolio/mentor/mentoringRequests`,
				shouldFetch: true,
			});
			console.log('portfolioId', portfolioId);
			// 멘토 신청 수락 건
			const response = await trigger({
				method: 'post',
				// path: `/portfolio/mentor/respondToMentoringRequest/:64ef4afb42ccfe9185e18727/${portfolioId}`,
				path: `/portfolio/mentor/respondToMentoringRequest/${portfolioId}/${requestId}`,
				shouldFetch: true,
				data: postData,
			});
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<CCS.CardWrapper>
				<CCS.Wrapper>
					{users.role === 'mentor' ? (
						<CCS.Title>{MYPAGEOPTION.MENTOR.CARDTITLE}</CCS.Title>
					) : undefined}
					<CCS.UserBox>
						<CCS.UserImage
							src={newItem?.profileImageUrl}
						></CCS.UserImage>
						<CCS.UserInfoBox>
							<CCS.UserName>{newItem?.name}</CCS.UserName>
							{users.role === 'mentor' ? (
								<CCS.ApplicationTitle
									onClick={() => {
										showInfoModal(newItem);
										nowDataFun(newItem);
									}}
								>
									{newItem?.title}
								</CCS.ApplicationTitle>
							) : (
								<CCS.ApplicationTitle
									onClick={item => {
										movePageToPortFolio(newItem);
									}}
								>
									{newItem?.title}
								</CCS.ApplicationTitle>
							)}
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
											nowDataFun(newItem);
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
										nowDataFun(newItem);
									}}
								>
									{users.role === 'mentor'
										? MYPAGEOPTION.MENTOR.BUTTONTITLE.MODIFY
										: MYPAGEOPTION.MENTEE.BUTTONTITLE
												.EDITVIEW}
								</CCS.OneButton>
								{users.role === 'mentor'
									? editModalOpenState && (
											<EditModal
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
								{users.role === 'mentor' ? (
									<CCS.OneButton
										onClick={() => {
											alert(MESSAGE.MYPAGE.REFUSE.CANCLE);
											console.log(
												MESSAGE.MYPAGE.REFUSE.COMPLETE,
											);
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
								{users.role === 'mentor' ? (
									<>
										<CCS.ApplyButton
											onClick={() => {
												alert(
													MESSAGE.MYPAGE.APPLY
														.REQUSET,
												);
												console.log(newItem);
												acceptedHandler(newItem);
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
												onDelete={onDelete}
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
												path={newItem.portfolioId}
												nowData={newItem}
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
