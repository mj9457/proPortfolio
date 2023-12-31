import { useEffect, useState } from 'react';

import * as S from './index.styles';

function PortfolioCard(props) {
	const { mentor } = props;

	const [data, setData] = useState({});

	useEffect(() => {
		if (mentor) {
			setData(mentor);
		}
	}, [mentor]);

	return (
		<S.StyledLink to={`/portfolio/post/${data._id}`}>
			<S.PopularCard>
				<S.CoachNumBox>
					<span>
						<img src="assets/img/icons/fite.svg" /> 코칭{' '}
						{data.coachingCount}회
					</span>
				</S.CoachNumBox>

				<S.ImgBox>
					<img src={data.profileImageUrl} />
				</S.ImgBox>

				<S.ContentsBox>
					<div>
						<S.Name>{data.nickName}</S.Name>
					</div>

					<S.Contents>
						<div>
							<S.ContentSpan>{data.company}</S.ContentSpan>
						</div>
						<div>
							<S.ContentSpan>{data.position}</S.ContentSpan>
						</div>
						<div>
							<S.ContentSpan>경력 {data.career}년</S.ContentSpan>
						</div>
					</S.Contents>
				</S.ContentsBox>

				<S.TitleBox>
					&quot;<span>{data.title}</span>&quot;
				</S.TitleBox>
			</S.PopularCard>
		</S.StyledLink>
	);
}

export default PortfolioCard;
