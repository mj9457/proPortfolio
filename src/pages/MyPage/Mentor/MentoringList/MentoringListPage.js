import { useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';

function MentoringListPage() {
	const [totalCoaching, setTotalCoaching] = useState(0);
	const [applyCoaching, setApplyCoaching] = useState(0);
	const [completedCoaching, setCompletedCoaching] = useState(0);
	const [refuseCoaching, setRefuseCoaching] = useState(0);

	return (
		<M.Wrapper>
			<M.LightContent>
				<MentoringPage
					totalCoaching={totalCoaching}
					applyCoaching={applyCoaching}
					completedCoaching={completedCoaching}
					refuseCoaching={refuseCoaching}
				></MentoringPage>

				<CardList total={totalCoaching}></CardList>
			</M.LightContent>
		</M.Wrapper>
	);
}

export default MentoringListPage;
