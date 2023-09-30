import { useState, useEffect, useRef } from 'react';

function useInfiniteScroll(loadData) {
	const observer = useRef();

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		};

		observer.current = new IntersectionObserver(entries => {
			const target = entries[0];
			// console.log(target, 'target', entries);
			if (target.isIntersecting) {
				loadData();
			}
		}, options);

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [loadData]);

	const observeElement = useRef(null);
	useEffect(() => {
		if (observeElement.current && observer.current) {
			observer.current.observe(observeElement.current);
		}
		return () => {
			if (observeElement.current && observer.current) {
				observer.current.unobserve(observeElement.current);
			}
		};
	}, [observeElement]);

	return { observeElement };
}

export default useInfiniteScroll;
