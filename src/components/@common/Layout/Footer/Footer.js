import * as S from './Footer.styles';

function Footer() {
	return (
		<>
			<S.Wrapper>
				<S.Container>
					<S.IntroWrapper>
						<S.Image src="./assets/img/logo/logo.svg" />

						<S.Intro>
							<span>최고의 멘토들의 코칭을 경험해 보세요.</span>
							<span>
								Experience the Coaching of the Best Mentors.
							</span>
						</S.Intro>
					</S.IntroWrapper>

					<S.Line></S.Line>

					<S.IncIntroWrapper>
						<span>@ 2023 포폴, Inc. All rights reserved.</span>
						<div>
							<span>
								대표자 이름: 김현규 | 대표 번호: 02-0814-1999
							</span>
							<span>
								(주) 포폴 | 사업자 등록 번호: 127-16-91112 |
								서울특별시 성동구 아차산로17길 48 포폴
							</span>
						</div>
					</S.IncIntroWrapper>
				</S.Container>
			</S.Wrapper>
		</>
	);
}

export default Footer;
