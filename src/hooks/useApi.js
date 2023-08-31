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
	params: initParams = {},
	showBoundary = true, // 비동기에러 표시여부
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState({});
	const [_, occurredError] = useState({});

	const initFetch = useCallback(async () => {
		try {
			setIsLoading(true);
			const queryParams = new URLSearchParams(initParams).toString();
			const urlWithParams = queryParams
				? `${initPath}?${queryParams}`
				: initPath;
			const fetchResult = await mapMethodToFetcher[initMethod](
				urlWithParams,
				initData,
			);
			setResult(fetchResult);
		} catch (err) {
			if (showBoundary) {
				setError(err);
				throw err;
			} else {
				// 비동기 에러 검출 가능
				occurredError(() => {
					throw new Error(err);
				});
			}
		}
		setIsLoading(false);
	}, [initMethod, initData, initPath]);

	const trigger = useCallback(
		async ({
			path: triggerPath = initPath,
			method: triggerMethod = initMethod,
			data: triggerData = initData,
			params: triggerParams = {},
			applyResult = false,
			showBoundary = true,
		}) => {
			try {
				setIsLoading(true);
				// const fetchResult = await mapMethodToFetcher[initMethod](
				// 	`${initPath}${queryParams ? `?${queryParams}` : initPath}`,
				// 	initData,
				// );
				const triggerResult = await mapMethodToFetcher[triggerMethod](
					triggerPath,
					triggerData,
				);
				if (applyResult) {
					const queryParams = new URLSearchParams(
						triggerParams,
					).toString();
					// query가 있을 때 query로 호출, 없을때는 initPath로 호출
					const urlWithParams = queryParams
						? `${triggerPath}?${queryParams}`
						: initPath;
					console.log(urlWithParams);
					const triggerResult = await mapMethodToFetcher[initMethod](
						urlWithParams,
						initData,
					);
					console.log(triggerResult);
					setResult(triggerResult);
				} else {
					setResult(triggerResult);
				}
			} catch (err) {
				// 비동기 에러 검출 가능
				if (showBoundary) {
					setError(err);
					throw err;
				} else {
					// 비동기 에러 검출 가능
					occurredError(() => {
						throw new Error(err);
					});
				}
			}
			setIsLoading(false);
		},
		[initMethod, initData, initPath, initParams],
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
