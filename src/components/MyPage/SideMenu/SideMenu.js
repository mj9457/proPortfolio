import { useState } from 'react';
import * as SM from './SideMenu.styles';
import { useNavigate } from 'react-router-dom';

// 왼쪽 메뉴
function SideMenu({ userState }) {
	const navigate = useNavigate();

	// 버튼 클릭시 페이지 전환
	const handleClickButton = e => {
		const key = e.target.id;
		navigate(`/mypage/${key}`);
	};

	return (
		<SM.Wrapper>
			<SM.MainTitle>{userState}</SM.MainTitle>

			<SM.SubTitleWrapper>
				<SM.History>
					<button onClick={handleClickButton} id={'mentoringlist'}>
						멘토링 신청 받은 내역
					</button>
					<button onClick={handleClickButton} id={'writinghistory'}>
						글 작성 내역
					</button>
				</SM.History>
				<SM.Info>
					<button onClick={handleClickButton} id={'AccountManage'}>
						내 정보 관리
					</button>
					<button
						onClick={handleClickButton}
						id={'AccountWithdrawal'}
					>
						회원 탈퇴
					</button>
				</SM.Info>
			</SM.SubTitleWrapper>
		</SM.Wrapper>
	);
}

export default SideMenu;
