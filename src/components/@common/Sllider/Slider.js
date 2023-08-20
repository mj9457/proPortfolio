import React, { useState } from 'react';
import StudyInfoCard from '../StudyInfoCard/StudyInfoCard';
import styled from 'styled-components';

const SliderWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	justify-content: center;
	gap: 20px;
	margin: auto;
`;

const Controls = styled.div`
	width: 102%;
	position: absolute;
	top: 40%;
	display: flex;
	justify-content: space-between;
`;

const PrevButton = styled.button`
	background-color: white;
	width: 25px;
	height: 25px;
	border-radius: 100%;
	box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
	cursor: pointer;
	> img {
		width: 30%;
	}
`;

const NextButton = styled.button`
	background-color: white;
	width: 25px;
	height: 25px;
	border-radius: 100%;
	cursor: pointer;
	box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
	> img {
		width: 30%;
	}
`;

function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? 3 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
	};

	return (
		<SliderWrapper>
			<StudyInfoCard />
			<StudyInfoCard />
			<Controls>
				<PrevButton onClick={handlePrev}>
					<img
						src="./assets/img/icons/leftarrow.png"
						alt="Previous"
					/>
				</PrevButton>
				<NextButton onClick={handleNext}>
					<img src="./assets/img/icons/rightarrow.png" alt="Next" />
				</NextButton>
			</Controls>
		</SliderWrapper>
	);
}

export default Slider;
