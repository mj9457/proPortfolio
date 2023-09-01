import React, { useState, useEffect } from 'react';
import StudyInfoCard from '../../../@common/StudyInfoCard/StudyInfoCard';
import * as H from './StudySlider.styles';
import useApi from '../../../../hooks/useApi';
import EmptyMessage from '../../../@common/EmptyMessage/EmptyMessage';

function StudySlider({
	isLoggedIn,
	$background,
	url,
	slidesToShow,
	setUserNickName,
}) {
	const [slide, setSlide] = useState(0);
	const [studyInfoData, setStudyInfoData] = useState([]);

	const { result, trigger, isLoading, error } = useApi({
		path: `${url}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result && result.projectStudies) {
			if (isLoggedIn) {
				setUserNickName(result.nickName);
			}
			// console.log(result);
			// console.log(userNickName);
			setStudyInfoData(result.projectStudies);
		}
	}, [result]);

	const totalSlides =
		studyInfoData && studyInfoData.length > 0
			? Math.ceil(studyInfoData.length / slidesToShow)
			: 0;

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
					{studyInfoData && studyInfoData.length > 0 ? (
						studyInfoData
							.slice(
								slide * slidesToShow,
								(slide + 1) * slidesToShow,
							)
							.map((data, index) => {
								return (
									<StudyInfoCard
										key={index}
										postId={data._id}
										classification={data.classification}
										$background={$background}
										title={data.title}
										process={data.process}
										recruits={data.recruits}
										position={data.position}
										deadline={data.deadline.split('T')[0]}
									/>
								);
							})
					) : (
						<EmptyMessage />
					)}
				</H.SlideContainer>
			</H.SliderWrapper>
			{totalSlides > 1 && (
				<H.Controls>
					<H.Button onClick={handlePrevClick}>
						<img
							src="./assets/img/icons/leftarrow.png"
							alt="Previous"
						/>
					</H.Button>
					<H.Button onClick={handleNextClick}>
						<img
							src="./assets/img/icons/rightarrow.png"
							alt="Next"
						/>
					</H.Button>
				</H.Controls>
			)}
		</H.Wrap>
	);
}

export default StudySlider;
