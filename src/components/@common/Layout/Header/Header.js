import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken, clearToken } from '../../../../utils/cookie';

import * as S from './Header.styles';

import SignupModal from '../../../pages/SignUp/Modal/SignUpModal';
import Button from '../../Button/Button';

function Header() {
	const [openModal, setOpenModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());
	const navigate = useNavigate();

	const handleTokenChange = () => {
		const tokenStatus = checkToken();
		setIsLoggedIn(tokenStatus);

		console.log('isLoggedIn updated:', tokenStatus);
	};

	useEffect(() => {
		handleTokenChange();
	}, [isLoggedIn]);

	const handleSignupClick = () => {
		setOpenModal(true);
	};
	const handleSignupClose = () => {
		setOpenModal(false);
	};

	const handleLogoutClick = () => {
		clearToken();
		handleTokenChange();
		navigate('/');
	};

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
					{isLoggedIn ? (
						<>
							<a onClick={handleLogoutClick}>로그아웃</a>
							<a href="/mypage">마이페이지</a>
							<a href="#">
								<img
									src="/assets/img/icons/bell.png"
									alt="알림"
								/>
							</a>
							<Button
								variant={'primary'}
								shape={'default'}
								size={'small'}
								onClick={() => {
									navigate('/usermentorapply');
								}}
							>
								멘토 전환
							</Button>
						</>
					) : (
						<>
							<a onClick={handleSignupClick}>로그인 / 회원가입</a>
							<a href="#">
								<img
									src="/assets/img/icons/bell.png"
									alt="알림"
								/>
							</a>
							<Button
								variant={'primary'}
								shape={'default'}
								size={'small'}
								onClick={() => {
									navigate('/usermentorapply');
								}}
							>
								멘토 전환
							</Button>
						</>
					)}
				</S.LoginBar>
			</S.NavBox>
			{openModal && <SignupModal onClose={handleSignupClose} />}
		</S.Header>
	);
}

export default Header;
