import React from 'react';

const Naver = () => {
	const NaverLogin = () => {
		// window.location.href = 'http://34.64.245.195/api/auth/login/naver';
		window.location.href = 'http://localhost:3000/api/auth/login/naver';
	};
	return (
		<button onClick={NaverLogin} id="naverIdLogin">
			<img src="/assets/img/icons/naverlogo.png" alt="네이버로고" />
		</button>
	);
};

export default Naver;
