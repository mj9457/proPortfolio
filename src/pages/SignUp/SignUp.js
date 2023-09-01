import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUp.styles';
import Button from '../../components/@common/Button/Button';
import Input from '../../components/@common/Input/Input';
import { getCookie } from '../../utils/cookie';
import Position from '../../components/@common/Position/Position';
import useFooter from '../../hooks/useFooter';
import useApi from '../../hooks/useApi';
import VALIDATE from '../../constants/regex';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [nickName, setNickName] = useState('');
	const [position, setPosition] = useState('');
	const [nameError, setNameError] = useState('');
	const [nicknameError, setNicknameError] = useState('');
	const navigate = useNavigate();
	useFooter();

	const { trigger } = useApi({});

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
		const value = event.target.value;
		setNickName(value);
		if (value.length <= 10) {
			if (VALIDATE.nickName.test(value)) {
				setNickName(value);
				setNicknameError('');
			} else {
				setNicknameError('한글, 영어, 숫자만 입력 가능합니다.');
			}
		} else {
			setNicknameError('닉네임은 10자 이하로 입력해 주세요');
		}
	};

	const handleJobChange = event => {
		setPosition(event.target.value);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await trigger({
				path: '/auth/signup',
				method: 'post',
				data: {
					name,
					email,
					nickName,
					position,
				},
			});
			navigate('/signupdone');
		} catch (err) {
			if (err.response.data.result === 'MongoServerError') {
				if (err.response.data.reason.includes('duplicate key')) {
					alert('이미 사용중인 닉네임입니다.');
				} else {
					alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
				}
			}
		}
	};

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
						placeholder="이름을 입력해 주세요"
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
						placeholder="닉네임을 입력해 주세요"
						value={nickName}
						onChange={handleNicknameChange}
						size={'medium'}
					/>
					{nicknameError && (
						<S.StyledError>{nicknameError}</S.StyledError>
					)}
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
