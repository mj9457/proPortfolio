// 쿠키에서  key 값을 넣으면 key값에 맞는 value를 찾아주는 함수

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
