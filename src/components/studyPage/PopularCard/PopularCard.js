import * as S from './PopularCard.styles';

function PopularCard() {
	return (
		<S.Container>
			{/* 컴포넌트 분리 필요 */}
			<S.ChipBox>
				<S.ChipText>프로젝트</S.ChipText>
			</S.ChipBox>

			<S.Title>엘리스 SW 엔지니어 트랙 5기 선발 진행 중입니다.</S.Title>

			<S.StackWrapper>
				<S.StackText>React</S.StackText>
				<S.StackText>React</S.StackText>
				<S.StackText>React</S.StackText>
			</S.StackWrapper>

			<S.Person></S.Person>
		</S.Container>
	);
}

export default PopularCard;
