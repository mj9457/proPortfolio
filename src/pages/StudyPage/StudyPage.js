import * as S from './StudyPage.styles';
import PopularCard from '../../components/StudyPage/PopularCard/PopularCard';

function StudyPage() {
	return (
		<>
			<S.Container>
				<S.TitleWrapper>
					<S.Title>🔥 인기 스터디/ 프로젝트</S.Title>
					<S.SubTitle>
						지금 인기 있는 스터디, 프로젝트를 확인해보세요!
					</S.SubTitle>
				</S.TitleWrapper>

				<PopularCard />
			</S.Container>
		</>
	);
}

export default StudyPage;
