import React, { useState, useEffect } from 'react';
import * as S from './index.styles';

function ScrollToTopButton() {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<S.ScrollButton
			className={showButton ? 'show' : ''}
			onClick={scrollToTop}
		>
			<div>
				<svg
					width="14"
					height="9"
					viewBox="0 0 14 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M14 7.2973L7 0L0 7.2973L1.63333 9L7 3.40541L12.3667 9L14 7.2973Z" />
				</svg>
				<p>TOP</p>
			</div>
		</S.ScrollButton>
	);
}

export default ScrollToTopButton;
