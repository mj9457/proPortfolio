import { useEffect } from 'react';
import * as SM from './SideMenu.styles';

// 왼쪽 메뉴
function SideMenu({ user, setContent, name }) {
	useEffect(() => {
		if (user.role) {
			setContent(
				user.role === 'mentor'
					? 'receivedMentoringHistory'
					: 'applyMentoringHistory',
			);
		}
	}, [user.role]);
	return (
		<SM.Wrapper>
			<SM.MainTitle>
				{user.role === 'mentor'
					? `${name.name} 멘토 님`
					: `${name.name} 님`}
			</SM.MainTitle>
			<SM.SubTitleWrapper>
				<SM.History>
					{user.role === 'mentor' && (
						<>
							<button
								onClick={() =>
									setContent('receivedMentoringHistory')
								}
							>
								멘토링 신청 받은 내역{' '}
							</button>
							<button
								onClick={() => setContent('editedPostHistory')}
							>
								글 작성 내역{' '}
							</button>
						</>
					)}
					{user.role === 'user' && (
						<>
							<button
								onClick={() =>
									setContent('applyMentoringHistory')
								}
							>
								멘토링 신청 내역
							</button>
							<button onClick={() => setContent('projectStudy')}>
								프로젝트 / 스터디
							</button>
						</>
					)}
				</SM.History>
				<SM.Info>
					<button onClick={() => setContent('accountManage')}>
						내 정보 관리
					</button>
					<button onClick={() => setContent('accountWithdrawal')}>
						회원 탈퇴
					</button>
				</SM.Info>
			</SM.SubTitleWrapper>
		</SM.Wrapper>
	);
}

export default SideMenu;
