import * as S from './IntroContents.styles';

function IntroContents({ contents }) {
	const { name, career, job, company, content } = contents;

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
						<p>{job}</p>
					</S.Box>
					<S.Box>
						<strong>재직 중인 회사</strong>
						<p>{company}</p>
					</S.Box>
				</S.IntroContents>
			</S.IntroBox>

			<S.IntroBox>
				<strong>2. 소개 내용</strong>

				<span>{content}</span>
			</S.IntroBox>
		</>
	);
}

export default IntroContents;
