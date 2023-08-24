import * as SM from './SideMenu.styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userData } from '../../../../recoil/atoms/myPage/myPage.atom';

// 왼쪽 메뉴
function SideMenu({ userState }) {
	const navigate = useNavigate();

	// 버튼 클릭시 페이지 전환
	const handleClickButton = path => {
		navigate(`/mypage/${[path]}`);
	};

	const user = useRecoilValue(userData);
	// 데이터 정상적으로 불러와지면 삭제
	const newUser = { ...user };
	newUser.role = 'mentor';

	return (
		<SM.Wrapper>
			<SM.MainTitle>{userState}</SM.MainTitle>

			<SM.SubTitleWrapper>
				<SM.History>
					<button onClick={() => handleClickButton('mentoringlist')}>
						{newUser.role === 'mentor'
							? '멘토링 신청 받은 내역'
							: '멘토링 신청 내역'}
					</button>
					<button onClick={() => handleClickButton('postlist')}>
						게시물 작성 내역
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
