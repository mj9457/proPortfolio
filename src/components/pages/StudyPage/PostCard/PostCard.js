import * as S from './PostCard.styles';
import { Link } from 'react-router-dom';
import Chip from '../../../@common/Chip/Chip';
import Line from '../../../@common/Line/Line';

function PostCard({ data }) {
	// console.log(data);

	const { postId, status, title, content, position, category } = data;

	return (
		<S.Container>
			<Link to={`/study/detail/${postId}`}>
				<S.ChipWrapper>
					<Chip category={category} />
					<Chip status={status} />
				</S.ChipWrapper>

				<S.Title>{title}</S.Title>
				<S.PostText>{content}</S.PostText>

				<S.BottomBox>
					<S.RightBox>
						{position.map((name, idx) => (
							<S.PositionBox key={idx}>
								<S.Position>{name}</S.Position>
							</S.PositionBox>
						))}
					</S.RightBox>

					<S.Day>마감 10일 전</S.Day>
				</S.BottomBox>
			</Link>
		</S.Container>
	);
}

export default PostCard;
