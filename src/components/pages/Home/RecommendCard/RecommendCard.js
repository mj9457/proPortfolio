import * from './Recommend.styles';

RecommendCard.defaultProps = {
	profileimage: './assets/img/profile/profile.png',
	nickname: '마라탕',
	company: '네이버',
	position: '프론트엔드 개발',
	career: 9,
};

export default function RecommendCard({
	profileimage,
	nickname,
	company,
	position,
	career,
}) {
	return (
		<>
			<Container>
				<ProfileImage src={profileimage} alt="프로필 이미지" />
				<NickName>{nickname}</NickName>
				<Company>{company}</Company>
				<Position>{position}</Position>
				<Career>경력 {career}년</Career>
			</Container>
		</>
	);
}
