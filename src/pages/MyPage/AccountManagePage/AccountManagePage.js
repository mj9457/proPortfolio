import { useState } from 'react';
import * as AMP from './AccountManagePage.styles';

// 계정 설정 페이지
function AccountManagePage() {
	const [emailValue, setEmailValue] = useState('elice@test.com');
	const [currentPasswordValue, setCurrentPasswordValue] =
		useState('password1234');
	const [changePasswordValue, setChangePasswordValue] = useState('password');
	const [moreChangePasswordValue, setMoreChangePasswordValue] =
		useState('password');
	const [nickNameValue, setNickNameValue] = useState('elice');
	return (
		<>
			<div className="coaching_detail_onborad">
				<h1 className="title">계정 설정</h1>
			</div>

			<form className="account_info_box">
				<h2 className="sub_title">계정 정보</h2>
				<div className="email_box">
					<label className="email_label" htmlFor="email_input">
						이메일
						<br />
						!!변경된 이메일은 로그인 아이디로 적용됩니다.
					</label>
					<input
						id="email_input"
						type="text"
						placeholder="변경할 이메일을 입력해 주세요."
						value={emailValue}
						onChange={e => {
							setEmailValue(e.target.value);
							console.log(emailValue);
						}}
					/>
				</div>

				<div className="password_box">
					<label
						className="password_label"
						htmlFor="current_password_input"
					>
						비밀번호
					</label>
					<input
						id="current_password_input"
						type="text"
						placeholder="현재 비밀번호를 입력해 주세요."
						value={currentPasswordValue}
						onChange={e => {
							setCurrentPasswordValue(e.target.value);
							console.log(currentPasswordValue);
						}}
					/>
					<input
						id="change_password_input"
						type="text"
						placeholder="변경할 비밀번호를 입력해 주세요."
						value={changePasswordValue}
						onChange={e => {
							setChangePasswordValue(e.target.value);
							console.log(changePasswordValue);
						}}
					/>
					<input
						id="more_change_password_input"
						type="text"
						placeholder="변경할 비밀번호를 다시 한번 더 입력해 주세요."
						value={moreChangePasswordValue}
						onChange={e => {
							setMoreChangePasswordValue(e.target.value);
							console.log(moreChangePasswordValue);
						}}
					/>
				</div>

				<div className="nickName_box">
					<label className="nickName_label" htmlFor="nickName_input">
						닉네임
					</label>
					<input
						id="nickName_input"
						type="text"
						placeholder="변경할 닉네임을 입력해 주세요."
						value={nickNameValue}
						onChange={e => {
							setNickNameValue(e.target.value);
							console.log(nickNameValue);
						}}
					/>
				</div>

				<button
					type="submit"
					onClick={e => e.preventDefault()}
				></button>
			</form>
		</>
	);
}

export default AccountManagePage;
