import React, { useState, useEffect } from 'react';
import StudyInfoCard from '../StudyInfoCard/StudyInfoCard';
import * as H from './Slider.styles';
import axios from 'axios';

function Slider({ background, url, slidesToShow }) {
	const [slide, setSlide] = useState(0);
	const [studyInfoData, setStudyInfoData] = useState([]);

	useEffect(() => {
		const fetchStudyInfo = async () => {
			try {
				const res = await axios.get(`${url}`);
				setStudyInfoData(res.data.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchStudyInfo();
	}, []);

	const totalSlides = Math.ceil(studyInfoData.length / slidesToShow);

	const handlePrevClick = () => {
		setSlide((slide - 1 + totalSlides) % totalSlides);
	};

	const handleNextClick = () => {
		setSlide((slide + 1) % totalSlides);
	};

	return (
		<H.Wrap>
			<H.SliderWrapper>
				<H.SlideContainer>
					{studyInfoData
						.slice(slide * slidesToShow, (slide + 1) * slidesToShow)
						.map((studyInfo, index) => (
							<StudyInfoCard
								key={index}
								postId={studyInfo.postId}
								category={studyInfo.category}
								background={background}
								title={studyInfo.title}
								process={studyInfo.process}
								recruits={studyInfo.recruits}
								position={studyInfo.position}
								deadline={studyInfo.deadline}
							/>
						))}
				</H.SlideContainer>
			</H.SliderWrapper>
			<H.Controls>
				<H.Button onClick={handlePrevClick}>
					<img
						src="./assets/img/icons/leftarrow.png"
						alt="Previous"
					/>
				</H.Button>
				<H.Button onClick={handleNextClick}>
					<img src="./assets/img/icons/rightarrow.png" alt="Next" />
				</H.Button>
			</H.Controls>
		</H.Wrap>
	);
}

export default Slider;
