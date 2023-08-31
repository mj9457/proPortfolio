import * as CL from './CardList.styles';
import ApplicationCard from '../Card/Total/ApplicationCard';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	mentoringItem,
	userData,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import MESSAGE from '../../../../../../constants/message';
import useApi from '../../../../../../hooks/useApi';

// 카드 리스트
function CardList() {
	const mentoringData = useRecoilValue(mentoringItem);

	const requestedLength = mentoringData?.requested?.length;
	const acceptedLength = mentoringData?.accepted?.length;
	const completedLength = mentoringData?.completed?.length;
	const rejectedLength = mentoringData?.rejected?.length;
	const subTitles = {
		mentor: {
			requested: MYPAGEOPTION.MENTOR.SUBTITLE.REQUESTED,
			accepted: MYPAGEOPTION.MENTOR.SUBTITLE.ACCEPTED,
			completed: MYPAGEOPTION.MENTOR.SUBTITLE.COMPLETED,
			rejected: MYPAGEOPTION.MENTOR.SUBTITLE.REJECTED,
		},
		mentee: {
			requested: MYPAGEOPTION.MENTEE.SUBTITLE.REQUESTED,
			accepted: MYPAGEOPTION.MENTEE.SUBTITLE.ACCEPTED,
			completed: MYPAGEOPTION.MENTEE.SUBTITLE.COMPLETED,
			rejected: MYPAGEOPTION.MENTEE.SUBTITLE.REJECTED,
		},
	};

	const [category, setCategory] = useState('');
	const buttonHandler = e => {
		setCategory(e.target.id);
	};

	return (
		<>
			{category === 'accepted' ? (
				<CardListLayout
					length={acceptedLength}
					fun={buttonHandler}
					categoryKey={category}
					subTitles={subTitles}
				/>
			) : category === 'completed' ? (
				<CardListLayout
					length={completedLength}
					fun={buttonHandler}
					categoryKey={category}
					subTitles={subTitles}
				/>
			) : category === 'rejected' ? (
				<CardListLayout
					length={rejectedLength}
					fun={buttonHandler}
					categoryKey={category}
					subTitles={subTitles}
				/>
			) : (
				<CardListLayout
					length={requestedLength}
					fun={buttonHandler}
					categoryKey={category}
					subTitles={subTitles}
				/>
			)}
		</>
	);
}

export default CardList;

function CardListLayout({ length, fun, categoryKey, subTitles }) {
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
	}, [users]);

	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
						{categoryKey === 'accepted' ? (
							<>
								<CL.NonClicked id={'requested'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.requested
										: subTitles.mentee.requested}
								</CL.NonClicked>
								<CL.Clicked id={'accepted'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.accepted
										: subTitles.mentee.accepted}
								</CL.Clicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.NonClicked>
								<CL.NonClicked id={'rejected'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.rejected
										: subTitles.mentee.rejected}
								</CL.NonClicked>
							</>
						) : categoryKey === 'completed' ? (
							<>
								<CL.NonClicked id={'requested'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.requested
										: subTitles.mentee.requested}
								</CL.NonClicked>
								<CL.NonClicked id={'accepted'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.accepted
										: subTitles.mentee.accepted}
								</CL.NonClicked>
								<CL.Clicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.Clicked>
								<CL.NonClicked id={'rejected'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.rejected
										: subTitles.mentee.rejected}
								</CL.NonClicked>
							</>
						) : categoryKey === 'rejected' ? (
							<>
								<CL.NonClicked id={'requested'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.requested
										: subTitles.mentee.requested}
								</CL.NonClicked>
								<CL.NonClicked id={'accepted'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.accepted
										: subTitles.mentee.accepted}
								</CL.NonClicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.NonClicked>
								<CL.Clicked id={'rejected'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.rejected
										: subTitles.mentee.rejected}
								</CL.Clicked>
							</>
						) : (
							<>
								<CL.Clicked id={'requested'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.requested
										: subTitles.mentee.requested}
								</CL.Clicked>
								<CL.NonClicked id={'accepted'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.accepted
										: subTitles.mentee.accepted}
								</CL.NonClicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.NonClicked>
								<CL.NonClicked id={'rejected'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.rejected
										: subTitles.mentee.rejected}
								</CL.NonClicked>
							</>
						)}
					</CL.SubTitleFlexBox>
					<p>총 {length}건</p>
				</CL.SubContentBar>

				{length === 0 ? (
					<CL.NonSubContentListBox>
						{MESSAGE.MYPAGE.NODATA.LIST}
					</CL.NonSubContentListBox>
				) : (
					<CL.SubContentListBox>
						{users.role === 'mentor' ? (
							<ApplicationCard
								categoryKey={categoryKey}
							></ApplicationCard>
						) : (
							<ApplicationCard
								categoryKey={categoryKey}
							></ApplicationCard>
						)}
					</CL.SubContentListBox>
				)}
			</CL.SubContentBox>
		</>
	);
}
