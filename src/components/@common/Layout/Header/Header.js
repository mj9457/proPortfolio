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

	// 알림 표시 상태
	const [noti, setNoti] = useState(false);
	// 알림 표시 창 상태
	const [notiBox, setNotiBox] = useState(false);
	// 알림 데이터
	const [notiData, setNotiData] = useState([]);

	useEffect(() => {
		const tokenStatus = checkToken();
		setIsLoggedIn(tokenStatus);
	}, []);

	const { result, trigger } = useApi({
		path: isLoggedIn ? '/user' : '', // 유저인지 멘토인지 확인할 수 있는 api 필요
		shouldFetch: isLoggedIn,
	});
	const { result: notiResult, trigger: notiTrigger } = useApi({
		path: '/notification',
		shouldFetch: isLoggedIn && true,
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
		// console.log(notiResult);
		if (isLoggedIn) {
			if (notiResult?.notifications?.length > 0) {
				setNotiData(notiResult.notifications);
				// if (notiResult?.notifications?.length === 0) {
				// }
				setNoti(true);
			}
			if (notiResult?.notifications?.length === 0) {
				setNoti(false);
			}

			const fetchNotificationData = () => {
				notiTrigger({});
			};
			// 1분마다 호출
			const intervalId = setInterval(fetchNotificationData, 60000); // 60000 밀리초 = 1분

			// 컴포넌트가 언마운트되면 타이머 해제
			return () => clearInterval(intervalId);
		}
	}, [notiResult, notiData]);

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
						스터디 / 프로젝트 모집
					</S.NavLinkItem>
				</S.NavBar>
				<S.LoginBar>
					{isLoggedIn ? (
						<>
							<a onClick={handleLogoutClick}>로그아웃</a>
							<a href="/mypage">마이페이지</a>
							<a onClick={notiHandler}>
								<img
									src={noti ? dotBellImg : bellImg}
									// src="/assets/img/icons/bell.png"
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
							{notiBox ? (
								<S.notiWrap>
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
											</S.notiBox>
										))
									) : (
										<S.notiBox>
											<span>알림이 없습니다!</span>
										</S.notiBox>
									)}
								</S.notiWrap>
							) : (
								''
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
