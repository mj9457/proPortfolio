import * as H from './Recommend.styles';
import { Link } from 'react-router-dom';

export default function RecommendCard(props) {
	return (
		<Link to={`/portfolio/post/${props.id}`}>
			<H.Container>
				<H.ProfileImage src={props.profileImageUrl}></H.ProfileImage>
				<H.NickName>{props.nickName}</H.NickName>
				<H.Company>{props.company}</H.Company>
				<H.Position>{props.position}</H.Position>
				<H.Career>경력 {props.career}년</H.Career>
			</H.Container>
		</Link>
	);
}
