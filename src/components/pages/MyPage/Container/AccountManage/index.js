import { useEffect, useRef, useState } from 'react';
import * as AM from './AccountManage.styles';
import MYPAGEOPTION from 'constants/mypage';
import Button from 'components/@common/Button/Button';
import useApi from 'hooks/useApi';
import MESSAGE from 'constants/message';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';

function AccountManage() {
	const [formData, setFormData] = useState({
		position: '',
		nickName: '',
		career: 0,
		company: '',
		profileImageUrl: '',
	});
	// 유저 정보 담을 state
	const [user, setUser] = useState();
	// 유저 정보 통신(GET)
	const { result: users, trigger: usersT } = useApi({
		path: `/user`,
		shouldFetch: true,
	});
	useEffect(() => {
		if (users) {
			setUser(users);
		}
	}, [users]);
	// 직무 담을 state
	const [position, setPosition] = useState([]);
	const { result: positions } = useApi({
		path: '/position',
		shouldFetch: true,
	});
	// 포지션 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (positions) {
			setPosition(positions.positions);
		}
	}, [positions]);
	const [selectedFile, setSelectedFile] = useState(null);
	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	AWS.config.update({
		region: process.env.REACT_APP_REGION,
		accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
		secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
	});
	const fileUploadHandler = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	const handleFileChange = e => {
		const file = e.target.files[0];
		const fileExt = file?.name.split('.').pop();
		const rimiteSize = 5000 * 1024; // 5000KB를 바이트 단위로 변환
		if (!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(fileExt)) {
			if (file === undefined) {
				return;
			}
			alert(MESSAGE.FILE.UPLOAD);
			return;
		}
		if (file.size >= rimiteSize) {
			alert(
				'이미지 용량이 너무 큽니다. 5000KB 미만의 이미지를 선택해주세요.',
			);
			return;
		}
		setSelectedFile(file);
	};
	// 정보 변경 마다 불러올 함수
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleSubmit = async e => {
		e.preventDefault();
		// 데이터 유효성 검사, 데이터가 바뀌지 않으면 기존 유저의 데이터 값 전달
		Object.entries(formData).forEach(([key, value]) => {
			if (value === '' || value === 0 || value === user[key]) {
				formData[key] = user[key];
			}
		});
		let profileImageUrl = formData.profileImageUrl; // default to existing image URL
		if (selectedFile) {
			// only upload a new file if one was selected
			const now = new Date();
			const getMilliseconds = now.getTime();
			const upload = new AWS.S3.ManagedUpload({
				params: {
					Bucket: 'pofol-bucket/upload',
					Key: `${getMilliseconds + '_' + selectedFile.name}`,
					Body: selectedFile,
				},
			});
			try {
				const result = await upload.promise();
				profileImageUrl = result.Location.toString();
			} catch (error) {
				console.log(error);
				alert('파일의 용량이 너무 큽니다.');
				return;
			}
		}
		usersT({
			method: 'put',
			data: {
				...formData,
				profileImageUrl,
			},
		});
		alert(MESSAGE.MYPAGE.EDIT.COMPLETE);
	};
	return (
		<AM.DetailOnboradWrapper>
			<AM.MainTitleBox>
				<AM.MainTitle>{MYPAGEOPTION.ACCOUNT.MANAGE.TITLE}</AM.MainTitle>
			</AM.MainTitleBox>
			<AM.ContentBox>
				<AM.UserCard>
					<AM.UserCardImg>
						<input
							id="image"
							name="profileImageUrl"
							type="image"
							src={
								selectedFile
									? URL.createObjectURL(selectedFile)
									: user?.profileImageUrl
							}
							alt="프로필"
							readOnly
						></input>
						<button type="button" onClick={fileUploadHandler}>
							프로필 수정
						</button>
						<input
							accept="image/*"
							type="file"
							ref={fileInputRef}
							onChange={handleFileChange}
						></input>
					</AM.UserCardImg>
					<AM.UserCardInfo>
						<AM.UserName>{user?.name}</AM.UserName>
						<AM.UserEmail>{user?.email}</AM.UserEmail>
					</AM.UserCardInfo>
				</AM.UserCard>
				<AM.SubTitleBox>
					<AM.SubTitle id="nickName">닉네임</AM.SubTitle>
					<input
						defaultValue={user?.nickName}
						name="nickName"
						label="#nickName"
						placeholder={MESSAGE.MYPAGE.NICKNAME}
						onChange={handleChange}
					/>
				</AM.SubTitleBox>
				<AM.SubTitleBox>
					<AM.SubTitle id="position">직무</AM.SubTitle>
					<select name="position" onChange={handleChange}>
						<option value={'default'} hidden>
							{user?.position}
						</option>
						{position &&
							position.map((el, idx) => (
								<option value={el.name} key={idx}>
									{el.name}
								</option>
							))}
					</select>
				</AM.SubTitleBox>
				{user?.role === 'mentor' ? (
					<>
						<AM.SubTitleBox>
							<AM.SubTitle id="career">경력</AM.SubTitle>
							<input
								name="career"
								type="number"
								min={1}
								max={99}
								defaultValue={user?.career}
								placeholder={'경력 년수'}
								onChange={handleChange}
							/>
						</AM.SubTitleBox>
						<AM.SubTitleBox>
							<AM.SubTitle id="company">
								재직중인 회사
							</AM.SubTitle>
							<input
								name="company"
								defaultValue={user?.company}
								placeholder={'재직중인 회사'}
								onChange={handleChange}
							/>
						</AM.SubTitleBox>
					</>
				) : undefined}
				<Button
					disabled={''}
					$variant={'primary'}
					shape={'default'}
					size={'full'}
					onClick={handleSubmit}
				>
					수정
				</Button>
			</AM.ContentBox>
		</AM.DetailOnboradWrapper>
	);
}

export default AccountManage;
