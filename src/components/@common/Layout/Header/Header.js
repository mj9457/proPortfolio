import * as S from './Header.styles';

function Header() {
	return (
		<S.Header>
			<S.ImgBox href="/">
				<S.Image src="./assets/img/logo/logo.svg" />
			</S.ImgBox>

			<S.NavBox>
				<S.NavBar>
					<a href="/">홈</a>
					<a href="/portfolio">포트폴리오 리뷰</a>
					<a href="/study">프로젝트 / 스터디 모집</a>
				</S.NavBar>

				<S.LoginBar>
					<a href="/signup">로그인</a>
					<a href="/register">회원가입</a>
					<S.Button>멘토 전환</S.Button>
				</S.LoginBar>
			</S.NavBox>
		</S.Header>
	);
}

export default Header;
