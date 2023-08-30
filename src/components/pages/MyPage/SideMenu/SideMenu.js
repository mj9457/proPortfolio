import * as SM from './SideMenu.styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApi from '../../../../hooks/useApi';

// 왼쪽 메뉴
function SideMenu() {
	const navigate = useNavigate();

	// 버튼 클릭시 페이지 전환
	const handleClickButton = path => {
		navigate(`/mypage/${[path]}`);
	};

	// 유저 정보 담을 state
	const [user, setUser] = useState({});

	// 유저 정보 불러오기
	const { result: users } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (users) {
			setUser(users);
		}
	}, [users]);

	return (
		<SM.Wrapper>
			<SM.MainTitle>
				{user.role === 'mentor'
					? `${user.name} 멘토님`
					: `${user.name} 님`}
			</SM.MainTitle>
			<SM.SubTitleWrapper>
				<SM.History>
					<button onClick={() => handleClickButton('mentoringlist')}>
						{user.role === 'mentor'
							? '멘토링 신청 받은 내역'
							: '멘토링 신청 내역'}
					</button>
					{user.role === 'mentor' ? (
						<button
							onClick={() =>
								handleClickButton('mentoringpostlist')
							}
						>
							멘토링 작성 내역
						</button>
					) : undefined}
					<button onClick={() => handleClickButton('postlist')}>
						프로젝트 / 스터디
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
