import React from 'react';

const Naver = () => {
	const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
	const CALLBACK_URL = 'http://localhost:3000/api/auth/login/naver/callback';
	// const CALLBACK_URL = 'http://34.64.245.195/api/auth/login/naver/callback';
	const STATE_STRING = 'false';
	const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

	const NaverLogin = () => {
		window.location.href = NAVER_AUTH_URL;
	};
	return (
		<button onClick={NaverLogin} id="naverIdLogin">
			<img src="./assets/img/icons/naverlogo.png" alt="네이버로고" />
		</button>
	);
};

export default Naver;
