import * as H from './StudyInfoCard.styles';
import Chip from '../Chip/Chip';

function StudyInfoCard({
	classification,
	title,
	process,
	recruits,
	position,
	deadline,
	background,
	id,
}) {
	return (
		<H.Container>
			<H.StudyInfoCard
				href={`/study/detail/${id}`}
				background={background}
			>
				<Chip classification={classification} />
				<H.Title>{title}</H.Title>
				<H.Position>{position.join('/ ')}</H.Position>
				<H.DetailInfoWrapper>
					<div>
						<H.NumberPeople>{recruits}</H.NumberPeople>
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
