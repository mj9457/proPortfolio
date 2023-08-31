import { useEffect, useRef, useState } from 'react';
import * as AM from './AccountManage.styles';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import { Button } from '../../../../../@common/Button/Button.styles';
import { useForm } from 'react-hook-form';
import useApi from '../../../../../../hooks/useApi';
import MESSAGE from '../../../../../../constants/message';
import AWS from 'aws-sdk';

function AccountManage() {
	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result: users, trigger: usersT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 직무 담을 state
	const [position, setPosition] = useState([]);
	const { result: positions } = useApi({
		path: '/position',
		shouldFetch: true,
	});

	// 유저 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (users) {
			setUser(users);
		}
		console.log(user);
	}, [users]);

	// 포지션 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (positions && positions.length > 0) {
			setPosition([...positions]);
		}
		console.log(position);
	}, [positions]);

	// 계정 관리 폼
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// 유저 정보 변경
	const submitHandler = async data => {
		// 닉네임이 변하지 않았다면 기존의 닉네임으로 설정
		if (data.nickName === '') {
			data.nickName = user.nickName;
		}

		// 포지션이 변하지 않았다면 기존의 포지션으로 설정
		if (data.position === 'default' || data.position === '') {
			data.position = user.position;
		}

		try {
			const putData = {
				...user,
				...data,
			};
			await usersT({ method: 'put', data: putData, shouldFetch: true });
			alert(MESSAGE.MYPAGE.EDIT.COMPLETE);
		} catch (error) {
			console.error(error);
		}
	};

	// const [selectedFile, setSelectedFile] = useState(null);
	// const fileInputRef = useRef(null);

	// AWS.config.update({
	// 	region: process.env.REACT_APP_REGION,
	// 	accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
	// 	secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
	// });

	// const fileUploadHandler = () => {
	// 	if (fileInputRef.current) {
	// 		fileInputRef.current.click();
	// 	}
	// };
	// const handleFileChange = e => {
	// 	const file = e.target.files[0];
	// 	const fileExt = file?.name.split('.').pop();
	// 	if (!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(fileExt)) {
	// 		if (file === undefined) {
	// 			return;
	// 		}
	// 		alert(MESSAGE.FILE.UPLOAD);
	// 		return;
	// 	}
	// 	console.log(file);
	// 	setSelectedFile(file);
	// };

	// const now = new Date();
	// const getMilliseconds = now.getTime();
	// const upload = new AWS.S3.ManagedUpload({
	// 	params: {
	// 		Bucket: 'pofol-bucket/upload',
	// 		Key: `${getMilliseconds + '_' + selectedFile?.name}`,
	// 		Body: selectedFile,
	// 	},
	// });
	// console.log(upload);

	return (
		<AM.DetailOnboradWrapper>
			<AM.MainTitleBox>
				<AM.MainTitle>{MYPAGEOPTION.ACCOUNT.MANAGE.TITLE}</AM.MainTitle>
			</AM.MainTitleBox>
			<AM.ContentBox>
				<form onSubmit={handleSubmit(submitHandler)}>
					<AM.UserCard>
						<AM.UserCardImg>
							<img
								{...register('image')}
								// src={
								// 	selectedFile
								// 		? selectedFile.name
								// 		: user.profileImage
								// }
								alt="프로필 사진"
							></img>
							<button>프로필 수정</button>
							{/* <input
								accept="image/*"
								type="file"
								// ref={fileInputRef}
								// onChange={handleFileChange}
							></input> */}
						</AM.UserCardImg>
						<AM.UserCardInfo>
							<AM.UserName>{user.name}</AM.UserName>
							<AM.UserEmail>{user.email}</AM.UserEmail>
						</AM.UserCardInfo>
					</AM.UserCard>

					<AM.SubTitleBox>
						<AM.SubTitle id="nickName">닉네임</AM.SubTitle>
						<input
							defaultValue={user.nickName}
							label="#nickName"
							placeholder={MESSAGE.MYPAGE.NICKNAME}
							{...register('nickName')}
						/>
					</AM.SubTitleBox>
					<AM.SubTitleBox>
						<AM.SubTitle id="position">직무</AM.SubTitle>
						<select {...register('position')}>
							<option value={'default'} hidden>
								{user.position}
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
