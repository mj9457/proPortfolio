import { useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';

function MentoringListPage() {
	const [totalCoaching, setTotalCoaching] = useState(10);
	const [applyCoaching, setApplyCoaching] = useState(5);
	const [completedCoaching, setCompletedCoaching] = useState(3);
	const [refuseCoaching, setRefuseCoaching] = useState(2);

	return (
		<M.Wrapper>
			<M.LightContent>
				<MentoringPage
					totalCoaching={totalCoaching}
					applyCoaching={applyCoaching}
					completedCoaching={completedCoaching}
					refuseCoaching={refuseCoaching}
				></MentoringPage>

				<CardList
					totalCoaching={totalCoaching}
					applyCoaching={applyCoaching}
					completedCoaching={completedCoaching}
					refuseCoaching={refuseCoaching}
				></CardList>
			</M.LightContent>
		</M.Wrapper>
	);
}

export default MentoringListPage;
