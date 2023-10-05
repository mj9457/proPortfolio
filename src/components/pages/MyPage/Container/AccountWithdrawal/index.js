import { useEffect, useState } from 'react';
import * as AM from './index.styles';
import MYPAGEOPTION from 'constants/mypage';
import { Button } from 'components/@common/Button/index.styles';
import MESSAGE from 'constants/message';
import useApi from 'hooks/useApi';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';
import { Navigate } from 'react-router-dom';

function AccountWithdrawal() {
	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	const [del, setDel] = useRecoilState(userAtom);
	const navigate = Navigate();

	// 유저 정보 통신(GET)
	const {
		result: users,
		trigger: usersT,
		isLoading: usersL,
		error: usersE,
	} = useApi({
		path: `/users`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (users) {
			setUser(users);
		}
	}, [users]);

	const [Checked, setChecked] = useState(false);

	const checkHandler = () => {
		setChecked(!Checked);
	};

	const onDelete = async () => {
		try {
			await usersT({
				method: 'delete',
				shouldFetch: true,
			});
			// 추가된 부분
			setDel(prev => ({
				...prev,
				isAuth: false,
				nickName: '',
				role: '',
				_id: '',
				isLoading: false,
			}));

			alert(MESSAGE.MYPAGE.ACCOUNT.THANKS);
			navigate('/');
		} catch (err) {
			console.log(err);
		}
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
						탈퇴 후에는 아이디와 데이터 복구가 불가능합니다.
						신중하게 선택해 주세요.
					</span>
					<span>
						프로필 등록 정보, 멘토링 관련 정보, 스터디 / 프로젝트
						관련 정보 등 서비스 이용 기록이 모두 삭제되며, 삭제된
						데이터는 복구되지 않습니다. 필요한 데이터는 미리 백업을
						해두시기 바랍니다.
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
							$variant={'primary'}
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
							$variant={'cancel'}
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
