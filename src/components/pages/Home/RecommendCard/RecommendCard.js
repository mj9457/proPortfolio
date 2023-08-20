import * as H from './Recommend.styles';

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
	link,
}) {
	return (
		<H.Container href={link}>
			<H.ProfileImage src={profileimage} alt="프로필 이미지" />
			<H.NickName>{nickname}</H.NickName>
			<H.Company>{company}</H.Company>
			<H.Position>{position}</H.Position>
			<H.Career>경력 {career}년</H.Career>
		</H.Container>
	);
}
