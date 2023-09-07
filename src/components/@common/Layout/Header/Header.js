import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkToken } from '../../../../utils/cookie';
import * as S from './Header.styles';
import SignupModal from '../../../pages/SignUp/Modal/SignUpModal';
import Button from '../../Button/Button';
import useApi from '../../../../hooks/useApi';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../../recoil/atoms/index.atom';

function Header() {
	const [openModal, setOpenModal] = useState(false);
	const { isLoading, isAuth, role } = useRecoilValue(userAtom);
	const [isLoggedIn, setIsLoggedIn] = useState(checkToken());
	const navigate = useNavigate();

	// 알림 표시 상태
	const [noti, setNoti] = useState(false);
	// 알림 표시 창 상태
	const [notiBox, setNotiBox] = useState(false);
	// 알림 데이터
	const [notiData, setNotiData] = useState([]);

	const { trigger: logoutTrigger } = useApi({
		path: '/auth/logout',
		shouldFetch: false,
	});

	const { result: notiResult, trigger: notiTrigger } = useApi({
		path: '/notification',
		shouldFetch: isLoggedIn,
	});
	const bellImg = '/assets/img/icons/bell.png';
	const dotBellImg = '/assets/img/icons/dotbell.png';
	// 알림 아이콘 클릭
	const notiHandler = () => {
		// toggle
		setNotiBox(!notiBox);
		// if(notiData.)
	};
	useEffect(() => {
		if (isLoggedIn) {
			if (notiResult?.notifications?.length > 0) {
				setNotiData(notiResult.notifications);

				setNoti(true);
			}
			if (notiResult?.notifications?.length === 0) {
				setNoti(false);
			}

			const fetchNotificationData = () => {
				notiTrigger({
					applyResult: true,
				});
			};
			// 1분마다 호출
			const intervalId = setInterval(fetchNotificationData, 60000); // 60000 밀리초 = 1분

			// 컴포넌트가 언마운트되면 타이머 해제
			return () => clearInterval(intervalId);
		}
	}, [notiResult, notiData, isAuth]);

	const handleSignupClick = () => {
		setOpenModal(true);
	};

	const handleSignupClose = () => {
		setOpenModal(false);
	};

	const handleLogoutClick = async () => {
		try {
			// await trigger({ path: '/auth/logout' });
			// setIsLoggedIn(false);
			// console.log('handleLogoutClick');
			await logoutTrigger({});
			alert('로그아웃이 완료되었습니다.');
			navigate(0);
		} catch (error) {
			alert('로그아웃이 실패 하였습니다.');
		}
	};

	const handleMentorApplyClick = () => {
		if (!isAuth) {
			alert('로그인 후 이용 가능합니다.');
			setOpenModal(true);
		} else {
			navigate('/usermentorapply');
		}
	};
	const notiClickHandler = async (value, notiId, studyId) => {
		switch (value) {
			case '멘토링 신청 요청이 왔습니다!':
			case 'Your mentoring request has been completed.':
			case '멘토링 신청서 상태가 변경되었습니다.':
			case 'Your mentoring request has been rejectd.':
				// 해당 알람 삭제 후
				// 마이페이지로 이동
				await notiTrigger({
					path: `/notification/${notiId}`,
					method: 'delete',
				});
				await notiTrigger({
					path: '/notification',
					method: 'get',
					applyResult: true,
				});
				// window.location.replace('/mypage');
				navigate('/mypage');

				break;
			case '멘토 전환 신청 상태가 변경되었습니다':
				await notiTrigger({
					path: `/notification/${notiId}`,
					method: 'delete',
				});
				window.location.reload();

				break;
			case '프로젝트/스터디 게시글에 새로운 댓글이 작성되었습니다.':
				await notiTrigger({
					path: `/notification/${notiId}`,
					method: 'delete',
				});
				await notiTrigger({
					path: '/notification',
					method: 'get',
					applyResult: true,
				});

				// window.location.replace('/mypage');
				navigate(`/study/detail/${studyId}`);

				break;

			default:
				break;
		}
		// console.log('+++++++++++', notiResult);
		if (notiData.length === 0) {
			setNoti(false);
		}

		setNotiData(prev => {
			return prev.filter(notification => notification._id !== notiId);
		});

		setNotiBox(!notiBox);
	};

	return (
		<S.Header>
			<Link to="/">
				<S.ImgBox>
					<S.Image src="/assets/img/logo/logo.svg" />
				</S.ImgBox>
			</Link>
			<S.NavBox>
				<S.NavBar>
					<S.NavLinkItem to="/" activeclassname="active">
						홈
					</S.NavLinkItem>
					<S.NavLinkItem to="/portfolio" activeclassname="active">
						포트폴리오 리뷰
					</S.NavLinkItem>
					<S.NavLinkItem to="/study" activeclassname="active">
						스터디 / 프로젝트 모집
					</S.NavLinkItem>
				</S.NavBar>
				<S.LoginBar>
					{!isLoading && isAuth && (
						<>
							<a onClick={handleLogoutClick}>로그아웃</a>
							<S.NavLinkItem
								to="/mypage"
								activeclassname="active"
							>
								마이페이지
							</S.NavLinkItem>
							{role === 'admin' && (
								<Link to="/admin/user">관리자 페이지</Link>
							)}
							<a onClick={notiHandler}>
								<img
									src={noti ? dotBellImg : bellImg}
									// src="/assets/img/icons/bell.png"
									alt="알림"
								/>
							</a>
							{role === 'user' && (
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
							{notiBox ? (
								<S.notiWrap>
									<S.notiTitle>
										<span>🕊️ 알림이 왔어요 !</span>
									</S.notiTitle>
									{notiData.length !== 0 ? (
										notiData?.map((item, index) => (
											<S.notiBox
												key={index}
												onClick={() => {
													notiClickHandler(
														item.content,
														item._id,
														item.projectStudyId,
													);
												}}
											>
												<span>{item.content}</span>
												<span>2020-12-10</span>
											</S.notiBox>
										))
									) : (
										<S.notiNone>
											<span>지금은 알림이 없어요.</span>
										</S.notiNone>
									)}
								</S.notiWrap>
							) : (
								''
							)}
						</>
					)}
					{!isLoading && !isAuth && (
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
