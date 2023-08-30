import * as SM from './SideMenu.styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApi from '../../../../hooks/useApi';

// 왼쪽 메뉴
function SideMenu({ userState }) {
	const navigate = useNavigate();

	// 버튼 클릭시 페이지 전환
	const handleClickButton = path => {
		navigate(`/mypage/${[path]}`);
	};

	// 유저 정보 담을 state
	const [user, setUser] = useState({});

	// 유저 정보 통신(GET)
	const {
		result: users,
		trigger: usersT,
		isLoading: usersL,
		error: usersE,
	} = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	return (
		<SM.Wrapper>
			<SM.MainTitle>{userState}</SM.MainTitle>

			<SM.SubTitleWrapper>
				<SM.History>
					<button onClick={() => handleClickButton('mentoringlist')}>
						{users.role === 'mentor'
							? '멘토링 신청 받은 내역'
							: '멘토링 신청 내역'}
					</button>
					{users.role === 'mentor' ? (
						<button
							onClick={() =>
								handleClickButton('mentoringpostlist')
							}
						>
							멘토링 신청 게시물 관리
						</button>
					) : undefined}
					<button onClick={() => handleClickButton('postlist')}>
						프로젝트 / 스터디 게시물 관리
					</button>
				</SM.History>
				<SM.Info>
					<button onClick={() => handleClickButton('AccountManage')}>
						내 정보 관리
					</button>
					<button
						onClick={() => handleClickButton('AccountWithdrawal')}
					>
						회원 탈퇴
					</button>
				</SM.Info>
			</SM.SubTitleWrapper>
		</SM.Wrapper>
	);
}

export default SideMenu;
