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
	mentoringItem,
	userData,
} from '../../../../../../../recoil/atoms/myPage/myPage.atom';
import axios from 'axios';
import ApplyModal from '../../../../../../@common/ApplyModal/ApplyModal';
import MESSAGE from '../../../../../../../constants/message';

// 카드 리스트
function ApplicationCard({ categoryKey }) {
	// 모달창 노출 여부 state
	const [infoModalOpenState, setInfoModalOpenState] = useState(false);
	const [editModalOpenState, setEditModalOpenState] = useState(false);
	const [refuseModalOpenState, setRefuseModalOpenState] = useState(false);

	// 모달창 노출
	const showInfoModal = () => {
		setInfoModalOpenState(true);
	};
	const showEditModal = () => {
		setEditModalOpenState(true);
	};
	const showRefuseModal = () => {
		setRefuseModalOpenState(true);
	};

	const mentoringData = useRecoilValue(mentoringItem);
	const totalData = mentoringData.total;
	const applyData = mentoringData.apply;
	const completedData = mentoringData.completed;
	const refuseData = mentoringData.refuse;

	const newUser = { ...useRecoilValue(userData) };
	newUser.role = 'mentor';

	const [mData, setMData] = useState('');

	// 게시글 삭제
	const onDelete = targetId => {
		async function deleteList() {
			try {
				if (newUser.role === 'mentor') {
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
			{categoryKey === 'apply'
				? applyData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showEditModal={showEditModal}
								editModalOpenState={editModalOpenState}
								setEditModalOpenState={setEditModalOpenState}
								categoryKey={categoryKey}
								onDelete={onDelete}
								item={item}
							></CardLayout>
						);
				  })
				: categoryKey === 'completed'
				? completedData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showEditModal={showEditModal}
								editModalOpenState={editModalOpenState}
								setEditModalOpenState={setEditModalOpenState}
								categoryKey={categoryKey}
								item={item}
							></CardLayout>
						);
				  })
				: categoryKey === 'refuse'
				? refuseData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showRefuseModal={showRefuseModal}
								refuseModalOpenState={refuseModalOpenState}
								setRefuseModalOpenState={
									setRefuseModalOpenState
								}
								categoryKey={categoryKey}
								onDelete={onDelete}
								item={item}
							></CardLayout>
						);
				  })
				: totalData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showRefuseModal={showRefuseModal}
								refuseModalOpenState={refuseModalOpenState}
								setRefuseModalOpenState={
									setRefuseModalOpenState
								}
								categoryKey={categoryKey}
								onDelete={onDelete}
								item={item}
							></CardLayout>
						);
				  })}
		</>
	);
}

export default ApplicationCard;

function CardLayout(props) {
	const { categoryKey, onDelete, item } = props;
	const { showInfoModal, infoModalOpenState, setInfoModalOpenState } = props;
	const { showEditModal, editModalOpenState, setEditModalOpenState } = props;
	const { showRefuseModal, refuseModalOpenState, setRefuseModalOpenState } =
		props;

	// 여긴 유저 정보를 받아오면 안됌! 임시 (api 완성 후 삭제필요)
	const user = useRecoilValue(userData);
	const users = { ...user };
	users.role = 'mentor';

	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				{users.role === 'mentor' ? (
					<CCS.Title>{MESSAGE.MYPAGE.MENTOR.CARDTITLE}</CCS.Title>
				) : undefined}
				<CCS.UserBox>
					<CCS.UserImage></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>{`사용자 이름: ${item.userId}`}</CCS.UserName>
						<CCS.ApplicationTitle onClick={showInfoModal}>
							{users.role === 'mentor'
								? `신청서 제목: ${item.title}`
								: `개발 경력:${item.title}`}
						</CCS.ApplicationTitle>
						{users.role === 'mentor'
							? infoModalOpenState && (
									<InfoViewModal
										setInfoModalOpenState={
											setInfoModalOpenState
										}
									/>
							  )
							: infoModalOpenState && (
									<InfoEditModal
										setInfoModalOpenState={
											setInfoModalOpenState
										}
									/>
							  )}
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					{categoryKey === 'apply' ? (
						<>
							{users.role === 'mentor' ? (
								<CCS.OneButton onClick={showEditModal}>
									{MESSAGE.MYPAGE.MENTOR.BUTTONTITLE.EDIT}
								</CCS.OneButton>
							) : undefined}

							{editModalOpenState && (
								<EditModal
									categoryKey={categoryKey}
									setEditModalOpenState={
										setEditModalOpenState
									}
								/>
							)}
						</>
					) : categoryKey === 'completed' ? (
						<>
							<CCS.OneButton onClick={showEditModal}>
								{users.role === 'mentor'
									? MESSAGE.MYPAGE.MENTOR.BUTTONTITLE.MODIFY
									: MESSAGE.MYPAGE.MENTEE.BUTTONTITLE
											.EDITVIEW}
							</CCS.OneButton>
							{users.role === 'mentor'
								? editModalOpenState && (
										<EditModal
											categoryKey={categoryKey}
											setEditModalOpenState={
												setEditModalOpenState
											}
										/>
								  )
								: editModalOpenState && (
										<EditViewModal
											categoryKey={categoryKey}
											setEditModalOpenState={
												setEditModalOpenState
											}
										/>
								  )}
						</>
					) : categoryKey === 'refuse' ? (
						<>
							{users.role === 'mentor' ? (
								<CCS.OneButton
									onClick={() => {
										alert('거절을 취소하시겠습니까?');
										console.log('거절이 취소되었습니다.');
									}}
								>
									{MESSAGE.MYPAGE.MENTOR.BUTTONTITLE.REFUSE}
								</CCS.OneButton>
							) : (
								<CCS.OneButton onClick={showRefuseModal}>
									{
										MESSAGE.MYPAGE.MENTEE.BUTTONTITLE
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
							<CCS.RefuseButton onClick={showRefuseModal}>
								거절하기
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
									alert('수락하시겠습니까?');
								}}
							>
								수락하기
							</CCS.ApplyButton>
						</>
					)}
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}
