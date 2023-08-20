import * as S from './IntroContents.styles';

function IntroContents() {
	return (
		<>
			<S.IntroBox>
				<strong>1. 멘토 정보</strong>

				<S.IntroContents>
					<S.Box>
						<strong>이름</strong>
						<p>김민수</p>
					</S.Box>
					<S.Box>
						<strong>경력</strong>
						<p>15년차</p>
					</S.Box>
					<S.Box>
						<strong>직무</strong>
						<p>백엔드 개발</p>
					</S.Box>
					<S.Box>
						<strong>재직 중인 회사</strong>
						<p>Naver</p>
					</S.Box>
				</S.IntroContents>
			</S.IntroBox>

			<S.IntroBox>
				<strong>2. 소개 내용</strong>

				<span>
					안녕하세요! 저희 기깔나는 사람들이라는 팀을 구성하여 실제
					초기 스타트업(서비스 기업)에서 사용하는 기술 스택과
					채용하고자 하는 인력이 갖고자 하는 기술 스택을 이용하여
					프로젝트를 진행하고, 공부하는 모임 입니다. 사이드 프로젝트를
					하는 이유는 회사에 취업하거나, 이직하기 위해 하는 이유가
					가장 클 것인데, 단순히 기능에 대해서만 개발만 하고 끝내는
					그런 사이드 프로젝트 보다 실제로 회사에서 고민하는 부분
					그리고, 정보 보안적인 부분 등을 경험하며 공부할 수 있는
					환경을 구성하고자 만들어진 모임 입니다. 회의는 매 월 첫째주
					토요일을 기준으로 오프라인, 온라인으로 유동적으로 진행하고
					있습니다. 대면 모임의 경우 서울에서 진행하고 있습니다. 또한,
					온라인/오프라인 모임 모두 참석 가능하셔야 합니다.
				</span>
			</S.IntroBox>
		</>
	);
}

export default IntroContents;
