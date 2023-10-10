import { useState, useCallback, useEffect } from 'react';
import { deleteApi, getApi, patchApi, postApi, putApi } from 'utils/api';
import { useErrorBoundary } from 'react-error-boundary';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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
	// path: initPath = '', // API 경로를 설정
	// method: initMethod = 'get', // GET 메서드(기본값)
	// data: initData = {}, // 초기 데이터 (선택사항)
	// shouldFetch = false, // 컴포넌트 마운트 시 자동으로 요청
	// // params: initParams = {},
	// showBoundary = true, // 비동기 에러 표시 여부
	path = '', // API 경로를 설정
	method = 'get', // GET 메서드(기본값)
	data = {}, // 초기 데이터 (선택사항)
	shouldFetch = false, // 컴포넌트 마운트 시 자동으로 요청
	// params: initParams = {},
	showBoundary = true, // 비동기 에러 표시 여부
}) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState({});
	const [_, occurredError] = useState({});
	const { showBoundary: handleError } = useErrorBoundary();

	// const initFetch = useCallback(async () => {
	// try {
	// setIsLoading(true);
	// const fetchResult = await mapMethodToFetcher[initMethod](
	// initPath,
	// initData,
	// );
	// setResult(fetchResult);
	// } catch (err) {
	// if (showBoundary) {
	// setError(err);
	// throw err;
	// } else {
	// // 비동기 에러 검출 가능
	// occurredError(() => {
	// throw new Error(err);
	// });
	// }
	// }
	// setIsLoading(false);
	// }, [initMethod, initData, initPath]);

	const trigger = useCallback(
		async ({
			path: triggerPath = path,
			method: triggerMethod = method,
			data: triggerData = data,
			applyResult = false,
			showBoundary = true,
		}) => {
			// console.log({ triggerPath, triggerMethod, triggerData });
			try {
				setIsLoading(true);
				// throw new Error('this is custom error');
				const triggerResult = await mapMethodToFetcher[triggerMethod](
					triggerPath,
					triggerData,
				);
				if (applyResult) {
					setResult(triggerResult);
				} else {
					return triggerResult;
				}
			} catch (err) {
				// 비동기 에러 검출 가능
				if (showBoundary) {
					if (isAxiosError(err)) {
						const {
							request: { status },
						} = err;
						if (status === 401) {
							localStorage.removeItem('recoil-persist');
							return navigate(0);
						}
					}
					handleError(err);
				} else {
					// 비동기 에러 검출 가능
					setError(err);
				}
			}
			setIsLoading(false);
		},
		// [initMethod, initData, initPath],
		[path, method, data],
	);

	useEffect(() => {
		shouldFetch &&
			trigger({
				path,
				method,
				data,
				applyResult: true,
				showBoundary: true,
			});
	}, []);

	return {
		result,
		isLoading,
		error,
		trigger,
	};
};

export default useApi;
