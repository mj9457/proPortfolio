import { useEffect, useState } from 'react';
import * as M from './MentoringListPage.styles';
import { useRecoilState } from 'recoil';
import useApi from '../../../../hooks/useApi';

function MentoringListPage() {
	return (
		<M.Wrapper>
			<M.LightContent>
				{/* <MentoringPage></MentoringPage>
				<CardList></CardList> */}
			</M.LightContent>
		</M.Wrapper>
	);
}

export default MentoringListPage;
