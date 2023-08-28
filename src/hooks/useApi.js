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
	path: initPath = '', // API 경로를 설정
	method: initMethod = 'get', // GET 메서드(기본값)
	data: initData = {}, // 초기 데이터 (선택사항)
	shouldFetch = false, // 컴포넌트 마운트 시 자동으로 요청
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState({});

	const initFetch = useCallback(async () => {
		try {
			setIsLoading(true);
			const fetchResult = await mapMethodToFetcher[initMethod](
				initPath,
				initData,
			);
			setResult(fetchResult);
		} catch (err) {
			setError(err);
		}
		setIsLoading(false);
	}, [initMethod, initData, initPath]);

	const trigger = useCallback(
		async ({
			path: triggerPath = initPath,
			method: triggerMethod = initMethod,
			data: triggerData = initData,
		}) => {
			try {
				setIsLoading(true);
				const triggerResult = await mapMethodToFetcher[triggerMethod](
					triggerPath,
					triggerData,
				);
				setResult(triggerResult);
			} catch (err) {
				setError(err);
			}
			setIsLoading(false);
		},
		[initMethod, initData, initPath],
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
