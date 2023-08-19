import * as S from './Header.styles';

function Header() {
	return (
		<S.Wrapper>
			<S.ImgWrapper>
				<S.Image src="./assets/img/logo/logo.svg" />
			</S.ImgWrapper>

			<S.NavWrapper>
				<S.NavBar>
					<span>홈</span>
					<span>포트폴리오 리뷰</span>
					<span>프로젝트 / 스터디 모집</span>
				</S.NavBar>

				<S.LoginBar>
					<span>로그인</span>
					<span>회원가입</span>
				</S.LoginBar>
			</S.NavWrapper>
		</S.Wrapper>
	);
}

export default Header;
