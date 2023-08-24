import * as CL from './CardList.styles';
import ApplicationCard from '../Card/Total/ApplicationCard';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mentoringItem } from '../../../../../../recoil/atoms/myPage/myPage.atom';

// 카드 리스트
function CardList() {
	const mentoringData = useRecoilValue(mentoringItem);
	const totalLength = mentoringData.total.length;
	const applyLength = mentoringData.apply.length;
	const completedLength = mentoringData.completed.length;
	const refuseLength = mentoringData.refuse.length;

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
				/>
			) : category === 'completed' ? (
				<CardListLayout
					length={completedLength}
					fun={buttonHandler}
					categoryKey={category}
				/>
			) : category === 'refuse' ? (
				<CardListLayout
					length={refuseLength}
					fun={buttonHandler}
					categoryKey={category}
				/>
			) : (
				<CardListLayout
					length={totalLength}
					fun={buttonHandler}
					categoryKey={category}
				/>
			)}
		</>
	);
}

export default CardList;

function CardListLayout({ length, fun, categoryKey }) {
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
						{categoryKey === 'apply' ? (
							<>
								<CL.NonClicked id={'total'} onClick={fun}>
									신청 받은 건
								</CL.NonClicked>
								<CL.Clicked id={'apply'} onClick={fun}>
									신청 수락 건
								</CL.Clicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									리뷰 완료 건
								</CL.NonClicked>
								<CL.NonClicked id={'refuse'} onClick={fun}>
									신청 거절 건
								</CL.NonClicked>
							</>
						) : categoryKey === 'completed' ? (
							<>
								<CL.NonClicked id={'total'} onClick={fun}>
									신청 받은 건
								</CL.NonClicked>
								<CL.NonClicked id={'apply'} onClick={fun}>
									신청 수락 건
								</CL.NonClicked>
								<CL.Clicked id={'completed'} onClick={fun}>
									리뷰 완료 건
								</CL.Clicked>
								<CL.NonClicked id={'refuse'} onClick={fun}>
									신청 거절 건
								</CL.NonClicked>
							</>
						) : categoryKey === 'refuse' ? (
							<>
								<CL.NonClicked id={'total'} onClick={fun}>
									신청 받은 건
								</CL.NonClicked>
								<CL.NonClicked id={'apply'} onClick={fun}>
									신청 수락 건
								</CL.NonClicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									리뷰 완료 건
								</CL.NonClicked>
								<CL.Clicked id={'refuse'} onClick={fun}>
									신청 거절 건
								</CL.Clicked>
							</>
						) : (
							<>
								<CL.Clicked id={'total'} onClick={fun}>
									신청 받은 건
								</CL.Clicked>
								<CL.NonClicked id={'apply'} onClick={fun}>
									신청 수락 건
								</CL.NonClicked>
								<CL.NonClicked id={'completed'} onClick={fun}>
									리뷰 완료 건
								</CL.NonClicked>
								<CL.NonClicked id={'refuse'} onClick={fun}>
									신청 거절 건
								</CL.NonClicked>
							</>
						)}
					</CL.SubTitleFlexBox>
					<p>총 {length}건</p>
				</CL.SubContentBar>

				{length === 0 ? (
					<CL.NonSubContentListBox>
						{`내역이 없습니다. ${categoryKey}탭입니다`}
					</CL.NonSubContentListBox>
				) : (
					<CL.SubContentListBox>
						<ApplicationCard
							categoryKey={categoryKey}
						></ApplicationCard>
					</CL.SubContentListBox>
				)}
			</CL.SubContentBox>
		</>
	);
}
