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
	const tokenMatch = document.cookie.match(/(^|; )isToken=([^;]*)/);
	const token = tokenMatch ? tokenMatch[2] : undefined;

	console.log('isToken value:', token);
	return !!token;
};
