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

			<S.BottomBox>
				<S.RightBox>
					<S.Person>150명</S.Person>
					<S.Position>프론트엔드</S.Position>
				</S.RightBox>

				<S.Day>마감 10일 전</S.Day>
			</S.BottomBox>
		</S.Container>
	);
}

export default PopularCard;
