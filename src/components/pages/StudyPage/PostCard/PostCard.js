import * as S from './PostCard.styles';

function PostCard() {
	return (
		<S.Container>
			<S.ChipWrapper>
				<S.ChipBox>
					<S.ChipText>프로젝트</S.ChipText>
				</S.ChipBox>
				<S.ChipBox>
					<S.ChipText>모집중</S.ChipText>
				</S.ChipBox>
			</S.ChipWrapper>

			<S.Title>스터디 및 프로젝트 제목이 들어가는 공간입니다.</S.Title>
			<S.PostText>
				스터디 내용 및 프로젝트 내용이 들어가는 공간입니다. 스터디 내용
				및 프로젝트 내용이 들어가는 공간입니다. 스터디 내용 및 프로젝트
				내용이 들어가는 공간입니다. 스터디 내용 및 프로젝트 내용이
				들어가는 공간입니다. 스터디 내용 및 프로젝트 내용이 들어가는
				공간입니다. 스터디 내용 및 프로젝트 내용이 들어가는 공간입니다.
				스터디 내용 및 프로젝트 내용이 ...
			</S.PostText>

			<S.BottomBox>
				<S.RightBox>
					<S.Position>프론트엔드</S.Position>
					<S.Position>프론트엔드</S.Position>
					<S.Position>프론트엔드</S.Position>
				</S.RightBox>

				<S.Day>마감 10일 전</S.Day>
			</S.BottomBox>
		</S.Container>
	);
}

export default PostCard;
