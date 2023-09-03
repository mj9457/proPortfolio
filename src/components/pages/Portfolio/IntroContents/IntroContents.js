import * as S from './IntroContents.styles';

function IntroContents({ post }) {
	const { name, career, position, company, description } = post;

	return (
		<>
			<S.IntroBox>
				<strong>1. 멘토 정보</strong>

				<S.IntroContents>
					<S.Box>
						<strong>이름</strong>
						<p>{name}</p>
					</S.Box>
					<S.Box>
						<strong>경력</strong>
						<p>{career}년차</p>
					</S.Box>
					<S.Box>
						<strong>직무</strong>
						<p>{position}</p>
					</S.Box>
					<S.Box>
						<strong>재직 중인 회사</strong>
						<p>{company}</p>
					</S.Box>
				</S.IntroContents>
			</S.IntroBox>

			<S.IntroBox>
				<strong>2. 소개 내용</strong>

				<pre>{description}</pre>
			</S.IntroBox>
		</>
	);
}

export default IntroContents;
