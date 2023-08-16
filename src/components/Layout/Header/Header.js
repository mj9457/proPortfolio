import * as H from './Header.styles';

function Header() {
	return (
		<H.Wrapper>
			<H.ImgWrapper>
				<H.Image src="./assets/img/logo/logo.svg" />
			</H.ImgWrapper>

			<H.NavWrapper>
				<H.NavBar>
					<span>홈</span>
					<span>포트폴리오 리뷰</span>
					<span>프로젝트 / 스터디 모집</span>
				</H.NavBar>

				<H.LoginBar>
					<span>로그인</span>
					<span>회원가입</span>
				</H.LoginBar>
			</H.NavWrapper>
		</H.Wrapper>
	);
}

export default Header;
