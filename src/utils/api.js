import axios from 'axios';

// post메서드로 통신할 때 기본값 설정
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios를 통한 모든 통신에서 서버에서 5초 이상 응답이 없는 경우 에러처리
axios.defaults.timeout = 5000;

const apiBaseUrl = 'http://34.64.245.195/api';
// const apiBaseUrl = '/api';

// api instance
export const api = axios.create({
	baseURL: apiBaseUrl,
});
// api.get('/admin') => GET http://localhost:8080/admin
// 요청 인터셉터
api.interceptors.request.use(
	// 첫번째 인자는 req
	req => {
		if (req.data instanceof FormData) {
			req.headers['Content-Type'] = 'multipart/form-data';
		}
		return req;
	},
	// 두번째 인자는 error
	err => {
		throw err;
	},
);
const successStatusCodes = [200, 201, 203];
// 응답 인터셉터
api.interceptors.response.use(
	res => {
		if (successStatusCodes.includes(res.status)) {
			return res.data;
		} else {
			return res.status;
		}
	},
	err => {
		throw err;
	},
);

export const getApi = async (path, params) => {
	return await api.get(path, { params });
};
export const postApi = async (path, data) => {
	return await api.post(path, data);
};
export const deleteApi = async (path, params) => {
	return await api.delete(path, params);
};
export const putApi = async (path, data) => {
	return await api.put(path, data);
};
export const patchApi = async (path, data) => {
	return await api.patch(path, data);
};
