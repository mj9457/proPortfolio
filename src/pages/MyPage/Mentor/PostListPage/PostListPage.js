import PostList from '../../../../components/pages/MyPage/RightContent/Mentor/PostList/PostList';
import * as PLP from './PostListPage.styles';

function PostListPage() {
	return (
		<PLP.Wrapper>
			<PLP.LightContent>
				<PostList></PostList>
			</PLP.LightContent>
		</PLP.Wrapper>
	);
}

export default PostListPage;
