import * as H from './Recommend.styles';

export default function RecommendCard(props) {
	return (
		<H.Container href={`/portfolio/post/${props.id}`}>
			<H.ProfileImage src={props.profileImageUrl}></H.ProfileImage>
			<H.NickName>{props.nickName}</H.NickName>
			<H.Company>{props.company}</H.Company>
			<H.Position>{props.position}</H.Position>
			<H.Career>경력 {props.career}년</H.Career>
		</H.Container>
	);
}
