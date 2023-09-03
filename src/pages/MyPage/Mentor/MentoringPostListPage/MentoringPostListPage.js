import MentoringPostList from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPostList/MentoringPostList';
import * as MPLP from './MentoringPostListPage.styles';

function MentoringPostListPage() {
	return (
		<MPLP.Wrapper>
			<MPLP.LightContent>
				<MentoringPostList></MentoringPostList>
			</MPLP.LightContent>
		</MPLP.Wrapper>
	);
}

export default MentoringPostListPage;
