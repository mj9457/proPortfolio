import { useState, useEffect, useRef } from 'react';

function useInfiniteScroll(func, pause, deps) {
	const [targetRef, setTargetRef] = useState(useRef(null));

	const intersectionObserver = new IntersectionObserver(entries => {
		const target = entries[0];
		if(pause) return;
		if (target.isIntersecting) {
			intersectionObserver.unobserve(targetRef.current);
			func();
		}
	});

	useEffect(() => {
		if (targetRef?.current) {
			intersectionObserver.observe(targetRef.current);
		}
		return () => {
			if (targetRef?.current && targetRef.current) {
				intersectionObserver.disconnect();
			}
		};
	}, [targetRef.current, ...deps]);

	return { setTargetRef };
}

export default useInfiniteScroll;
