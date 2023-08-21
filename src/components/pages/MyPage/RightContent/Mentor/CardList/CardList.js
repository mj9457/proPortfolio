import * as CL from './CardList.styles';
import ApplicationCard from '../Card/Total/ApplicationCard';
import { useState } from 'react';

// 카드 리스트
function CardList({
	totalCoaching,
	applyCoaching,
	completedCoaching,
	refuseCoaching,
}) {
	const [category, setCategory] = useState('');
	const buttonHandler = e => {
		setCategory(e.target.id);
	};

	return (
		<>
			{category === 'apply' ? (
				<CardListLayout
					total={applyCoaching}
					fun={buttonHandler}
					category={category}
				/>
			) : category === 'completed' ? (
				<CardListLayout
					total={completedCoaching}
					fun={buttonHandler}
					category={category}
				/>
			) : category === 'refuse' ? (
				<CardListLayout
					total={refuseCoaching}
					fun={buttonHandler}
					category={category}
				/>
			) : (
				<CardListLayout
					total={totalCoaching}
					fun={buttonHandler}
					category={category}
				/>
			)}
		</>
	);
}

export default CardList;

function CardListLayout({ total, fun, category }) {
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
						{category === 'apply' ? (
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
						) : category === 'completed' ? (
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
						) : category === 'refuse' ? (
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
					<p>총 {total}건</p>
				</CL.SubContentBar>

				<CL.SubContentListBox>
					{total === 0 ? (
						`내역이 없습니다. ${category}탭입니다`
					) : (
						<ApplicationCard category={category}></ApplicationCard>
					)}
				</CL.SubContentListBox>
			</CL.SubContentBox>
		</>
	);
}
