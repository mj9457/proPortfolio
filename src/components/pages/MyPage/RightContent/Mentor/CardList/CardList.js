import * as CL from './CardList.styles';
import ApplicationCard from '../Card/Total/ApplicationCard';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	mentoringItem,
	userData,
} from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MESSAGE from '../../../../../../constants/message';

// 카드 리스트
function CardList() {
	const mentoringData = useRecoilValue(mentoringItem);
	const totalLength = mentoringData.total.length;
	const applyLength = mentoringData.apply.length;
	const completedLength = mentoringData.completed.length;
	const refuseLength = mentoringData.refuse.length;

	const subTitles = {
		mentor: {
			total: MESSAGE.MYPAGE.MENTOR.SUBTITLE.TOTAL,
			apply: MESSAGE.MYPAGE.MENTOR.SUBTITLE.APPLY,
			completed: MESSAGE.MYPAGE.MENTOR.SUBTITLE.COMPLETED,
			refuse: MESSAGE.MYPAGE.MENTOR.SUBTITLE.REFUSE,
		},
		mentee: {
			total: MESSAGE.MYPAGE.MENTEE.SUBTITLE.TOTAL,
			apply: MESSAGE.MYPAGE.MENTEE.SUBTITLE.APPLY,
			completed: MESSAGE.MYPAGE.MENTEE.SUBTITLE.COMPLETED,
			refuse: MESSAGE.MYPAGE.MENTEE.SUBTITLE.REFUSE,
		},
	};

	const [category, setCategory] = useState('');
	const buttonHandler = e => {
		setCategory(e.target.id);
	};

	return (
		<>
			{category === 'apply' ? (
				<CardListLayout
					length={applyLength}
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
			) : category === 'refuse' ? (
				<CardListLayout
					length={refuseLength}
					fun={buttonHandler}
					categoryKey={category}
					subTitles={subTitles}
				/>
			) : (
				<CardListLayout
					length={totalLength}
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
	const user = useRecoilValue(userData);
	const users = { ...user };
	users.role = 'mentor';
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
						{categoryKey === 'apply' ? (
							<>
								<CL.NonClicked id={'total'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.total
										: subTitles.mentee.total}
								</CL.NonClicked>
								<CL.Clicked id={'apply'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.apply
										: subTitles.mentee.apply}
								</CL.Clicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.NonClicked>
								<CL.NonClicked id={'refuse'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.refuse
										: subTitles.mentee.refuse}
								</CL.NonClicked>
							</>
						) : categoryKey === 'completed' ? (
							<>
								<CL.NonClicked id={'total'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.total
										: subTitles.mentee.total}
								</CL.NonClicked>
								<CL.NonClicked id={'apply'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.apply
										: subTitles.mentee.apply}
								</CL.NonClicked>
								<CL.Clicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.Clicked>
								<CL.NonClicked id={'refuse'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.refuse
										: subTitles.mentee.refuse}
								</CL.NonClicked>
							</>
						) : categoryKey === 'refuse' ? (
							<>
								<CL.NonClicked id={'total'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.total
										: subTitles.mentee.total}
								</CL.NonClicked>
								<CL.NonClicked id={'apply'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.apply
										: subTitles.mentee.apply}
								</CL.NonClicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.NonClicked>
								<CL.Clicked id={'refuse'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.refuse
										: subTitles.mentee.refuse}
								</CL.Clicked>
							</>
						) : (
							<>
								<CL.Clicked id={'total'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.total
										: subTitles.mentee.total}
								</CL.Clicked>
								<CL.NonClicked id={'apply'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.apply
										: subTitles.mentee.apply}
								</CL.NonClicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.completed
										: subTitles.mentee.completed}
								</CL.NonClicked>
								<CL.NonClicked id={'refuse'} onClick={fun}>
									{users.role === 'mentor'
										? subTitles.mentor.refuse
										: subTitles.mentee.refuse}
								</CL.NonClicked>
							</>
						)}
					</CL.SubTitleFlexBox>
					<p>총 {length}건</p>
				</CL.SubContentBar>

				{length === 0 ? (
					<CL.NonSubContentListBox>
						{MESSAGE.NODATA.LIST}
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
