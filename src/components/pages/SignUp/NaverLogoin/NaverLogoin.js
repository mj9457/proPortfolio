import React from 'react';

const Naver = () => {
	const CLIENT_ID = '2PS45SPgV6uwdkglbWit';
	const CALLBACK_URL = 'http://localhost:3000/signup';
	const STATE_STRING = 'false';
	const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

	const NaverLogin = () => {
		window.location.href = NAVER_AUTH_URL;
	};
	return (
		<button onClick={NaverLogin}>
			<img src="./assets/img/icons/naverlogo.png" alt="네이버로고" />
		</button>
	);
};

export default Naver;