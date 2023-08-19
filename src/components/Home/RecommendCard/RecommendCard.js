import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 200px;
	height: 260px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid #d2d2d2;
	background: #fff;
	margin-left: 20px;
	margin-top: 32px;
`;

const NickName = styled.p`
	color: #151618;
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 16px;
`;
const Company = styled.p`
	color: #5e5f61;
	font-size: 14px;
	font-weight: 400;
`;
const Position = styled.p`
	color: #7d7d7d;
	font-size: 14px;
	font-weight: 400;
`;

const WorkingYear = styled.p`
	color: #7d7d7d;
	font-size: 14px;
	font-weight: 400;
`;
const ProfileImage = styled.img`
	width: 80px;
	height: 80px;
`;

RecommendCard.defaultProps = {
	profileimage: './assets/img/profile/profile.png',
	nickname: '마라탕',
	company: '네이버',
	position: '프론트엔드 개발',
	workingyear: 9,
};

export default function RecommendCard({
	profileimage,
	nickname,
	company,
	position,
	workingyear,
}) {
	return (
		<Container>
			<ProfileImage src={profileimage} alt="프로필 이미지" />
			<NickName>{nickname}</NickName>
			<Company>{company}</Company>
			<Position>{position}</Position>
			<WorkingYear>경력 {workingyear}년</WorkingYear>
		</Container>
	);
}
