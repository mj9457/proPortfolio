import { useState } from 'react';
import * as M from './MyPage.styles';
import MentoringListPage from './Mentor/MentoringList/MentoringListPage';

// 오른쪽 컨텐츠

// 유저 코칭 페이지
function UserCoachingBox(props) {
	return (
		<>
			<div>멘토링 신청</div>
			<div>[사용자이름] 제목</div>
			<button>{props.applyState ? '진행 완료' : '신청 취소'}</button>
		</>
	);
}

function UserPage(props) {
	const totalLength =
		props.totalCoaching -
		(props.applyCoaching + props.completedCoaching + props.refuseCoaching);

	return (
		<>
			<div className="coaching_detail_onborad">
				<h1 className="title">멘토링 신청</h1>
				<div>
					<p>신청 완료</p>
					<p>{props.totalCoaching}</p>

					<p>멘토링 진행 완료</p>
					<p>{props.completedCoaching}</p>

					<p>신청 취소</p>
					<p>{props.refuseCoaching}</p>
				</div>
			</div>

			<div className="coaching_apply_list">
				<div>
					<h2 className="sub_title">진행 완료</h2>
					<p>총 {props.applyCoaching}건</p>
				</div>

				<UserCoachingBox applyState={true}></UserCoachingBox>
			</div>

			<div className="coaching_apply_list">
				<div>
					<h2 className="sub_title">신청 내역</h2>
					<p>총 {totalLength}건</p>
				</div>

				{totalLength === 0 ? (
					'지원 정보가 없습니다'
				) : (
					<UserCoachingBox></UserCoachingBox>
				)}
			</div>
		</>
	);
}

// 프로젝트, 스터디 페이지
function ProjectStudyPage() {
	return (
		<>
			<div className="coaching_detail_onborad">
				<h1 className="title">프로젝트 / 스터디</h1>
			</div>

			<div className="written_history">
				<h2 className="sub_title">작성한 글 내역</h2>
				<ul>
					<WrittenList></WrittenList>
				</ul>
			</div>
		</>
	);
}

function WrittenList() {
	return (
		<li style={{ display: 'flex' }}>
			<div className="duties">백엔드</div>
			<div className="writing_title">
				나랑 같이 게더 타운 웹 사이트 만들어 볼 사람 중에 백엔드 구함
			</div>
			<div className="created_time">2023-08-13 12:00</div>
		</li>
	);
}

// 계정 설정 페이지
function AccountSettingsPage() {
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

// 마이 페이지
function MyPage() {
	const [user, setUser] = useState({ name: '내가 바로 사용자이름' }); // axios로 사용자 정보 받아올 예정

	// axios 예시 https://sokkung.tistory.com/213
	// async function getUser() { // async, await을 사용하는 경우
	// 	try {
	// 		// GET 요청은 params에 실어 보냄
	// 	  const response = await axios.get('/user', {
	// 		  params: {
	// 			  ID: 12345
	// 		  }
	// 	  });

	// 	  // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.

	// 	  await axios.get('/user?ID=12345'); // 위의 요청과 동일

	// 	  var userId = 12345;
	// 	  await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.

	// 	  console.log(response);
	// 	} catch (e) {
	// 	  // 실패 시 처리
	// 	  console.error(e);
	// 	}
	//   }

	return (
		<>
			<MentoringListPage></MentoringListPage>
		</>
	);
}

export default MyPage;
