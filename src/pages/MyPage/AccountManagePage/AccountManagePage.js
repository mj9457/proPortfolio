import AccountManage from '../../../components/pages/MyPage/RightContent/Mentor/AccountManage/AccountManage';
import * as AMP from './AccountManagePage.styles';

// 계정 설정 페이지
function AccountManagePage() {
	return (
		<AMP.Wrapper>
			<AMP.LightContent>
				<AccountManage></AccountManage>
			</AMP.LightContent>
		</AMP.Wrapper>
	);
}

export default AccountManagePage;
