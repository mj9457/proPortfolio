import * as H from './Recommend.styles';

export default function RecommendCard(props) {
	return (
		<H.Container href={`/portfolio/post/${props.postId}`}>
			<H.ProfileImage
				src={
					!props.profileImageUrl
						? '/assets/img/profile/profileImage.png'
						: props.profileImageUrl
				}
				alt="프로필 이미지"
			/>
			<H.NickName>{props.nickName}</H.NickName>
			<H.Company>{props.company}</H.Company>
			<H.Position>{props.position}</H.Position>
			<H.Career>경력 {props.career}년</H.Career>
		</H.Container>
	);
}
