import React, { useState } from 'react';
import StudyInfoCard from '../StudyInfoCard/StudyInfoCard';
import styled from 'styled-components';

const SliderWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	overflow: hidden;
	margin: auto;
`;

const SlideContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	transition: transform 0.5s ease-in-out;
	gap: 20px;
`;

const Controls = styled.div`
	position: absolute;
	top: 44%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.button`
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
		if (currentIndex > 0) {
			setCurrentIndex(prevIndex => prevIndex - 1);
		}
	};
	const handleNext = () => {
		if (currentIndex <= 1) {
			setCurrentIndex(prevIndex => prevIndex + 1);
		}
	};

	return (
		<SliderWrapper>
			<SlideContainer
				style={{ transform: `translateX(-${currentIndex * 50}%)` }}
			>
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
				<StudyInfoCard background="lightBlueBackground" />
			</SlideContainer>
			<Controls>
				<Button onClick={handlePrev}>
					<img
						src="./assets/img/icons/leftarrow.png"
						alt="Previous"
					/>
				</Button>
				<Button onClick={handleNext}>
					<img src="./assets/img/icons/rightarrow.png" alt="Next" />
				</Button>
			</Controls>
		</SliderWrapper>
	);
}

export default Slider;
