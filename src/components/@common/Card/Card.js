import { useEffect, useState } from 'react';

import * as S from './Card.styles';
import useApi from '../../../hooks/useApi';

function MentorCard(props) {
	const { variant, url } = props;

	const [mentorData, setMentorData] = useState([]);

	const { result, trigger, isLoading, error } = useApi({
		path: `${url}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result && result.length > 0) {
			setMentorData([...result]);
			console.log(error);
		}
	}, [result]);

	return (
		<>
			{isLoading && <h2>로딩 중입니다.</h2>}
			{mentorData.map((mentor, idx) => (
				<S.PopularCard
					variant={variant}
					href={`/portfolio/post/${mentor._id}`}
					key={idx}
				>
					<S.CoachNumBox>
						<span>👊 코칭 {mentor.coachingCount}회</span>
					</S.CoachNumBox>

					<S.ImgBox>
						<img
							src={
								!mentor.profileImageUrl
									? '/assets/img/profile/profileImage.png'
									: mentor.profileImageUrl
							}
						/>
					</S.ImgBox>

					<S.ContentsBox>
						<div>
							<S.Name>{mentor.nickName}</S.Name>
						</div>

						<S.Contents>
							<div>
								<S.ContentSpan>{mentor.company}</S.ContentSpan>
							</div>
							<div>
								<S.ContentSpan>{mentor.position}</S.ContentSpan>
							</div>
							<div>
								<S.ContentSpan>
									경력 {mentor.career}년
								</S.ContentSpan>
							</div>
						</S.Contents>
					</S.ContentsBox>

					<S.TitleBox>
						&quot;<span>{mentor.title}</span>&quot;
					</S.TitleBox>
				</S.PopularCard>
			))}
		</>
	);
}

export default MentorCard;
