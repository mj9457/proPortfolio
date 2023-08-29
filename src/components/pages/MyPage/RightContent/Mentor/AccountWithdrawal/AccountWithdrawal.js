import { useState } from 'react';
import * as AM from './AccountWithdrawal.styles';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userData } from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import { Button } from '../../../../../@common/Button/Button.styles';
import MESSAGE from '../../../../../../constants/message';

function AccountWithdrawal() {
	const user = useRecoilValue(userData);
	const [Checked, setChecked] = useState(false);

	const checkHandler = () => {
		setChecked(!Checked);
	};

	const onDelete = () => {
		console.log(user);
		async function deleteUser() {
			try {
				const response = await axios.delete(
					`https://jsonplaceholder.typicode.com/posts/:${user.id}`,
				);
				console.log(response);
				alert(MESSAGE.MYPAGE.ACCOUNT.THANKS);
			} catch (err) {
				console.log(err);
			}
		}
		deleteUser();
	};

	return (
		<AM.DetailOnboradWrapper>
			<AM.MainTitleBox>
				<AM.MainTitle>
					{MYPAGEOPTION.ACCOUNT.WITHDRAWER.TITLE}
				</AM.MainTitle>
			</AM.MainTitleBox>
			<AM.ContentBox>
				<AM.SubTitleBox>
					<AM.SubTitle>
						회원 탈퇴 전, 안내 사항을 꼭 확인해 주세요.
					</AM.SubTitle>
				</AM.SubTitleBox>
				<AM.SubTitleBox>
					<span>
						탈퇴 후에는 아이디와 데이터 복구가 불가능합니다.신중하게
						선택해주세요.
					</span>
					<span>
						프로필 등록 정보, 입사지원정보, 입사지원 현황 등 취업에
						필요한서비스 이용 기록이 모두 삭제되며, 삭제된 데이터는
						복구되지 않습니다. 필요한 데이터는 미리 백업을 해두시기
						바랍니다.
					</span>
				</AM.SubTitleBox>

				<AM.CheckboxWrap>
					<input
						type="checkbox"
						id="check"
						checked={Checked}
						onChange={checkHandler}
					/>
					<label htmlFor="check">
						{MESSAGE.MYPAGE.ACCOUNT.AGREE}
					</label>
				</AM.CheckboxWrap>

				<AM.ButtonBox>
					{Checked ? (
						<Button
							variant={'primary'}
							size={'full'}
							shape={'default'}
							opacity={'0.3'}
							onClick={onDelete}
						>
							{MYPAGEOPTION.ACCOUNT.WITHDRAWER.BUTTONTITLE}
						</Button>
					) : (
						<Button
							disabled
							variant={'cancel'}
							size={'full'}
							shape={'default'}
						>
							{MYPAGEOPTION.ACCOUNT.WITHDRAWER.BUTTONTITLE}
						</Button>
					)}
				</AM.ButtonBox>
			</AM.ContentBox>
		</AM.DetailOnboradWrapper>
	);
}

export default AccountWithdrawal;
