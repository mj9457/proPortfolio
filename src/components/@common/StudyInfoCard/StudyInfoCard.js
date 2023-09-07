import * as H from './StudyInfoCard.styles';
import { Link } from 'react-router-dom';
import Chip from '../Chip/Chip';

function StudyInfoCard({
	classification,
	recruitsStatus,
	title,
	process,
	recruits,
	position,
	deadline,
	$background,
	postId,
}) {
	return (
		<H.Container>
			<Link to={`/study/detail/${postId}`}>
				<H.StudyInfoCard $background={$background}>
					<H.ChipBox>
						<Chip classification={classification} />
						<H.StatusChip $recruitsStatus={recruitsStatus}>
							<H.StatusText $recruitsStatus={recruitsStatus}>
								{recruitsStatus}
							</H.StatusText>
						</H.StatusChip>
					</H.ChipBox>
					<H.Title>{title}</H.Title>
					<H.Position>{position.join(' / ')}</H.Position>
					<H.DetailInfoWrapper>
						<div>
							<H.NumberPeople>{recruits}</H.NumberPeople>
							<span>|</span>
							<H.Process>{process}</H.Process>
						</div>
						<H.Deadline>{deadline}</H.Deadline>
					</H.DetailInfoWrapper>
				</H.StudyInfoCard>
			</Link>
		</H.Container>
	);
}

export default StudyInfoCard;
// 주석추가