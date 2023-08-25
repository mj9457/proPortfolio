import React, { useState, useEffect } from 'react';
import StudyInfoCard from '../StudyInfoCard/StudyInfoCard';
import * as H from './Slider.styles';
import axios from 'axios';

function Slider({ background, url }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [studyInfoList, setStudyInfoList] = useState([]);

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

	useEffect(() => {
		const fetchStudyInfo = async () => {
			try {
				const response = await axios.get(`${url}`);
				setStudyInfoList(response.data.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchStudyInfo();
	}, []);

	return (
		<H.Wrap>
			<H.SliderWrapper>
				<H.SlideContainer
					style={{
						transform: `translateX(-${currentIndex * 50.7}%)`,
					}}
				>
					{studyInfoList.map((studyInfo, index) => (
						<StudyInfoCard
							key={index}
							category={studyInfo.category}
							background={background}
							title={studyInfo.title}
							languages={studyInfo.languages}
							numberPeople={studyInfo.numberPeople}
							position={studyInfo.position}
							deadline={studyInfo.deadline}
						/>
					))}
				</H.SlideContainer>
			</H.SliderWrapper>
			<H.Controls>
				<H.Button onClick={handlePrev}>
					<img
						src="./assets/img/icons/leftarrow.png"
						alt="Previous"
					/>
				</H.Button>
				<H.Button onClick={handleNext}>
					<img src="./assets/img/icons/rightarrow.png" alt="Next" />
				</H.Button>
			</H.Controls>
		</H.Wrap>
	);
}

export default Slider;
