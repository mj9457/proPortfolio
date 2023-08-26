// 쿠키에서  key 값을 넣으면 원하는 value를 찾아주는 함수
export const getCookie = targetKey => {
	const cookies = document.cookie.split('; ').map(cookie => {
		const [key, value] = cookie.split('=');
		return {
			[key]: value,
		};
	});

	const cookiesObject = Object.assign({}, ...cookies);

	return cookiesObject[targetKey];
};

// 쿠키에서 토큰의 존재 여부를 확인하는 함수
export const checkToken = () => {
	const token = getCookie('token');
	return !!token;
};

// 쿠키를 삭제하는 함수(토큰을 만료하는 함수)

export const clearToken = () => {
	document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
};
