import * as S from './PostCard.styles';
import { Link } from 'react-router-dom';
import Chip from '../../../@common/Chip/Chip';

function PostCard({ data }) {
	console.log('POSTCARD', data);
	const {
		_id,
		recruitsStatus,
		title,
		description,
		position,
		classification,
		deadline,
	} = data;

	return (
		<S.Container>
			<Link to={`/study/detail/${_id}`}>
				<S.ChipWrapper>
					<Chip category={classification} />
					<S.ChipBox $recruitsStatus={recruitsStatus}>
						<S.ChipText $recruitsStatus={recruitsStatus}>
							{recruitsStatus}
						</S.ChipText>
					</S.ChipBox>
				</S.ChipWrapper>

				<S.Title>{title}</S.Title>
				<S.PostText>{description}</S.PostText>

				<S.BottomBox>
					<S.RightBox>
						{position.map((name, idx) => (
							<S.PositionBox key={idx}>
								<S.Position>{name}</S.Position>
							</S.PositionBox>
						))}
					</S.RightBox>

					<S.Day>
						<p>마감 기간</p>
						<p>{deadline.split('T')[0].replace(/-/g, '. ')}</p>
					</S.Day>
				</S.BottomBox>
			</Link>
		</S.Container>
	);
}

export default PostCard;
