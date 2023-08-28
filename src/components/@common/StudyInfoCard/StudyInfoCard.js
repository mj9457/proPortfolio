import * as H from './StudyInfoCard.styles';
import Chip from '../Chip/Chip';

function StudyInfoCard({
	category,
	title,
	process,
	recruits,
	position,
	deadline,
	background,
	postId,
}) {
	return (
		<H.Container>
			<H.StudyInfoCard
				href={`/study/detail/${postId}`}
				background={background}
			>
				<Chip category={category} />
				<H.Title>{title}</H.Title>
				<H.PositionWrapper>
					{position.map((pos, idx) => (
						<H.Position key={`${pos}-${idx}-${title}`}>
							{pos}
						</H.Position>
					))}
				</H.PositionWrapper>
				<H.DetailInfoWrapper>
					<div>
						<H.NumberPeople>{recruits}명</H.NumberPeople>
						<span>|</span>
						<H.Process>{process}</H.Process>
					</div>
					<H.Deadline>{deadline}</H.Deadline>
				</H.DetailInfoWrapper>
			</H.StudyInfoCard>
		</H.Container>
	);
}

export default StudyInfoCard;
