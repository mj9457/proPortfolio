import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './SignUp.styles';
import Button from '../../components/@common/Button/Button';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [nickname, setNickname] = useState('');
	const [position, setPosition] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const UserCode = new URL(window.location.href).searchParams.get('code');
		sendCodeToServer(UserCode).then(accessToken => {
			getUserProfile(accessToken).then(profile => {
				setName(profile.name);
				setEmail(profile.email);
			});
		});
	}, []);

	async function sendCodeToServer(UserCode) {
		console.log(UserCode);
		try {
			const response = await axios.post(
				'http://localhost:8080/login/naver/callback ',
				{
					UserCode,
				},
			);
			const accessToken = response.data.access_token;
			console.log('발급된 액세스 토큰:', accessToken);
		} catch (error) {
			console.error('액세스 토큰을 받아오는데 실패했습니다.', error);
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

	function handleNicknameChange(event) {
		setNickname(event.target.value);
	}

	function handleJobChange(event) {
		setPosition(event.target.value);
	}

	async function handleSubmit() {
		try {
			const response = await axios.post(
				'http://localhost:8080/api/auth/signup',
				{
					name,
					email,
					nickname,
					position,
				},
			);

			if (response.status === 200 || response.status === 201) {
				alert('회원가입이 성공적으로 완료되었습니다!');
				navigate('/');
			} else {
				alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
		}
	}

	return (
		<>
			<S.Wrap>
				<S.RegisterForm onSubmit={handleSubmit}>
					<p>회원 가입</p>
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
						<select value={position} onChange={handleJobChange}>
							<option value="">선택하세요</option>
							<option value="backend">백엔드 개발자</option>
							<option value="frontend">프론트엔드 개발자</option>
							<option value="fullstack">풀스택 개발자</option>
							<option value="android">안드로이드 개발자</option>
							<option value="ios">iOS 개발자</option>
						</select>
					</div>
					<Button variant={'primary'} shape={'default'} size={'big'}>
						가입완료하기
					</Button>
				</S.RegisterForm>
			</S.Wrap>
		</>
	);
}
// 주석 처리

export default SignUp;
