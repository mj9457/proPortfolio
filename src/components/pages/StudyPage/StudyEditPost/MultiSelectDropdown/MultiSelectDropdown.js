import React, { useState, useRef } from 'react';
import { STUDYOPTIONS } from '../../../../../constants/study';
import * as S from './MultiSelectDropdown.styles';

function MultiSelectDropdown({ onPositionsChange }) {
	const CheckBox = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [selectedPositions, setSelectedPositions] = useState([]);

	const showCheckboxes = () => {
		setExpanded(!expanded);
	};

	// const handlePositionChange = positionName => {
	// 	if (selectedPositions.includes(positionName)) {
	// 		setSelectedPositions(
	// 			selectedPositions.filter(name => name !== positionName),
	// 		);
	// 	} else {
	// 		setSelectedPositions([...selectedPositions, positionName]);
	// 		onPositionsChange(selectedPositions);
	// 	}
	// };

	const handlePositionChange = positionName => {
		let updatedPositions;

		if (selectedPositions.includes(positionName)) {
			updatedPositions = selectedPositions.filter(
				name => name !== positionName,
			);
		} else {
			updatedPositions = [...selectedPositions, positionName];
		}

		setSelectedPositions(updatedPositions);
		onPositionsChange(updatedPositions);
	};

	return (
		<form>
			<S.MultiselectContainer>
				<S.SelectBox onClick={showCheckboxes}>
					<select>
						<option>
							{selectedPositions.length > 0
								? selectedPositions.join(', ')
								: '모집하는 직무를 선택해주세요.'}
						</option>
					</select>
					<S.OverSelect></S.OverSelect>
				</S.SelectBox>
				<S.CheckBoxContainer ref={CheckBox} expanded={expanded}>
					{STUDYOPTIONS.POSITION.map(el => (
						<S.Label htmlFor={el.name} key={el.name}>
							<input
								type="checkbox"
								id={el.name}
								checked={selectedPositions.includes(el.name)}
								onChange={() => handlePositionChange(el.name)}
							/>
							<span>{el.name}</span>
						</S.Label>
					))}
				</S.CheckBoxContainer>
			</S.MultiselectContainer>
		</form>
	);
}

export default MultiSelectDropdown;
