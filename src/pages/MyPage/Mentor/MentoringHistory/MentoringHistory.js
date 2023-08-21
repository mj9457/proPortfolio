import MentoringHistoryList from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringHistoryPage/MentoringHistoryList';
import * as MH from './MentoringHistory.styles';

function MentoringHistory() {
	return (
		<MH.Wrapper>
			<MH.LightContent>
				<MentoringHistoryList></MentoringHistoryList>
			</MH.LightContent>
		</MH.Wrapper>
	);
}

export default MentoringHistory;
