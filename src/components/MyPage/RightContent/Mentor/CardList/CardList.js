import * as CL from './CardList.styles';
import ApplicationCard from '../Card/Total/ApplicationCard';
import { useState } from 'react';

// 카드 리스트
function CardList({ total }) {
	const [category, setCategory] = useState('');
	const buttonHandler = e => {
		setCategory(e.target.id);
	};
	return (
		<>
			{category === 'apply' ? (
				<ApplyCardList
					total={total}
					fun={buttonHandler}
					item={category}
				/>
			) : category === 'completed' ? (
				<CompletedCardList
					total={total}
					fun={buttonHandler}
					item={category}
				/>
			) : category === 'refuse' ? (
				<RefuseCardList
					total={total}
					fun={buttonHandler}
					item={category}
				/>
			) : (
				<TotalCardList
					total={total}
					fun={buttonHandler}
					item={category}
				/>
			)}
		</>
	);
}

export default CardList;

// 신청 받은 건(총 신청 건)
function TotalCardList({ total, fun, item }) {
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
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
					</CL.SubTitleFlexBox>
					<p>총 {total}건</p>
				</CL.SubContentBar>

				<CL.SubContentListBox>
					{total === 1 ? (
						'내역이 없습니다. total입니다'
					) : (
						<ApplicationCard item={item}></ApplicationCard>
					)}
				</CL.SubContentListBox>
			</CL.SubContentBox>
		</>
	);
}

// 신청 수락 건
function ApplyCardList({ total, fun, item }) {
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
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
					</CL.SubTitleFlexBox>
					<p>총 {total}건</p>
				</CL.SubContentBar>

				<CL.SubContentListBox>
					{total === 1 ? (
						'내역이 없습니다. apply입니다'
					) : (
						<ApplicationCard item={item}></ApplicationCard>
					)}
				</CL.SubContentListBox>
			</CL.SubContentBox>
		</>
	);
}

// 리뷰 완료 건
function CompletedCardList({ total, fun, item }) {
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
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
					</CL.SubTitleFlexBox>
					<p>총 {total}건</p>
				</CL.SubContentBar>

				<CL.SubContentListBox>
					{total === 1 ? (
						'내역이 없습니다. completed입니다'
					) : (
						<ApplicationCard item={item}></ApplicationCard>
					)}
				</CL.SubContentListBox>
			</CL.SubContentBox>
		</>
	);
}

// 신청 거절 건
function RefuseCardList({ total, fun, item }) {
	return (
		<>
			<CL.SubContentBox>
				<CL.SubContentBar>
					<CL.SubTitleFlexBox>
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
					</CL.SubTitleFlexBox>
					<p>총 {total}건</p>
				</CL.SubContentBar>

				<CL.SubContentListBox>
					{total === 1 ? (
						'내역이 없습니다. refuse입니다'
					) : (
						<ApplicationCard item={item}></ApplicationCard>
					)}
				</CL.SubContentListBox>
			</CL.SubContentBox>
		</>
	);
}
