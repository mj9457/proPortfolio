import * as H from './StudyInfoCard.styles';

StudyInfoCard.defaultProps = {
	category: '스터디',
	languages: ['React', 'JavaScript', 'Vue'],
	title: '성수역 모각코 하실분 구합니다.',
	numberPeople: '10',
	position: '프론트엔드',
	deadline: 2,
};

export default function StudyInfoCard({
	category,
	title,
	languages,
	numberPeople,
	position,
	deadline,
	link,
}) {
	return (
		<H.Container>
			<H.StudyInfoCard href={link}>
				<H.Category>{category}</H.Category>
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
						<H.Position>{position}</H.Position>
					</div>
					<H.Deadline>마감 {deadline}일 전</H.Deadline>
				</H.DetailInfoWrapper>
			</H.StudyInfoCard>
		</H.Container>
	);
}
