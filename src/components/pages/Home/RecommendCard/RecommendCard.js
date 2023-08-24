import * as H from './Recommend.styles';

RecommendCard.defaultProps = {
	profileimage: './assets/img/profile/profile.png',
};

export default function RecommendCard(props) {
	return (
		<H.Container href={`/portfolio/post/${props.postId}`}>
			<H.ProfileImage src={props.profileimage} alt="프로필 이미지" />
			<H.NickName>{props.name}</H.NickName>
			<H.Company>{props.company}</H.Company>
			<H.Position>{props.position}</H.Position>
			<H.Career>경력 {props.career}년</H.Career>
		</H.Container>
	);
}
