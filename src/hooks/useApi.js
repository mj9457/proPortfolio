import { useState, useCallback, useEffect } from 'react';
import { deleteApi, getApi, patchApi, postApi, putApi } from '../utils/api';

/**
 * TODO React swr로 리팩토링
 */
const mapMethodToFetcher = {
	get: (...args) => getApi(...args),
	post: (...args) => postApi(...args),
	put: (...args) => putApi(...args),
	patch: (...args) => patchApi(...args),
	delete: (...args) => deleteApi(...args),
};

const useApi = ({
	path = '', // API 경로를 설정
	method: initMethod = 'get', // GET 메서드(기본값)
	data: initData = {}, // 초기 데이터 (선택사항)
	shouldFetch = false, // 컴포넌트 마운트 시 자동으로 요청
}) => {
	const [isLoading, setIsLoding] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState({});

	const initFetch = useCallback(async () => {
		try {
			setIsLoding(true);
			const fetchResult = await mapMethodToFetcher[initMethod](
				path,
				initData,
			);
			setResult(fetchResult);
		} catch (err) {
			setError(err);
		}
		setIsLoding(false);
	}, [initMethod, initData, path]);

	const trigger = useCallback(
		async ({
			method: triggerMethod = initMethod,
			data: triggerData = initData,
		}) => {
			try {
				setIsLoding(true);
				const triggerResult = await mapMethodToFetcher[triggerMethod](
					path,
					triggerData,
				);
				setResult(triggerResult);
			} catch (err) {
				setError(err);
			}
			setIsLoding(false);
		},
		[initMethod, initData, path],
	);

	useEffect(() => {
		shouldFetch && initFetch();
	}, []);

	return {
		result,
		isLoading,
		error,
		trigger,
	};
};

export default useApi;
