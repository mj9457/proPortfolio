import * as CL from './CardList.styles';
import ApplicationCard from '../Card/Total/ApplicationCard';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
	mentoringItem,
	applyItem,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import MESSAGE from '../../../../../../constants/message';
import useApi from '../../../../../../hooks/useApi';

// 카드 리스트
function CardList() {
	// 멘토링 신청 받은 내역, 멘토링 신청 내역
	const mentoringData = useRecoilValue(mentoringItem);
	const applyData = useRecoilValue(applyItem);

	// 멘토링 신청 받은 내역, 멘토링 신청 내역 길이 리스트
	const itemLength = {
		mentor: {
			requested: mentoringData?.requested?.length || 0,
			accepted: mentoringData?.accepted?.length || 0,
			completed: mentoringData?.completed?.length || 0,
			rejected: mentoringData?.rejected?.length || 0,
		},
		mentee: {
			requested: applyData?.requested?.length || 0,
			accepted: applyData?.accepted?.length || 0,
			completed: applyData?.completed?.length || 0,
			rejected: applyData?.rejected?.length || 0,
		},
	};

	// 카테고리 부제목 리스트
	const subTitles = {
		mentor: {
			requested: MYPAGEOPTION?.MENTOR?.SUBTITLE?.REQUESTED || '',
			accepted: MYPAGEOPTION?.MENTOR?.SUBTITLE?.ACCEPTED || '',
			completed: MYPAGEOPTION?.MENTOR?.SUBTITLE?.COMPLETED || '',
			rejected: MYPAGEOPTION?.MENTOR?.SUBTITLE?.REJECTED || '',
		},
		mentee: {
			requested: MYPAGEOPTION?.MENTEE?.SUBTITLE?.REQUESTED || '',
			accepted: MYPAGEOPTION?.MENTEE?.SUBTITLE?.ACCEPTED || '',
			completed: MYPAGEOPTION?.MENTEE?.SUBTITLE?.COMPLETED || '',
			rejected: MYPAGEOPTION?.MENTEE?.SUBTITLE?.REJECTED || '',
		},
	};

	// 현재 누른 카테고리 설정
	const [category, setCategory] = useState('');
	const buttonHandler = e => {
		setCategory(e.target.id);
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

	return (
		<>
			{users.role === 'mentor' ? (
				<>
					{category === 'accepted' ? (
						<CardListLayout
							length={itemLength.mentor.accepted}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={mentoringData.accepted}
						/>
					) : category === 'completed' ? (
						<CardListLayout
							length={itemLength.mentor.completed}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={mentoringData.completed}
						/>
					) : category === 'rejected' ? (
						<CardListLayout
							length={itemLength.mentor.rejected}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={mentoringData.rejected}
						/>
					) : (
						<CardListLayout
							length={itemLength.mentor.requested}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={mentoringData.requested}
						/>
					)}
				</>
			) : users.role === 'user' ? (
				<>
					{category === 'accepted' ? (
						<CardListLayout
							length={itemLength.mentee.accepted}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={applyData.accepted}
						/>
					) : category === 'completed' ? (
						<CardListLayout
							length={itemLength.mentee.completed}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={applyData.completed}
						/>
					) : category === 'rejected' ? (
						<CardListLayout
							length={itemLength.mentee.rejected}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={applyData.rejected}
						/>
					) : (
						<CardListLayout
							length={itemLength.mentee.requested}
							fun={buttonHandler}
							categoryKey={category}
							subTitles={subTitles}
							item={applyData.requested}
						/>
					)}
				</>
			) : undefined}
		</>
	);
}

export default CardList;

function CardListLayout({ length, fun, categoryKey, subTitles, item }) {
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
					<>
						<CL.NonSubContentListBox>
							{MESSAGE.MYPAGE.NODATA.LIST}
						</CL.NonSubContentListBox>
					</>
				) : (
					<>
						<CL.SubContentListBox>
							{item.map((element, index) => {
								return (
									<ApplicationCard
										key={index}
										categoryKey={categoryKey}
										item={element}
									></ApplicationCard>
								);
							})}
						</CL.SubContentListBox>
					</>
				)}
			</CL.SubContentBox>
		</>
	);
}
