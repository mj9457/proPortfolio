import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './SignUp.styles';
import Button from '../../components/@common/Button/Button';
import Input from '../../components/@common/Input/Input';
import { getCookie } from '../../utils/cookie';
import Position from '../../components/@common/Position/Position';
import useFooter from '../../hooks/useFooter';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [nickName, setNickName] = useState('');
	const [position, setPosition] = useState('');
	const [nameError, setNameError] = useState('');
	const navigate = useNavigate();
	useFooter();

	useEffect(() => {
		async function fetchUserData() {
			try {
				const email = decodeURIComponent(getCookie('email'));
				setEmail(email);
			} catch (error) {
				console.error('사용자 정보를 가져오는데 실패했습니다.', error);
			}
		}

		fetchUserData();
	}, []);

	const handleNameChange = event => {
		const newName = event.target.value;
		if (newName.length <= 10) {
			setName(newName);
			setNameError('');
		} else {
			setNameError('이름은 10자 이하로 입력해 주세요');
		}
	};

	const handleNicknameChange = event => {
		setNickName(event.target.value);
	};

	const handleJobChange = event => {
		setPosition(event.target.value);
	};

	async function handleSubmit(event) {
		event.preventDefault();

		if (name.length > 10) {
			setNameError('이름은 10자 이하로 입력해 주세요');
			return;
		}

		try {
			const response = await axios.post(
				'http://34.64.245.195/api/auth/signup',
				{
					name,
					email,
					nickName,
					position,
				},
			);

			if (response.status === 200 || response.status === 201) {
				alert('회원가입이 성공적으로 완료되었습니다!');
				navigate('/signupdone');
			} else {
				alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
		}
	}

	return (
		<S.Wrap>
			<S.RegisterForm onSubmit={handleSubmit}>
				<p>회원 가입</p>
				<div>
					<label>이메일</label>
					<Input type="text" value={email} readOnly size={'medium'} />
				</div>
				<div>
					<label>이름</label>
					<Input
						type="text"
						value={name}
						size={'medium'}
						onChange={handleNameChange}
						error={nameError}
					/>
					{nameError && <S.StyledError>{nameError}</S.StyledError>}
				</div>
				<div>
					<label>닉네임</label>
					<Input
						type="text"
						value={nickName}
						onChange={handleNicknameChange}
						size={'medium'}
					/>
				</div>
				<div>
					<label>직무</label>
					<Position
						onChange={handleJobChange}
						position={position}
						size={'regular'}
						font={'regular'}
					/>
				</div>
				<Button
					variant={'primary'}
					shape={'default'}
					size={'big'}
					type="submit"
				>
					가입 완료하기
				</Button>
			</S.RegisterForm>
		</S.Wrap>
	);
}

export default SignUp;
//  주석처리 