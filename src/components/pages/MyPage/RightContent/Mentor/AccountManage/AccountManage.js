import { useEffect, useState } from 'react';
import * as AM from './AccountManage.styles';
import axios from 'axios';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import { Button } from '../../../../../@common/Button/Button.styles';
import { useForm } from 'react-hook-form';
import useApi from '../../../../../../hooks/useApi';

function AccountManage() {
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

	// 직무 담을 state
	const [position, setPosition] = useState([]);
	const {
		result: positions,
		trigger: positionsT,
		isLoading: positionsL,
		error: positionsE,
	} = useApi({
		path: '/position',
		shouldFetch: true,
	});

	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log(user);
	}, [users]);

	useEffect(() => {
		if (positions && positions.length > 0) {
			setPosition([...positions]);
		}
		console.log(position);
	}, [positions]);

	//
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		console.log(errors.currentPassword?.type);
	}, [errors.currentPassword?.type]);

	// post
	const submitHandler = async data => {
		if (data.nickName === '') {
			data.nickName = user.nickName;
		}

		if (data.position === 'default' || data.position === '') {
			data.position = user.position;
		}

		try {
			const postData = {
				...user,
				...data,
			};
			await usersT({ method: 'put', data: { postData } });
			alert('수정되었습니다.');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AM.DetailOnboradWrapper>
			<AM.MainTitleBox>
				<AM.MainTitle>{MYPAGEOPTION.ACCOUNT.MANAGE.TITLE}</AM.MainTitle>
			</AM.MainTitleBox>
			<AM.ContentBox>
				<AM.UserCard>
					<AM.UserCardImg>
						<img src={user.profileImage} alt="프로필 사진"></img>
						<span>프로필 수정</span>
					</AM.UserCardImg>
					<AM.UserCardInfo>
						<AM.UserName>{user.name}</AM.UserName>
						<AM.UserEmail>{user.email}</AM.UserEmail>
					</AM.UserCardInfo>
				</AM.UserCard>

				<form onSubmit={handleSubmit(submitHandler)}>
					<AM.SubTitleBox>
						<AM.SubTitle id="nickName">닉네임</AM.SubTitle>
						<input
							defaultValue={user.nickName}
							label="#nickName"
							placeholder={'닉네임을 입력해 주세요.'}
							{...register('nickName')}
						/>
					</AM.SubTitleBox>
					<AM.SubTitleBox>
						<AM.SubTitle id="position">직무</AM.SubTitle>
						<select
							defaultValue={user.position}
							{...register('position')}
						>
							<option value={'default'} hidden>
								직무를 선택해 주세요.
							</option>
							{position.map((el, idx) => (
								<option value={el.name} key={idx}>
									{el.name}
								</option>
							))}
						</select>
					</AM.SubTitleBox>
					{user.role === 'mentor' ? (
						<>
							<AM.SubTitleBox>
								<AM.SubTitle id="career">경력</AM.SubTitle>
								<input
									type="number"
									defaultValue={user.career}
									placeholder={'경력 년수'}
									min={1}
									max={99}
									{...register('career', { min: 1, max: 99 })}
								/>
							</AM.SubTitleBox>
							<AM.SubTitleBox>
								<AM.SubTitle id="company">
									재직중인 회사
								</AM.SubTitle>
								<input
									defaultValue={user.company}
									placeholder={'재직중인 회사'}
									{...register('company')}
								/>
							</AM.SubTitleBox>
						</>
					) : undefined}

					{/* <AM.SubTitleBox>
						<AM.SubTitle>변경 확인</AM.SubTitle>
						<input
							type="text"
							placeholder="변경하려면 아무거나 작성해주세요."
							{...register('confirm', { required: true })}
						/>
						{errors.confirm && (
							<p>정말 변경하려면 아무거나 작성해주세요.</p>
						)}
					</AM.SubTitleBox> */}
					<Button
						disabled={''}
						variant={'primary'}
						shape={'default'}
						size={'full'}
						type="submit"
					>
						수정
					</Button>
				</form>
			</AM.ContentBox>
		</AM.DetailOnboradWrapper>
	);
}

export default AccountManage;
