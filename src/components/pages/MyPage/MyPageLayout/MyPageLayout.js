import { Navigate } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import useFooter from '../../../../hooks/useFooter';
import { useEffect, useState } from 'react';
import useApi from '../../../../hooks/useApi';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../../recoil/atoms/index.atom';
import {
	ApplyMentoringHistory,
	AccountManage,
	AccountWithdrawal,
	ProjectStudy,
	EditedPostHistory,
} from '../Container';
const mapContentToComponent = {
	receivedMentoringHistory: () => <ApplyMentoringHistory type={'mentor'} />, // 멘토링 신청 받은 내역(멘토)
	applyMentoringHistory: () => <ApplyMentoringHistory type={'user'} />, // 멘토링 신청 내역(유저)
	editedPostHistory: () => <EditedPostHistory />, // 멘토링 게시글 작성 내역(멘토)
	projectStudy: () => <ProjectStudy />, // 스터디/프로젝트 글 작성 내역(모두)
	accountManage: () => <AccountManage />, // 계정 관리(모두)
	accountWithdrawal: () => <AccountWithdrawal />, // 계정 탈퇴(모두)
};
function MyPageLayout() {
	// 마이페이지 내 모든 푸터 삭제
	useFooter();

	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (users) {
			setUser(users);
		}
	}, [users]);
	const { role = '', nickName = '' } = useRecoilValue(userAtom);
	const [content, setContent] = useState();

	// console.log(content);

	return (
		<>
			{!user && <Navigate to="/" replace={true} />}
			<M.Wrapper>
				<SideMenu user={{ role, nickName }} setContent={setContent} />
				{content && mapContentToComponent[content]()}
			</M.Wrapper>
		</>
	);
}

export default MyPageLayout;
