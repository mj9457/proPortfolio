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
	const [isMentor, setIsMentor] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const tokenStatus = checkToken();
		setIsLoggedIn(tokenStatus);
	}, []);

	const { result, trigger } = useApi({
		path: isLoggedIn ? '/user' : '', // 유저인지 멘토인지 확인할 수 있는 api 필요
		shouldFetch: isLoggedIn,
	});

	useEffect(() => {
		if (result) {
			const mentor = result.role === 'user';

			if (mentor) setIsMentor(true);
			else setIsMentor(false);
		}
	}, [result]);

	const handleSignupClick = () => {
		setOpenModal(true);
	};

	const handleSignupClose = () => {
		setOpenModal(false);
	};

	const handleLogoutClick = () => {
		trigger({ path: '/auth/logout', method: 'post' })
			.then(() => {
				setIsLoggedIn(false);
				alert('로그아웃이 완료되었습니다.');
				navigate(0);
			})
			.catch(error => {
				console.error('로그아웃 중 오류 발생:', error);
			});
	};

	const handleMentorApplyClick = () => {
		if (!isLoggedIn) {
			alert('로그인 후 이용 가능합니다.');
			setOpenModal(true);
		} else {
			navigate('/usermentorapply');
		}
	};

	return (
		<S.Header>
			<S.ImgBox href="/">
				<S.Image src="/assets/img/logo/logo.svg" />
			</S.ImgBox>

			<S.NavBox>
				<S.NavBar>
					<S.NavLinkItem to="/" activeclassname="active">
						홈
					</S.NavLinkItem>
					<S.NavLinkItem to="/portfolio" activeclassname="active">
						포트폴리오 리뷰
					</S.NavLinkItem>
					<S.NavLinkItem to="/study" activeclassname="active">
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
							{isMentor && (
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
							)}
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
								onClick={handleMentorApplyClick}
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
