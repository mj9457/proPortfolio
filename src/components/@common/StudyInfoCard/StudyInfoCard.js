import * as H from './StudyInfoCard.styles';
import Chip from '../Chip/Chip';

StudyInfoCard.defaultProps = {
	category: 'study',
	languages: ['React', 'JavaScript', 'Vue'],
	title: '성수역 모각코 하실분 구합니다.',
	numberPeople: '10',
	position: ['프론트엔드 개발, 백엔드 개발'],
	deadline: 2,
};

function StudyInfoCard({
	category,
	title,
	languages,
	numberPeople,
	position,
	deadline,
	link,
	background,
}) {
	return (
		<H.Container>
			<H.StudyInfoCard href={link} background={background}>
				<Chip category={category} />
				<H.Title>{title}</H.Title>
				<H.LanguagesWrapper>
					{languages.map((lang, idx) => {
						return (
							<H.Language
								key={`${lang}-${idx}-${title}`}
								lang={lang}
							>
								{lang}
							</H.Language>
						);
					})}
				</H.LanguagesWrapper>
				<H.DetailInfoWrapper>
					<div>
						<H.NumberPeople>{numberPeople}명</H.NumberPeople>
						<span>|</span>
						{position.map((pos, idx) => (
							<H.Position key={`${pos}-${idx}-${title}`}>
								{pos}
							</H.Position>
						))}
					</div>
					<H.Deadline>마감 {deadline}일 전</H.Deadline>
				</H.DetailInfoWrapper>
			</H.StudyInfoCard>
		</H.Container>
	);
}

export default StudyInfoCard;
