import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../../../utils/cookie';
import * as S from './Header.styles';
import SignupModal from '../../../pages/SignUp/Modal/SignUpModal';
import Button from '../../Button/Button';
import useApi from '../../../../hooks/useApi';

function Header() {
	const [openModal, setOpenModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());
	const navigate = useNavigate();

	const handleTokenChange = () => {
		const tokenStatus = checkToken();
		setIsLoggedIn(tokenStatus);
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

	const { result, trigger, isLoading, error } = useApi({});

	const handleLogoutClick = async () => {
		try {
			trigger({ path: '/auth/logout', method: 'post' });

			setIsLoggedIn(false);
			window.alert('로그아웃 되었습니다 ');
			window.location.reload();
			navigate('/');
		} catch (error) {
			console.error('로그아웃 오류:', error);
		}
	};

	return (
		<S.Header>
			<S.ImgBox href="/">
				<S.Image src="/assets/img/logo/logo.svg" />
			</S.ImgBox>

			<S.NavBox>
				<S.NavBar>
					<S.NavLinkItem to="/" activeClassName="active">
						홈
					</S.NavLinkItem>
					<S.NavLinkItem to="/portfolio" activeClassName="active">
						포트폴리오 리뷰
					</S.NavLinkItem>
					<S.NavLinkItem to="/study" activeClassName="active">
						프로젝트 / 스터디 모집
					</S.NavLinkItem>
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
