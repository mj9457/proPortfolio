import React, { useState, useEffect } from 'react';
import * as H from './SlideBanner.styles';

const images = [
	'./assets/img/banner/banner01.png',
	'./assets/img/banner/banner02.png',
	'./assets/img/banner/banner03.png',
	'./assets/img/banner/banner04.png',
];

const RollingSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(images.length - 1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setPrevIndex(activeIndex);
			setActiveIndex(prev => (prev + 1) % images.length);
		}, 4000);
		return () => clearTimeout(timer);
	}, [activeIndex, images.length]);

	return (
		<H.SliderContainer>
			{images.map((src, index) => (
				<H.SliderItem
					key={src}
					$active={index === activeIndex}
					$prev={index === prevIndex}
				>
					<img src={src} alt={`배너이미지 ${index + 1}`} />
				</H.SliderItem>
			))}
			<H.IndicatorContainer>
				{images.map((_, index) => (
					<H.Indicator
						key={index}
						$active={index === activeIndex}
						onClick={() => {
							setPrevIndex(activeIndex);
							setActiveIndex(index);
						}}
					/>
				))}
			</H.IndicatorContainer>
		</H.SliderContainer>
	);
};

export default RollingSlider;
