import React, { useState } from 'react';
import * as S from './Header.styles';
import SignupModal from '../../../pages/SignUp/Modal/SignUpModal';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();

	function handleSignupClick() {
		setOpenModal(true);
	}
	function handleSignupClose() {
		setOpenModal(false);
	}

	return (
		<S.Header>
			<S.ImgBox href="/">
				<S.Image src="/assets/img/logo/logo.svg" />
			</S.ImgBox>

			<S.NavBox>
				<S.NavBar>
					<a href="/">홈</a>
					<a href="/portfolio">포트폴리오 리뷰</a>
					<a href="/study">프로젝트 / 스터디 모집</a>
				</S.NavBar>

				<S.LoginBar>
					<a href="/login">로그아웃</a>
					<a onClick={handleSignupClick}>로그인 / 회원가입</a>
					<S.Button
						onClick={() => {
							navigate('/usermentorapply');
						}}
					>
						멘토 전환
					</S.Button>
				</S.LoginBar>
			</S.NavBox>
			{openModal && <SignupModal onClose={handleSignupClose} />}
		</S.Header>
	);
}

export default Header;
