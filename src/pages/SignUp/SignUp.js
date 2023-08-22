import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [nickname, setNickname] = useState('');
	const [job, setJob] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const code = new URL(window.location.href).searchParams.get('code');
		getAccessToken(code).then(accessToken => {
			getUserProfile(accessToken).then(profile => {
				saveProfileToDB(profile);
			});
		});
	}, []);

	async function getAccessToken(code) {
		const clientId = '2PS45SPgV6uwdkglbWit';
		const clientSecret = '8GFl9lkE_Y';

		try {
			const response = await axios.post(
				'https://nid.naver.com/oauth2.0/token',
				null,
				{
					params: {
						grant_type: 'authorization_code',
						client_id: clientId,
						client_secret: clientSecret,
						code: code,
					},
				},
			);

			return response.data.access_token;
		} catch (error) {
			console.error('액세스 토큰을 가져오는데 실패했습니다.', error);
		}
	}

	async function getUserProfile(accessToken) {
		try {
			const response = await axios.get(
				'https://openapi.naver.com/v1/nid/me',
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);
			return response.data.response;
		} catch (error) {
			console.error('프로필을 가져오는데 실패했습니다.', error);
		}
	}

	async function saveProfileToDB(response) {
		console.log('프로필:', response);

		setName(response.name);
		setEmail(response.email);

		const UserName = response.name;
		const UserEmail = response.email;

		try {
			const response = await axios.post(
				'https://your-backend-server.com/api/save-profile',
				{
					name: UserName,
					email: UserEmail,
				},
			);

			if (response.status === 200) {
				console.log('프로필 저장 성공');
			} else {
				console.log('프로필 저장 실패');
			}
		} catch (error) {
			console.error('프로필 저장 중 에러', error);
		}
	}

	function handleNicknameChange(event) {
		setNickname(event.target.value);
	}

	function handleJobChange(event) {
		setJob(event.target.value);
	}

	async function handleSubmit() {
		try {
			const response = await axios.post('/api/signup', {
				name,
				email,
				nickname,
				job,
			});

			if (response.status === 200 || response.status === 201) {
				alert('회원가입이 성공적으로 완료되었습니다!');
				navigate('/'); // 가입 완료 후 로그인 페이지로 이동
			} else {
				alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
		}
	}

	return (
		<div>
			<h1>회원 가입</h1>
			<div>
				<label>이름</label>
				<input type="text" value={name} readOnly />
			</div>
			<div>
				<label>이메일</label>
				<input type="text" value={email} readOnly />
			</div>
			<div>
				<label>닉네임</label>
				<input
					type="text"
					value={nickname}
					onChange={handleNicknameChange}
				/>
			</div>
			<div>
				<label>직무</label>
				<select value={job} onChange={handleJobChange}>
					<option value="">선택</option>
					<option value="backend">백엔드 개발자</option>
					<option value="frontend">프론트엔드 개발자</option>
					<option value="android">안드로이드 개발자</option>
					<option value="ios">iOS 개발자</option>
				</select>
			</div>
			<button onClick={handleSubmit}>저장</button>
		</div>
	);
	// sdfsdfs
}

export default SignUp;
