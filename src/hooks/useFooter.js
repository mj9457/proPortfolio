import { useSetRecoilState } from 'recoil';
import { includeFooterState } from 'recoil/atoms/index.atom';
import { useEffect } from 'react';

const useFooter = () => {
	const setIncludeFooter = useSetRecoilState(includeFooterState);

	useEffect(() => {
		setIncludeFooter(false);

		return () => {
			setIncludeFooter(true);
		};
	}, [setIncludeFooter]);
};

export default useFooter;
