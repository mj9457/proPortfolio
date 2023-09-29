import React, { useState, useRef, useEffect } from 'react';
import * as S from './MultiSelectDropdown.styles';
import useApi from 'hooks/useApi';
import MESSAGE from 'constants/message';

function MultiSelectDropdown({ onPositionsChange, selectedData }) {
	const CheckBox = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [selectedPositions, setSelectedPositions] = useState([]);
	const [positions, setPositions] = useState([]);

	const showCheckboxes = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		if (selectedData) {
			setSelectedPositions(selectedData);
		}
	}, [selectedData]);

	useEffect(() => {
		if (selectedPositions.length === 4) {
			setExpanded(false);
		}
	}, [selectedPositions]);

	const handlePositionChange = positionName => {
		let updatedPositions;

		if (selectedPositions.includes(positionName)) {
			updatedPositions = selectedPositions.filter(
				name => name !== positionName,
			);
		} else {
			if (selectedPositions.length < 4) {
				updatedPositions = [...selectedPositions, positionName];
			} else {
				alert(MESSAGE.CHECK.POSITIONLENGTH);
				return;
			}
		}

		setSelectedPositions(updatedPositions);
		onPositionsChange(updatedPositions);
	};

	const { result, trigger, isLoading, error } = useApi({
		path: '/positions',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.positions && result.positions.length > 0) {
			setPositions(result.positions);
		}
	}, [result.positions]);

	return (
		<S.MultiselectContainer>
			<S.SelectBox onClick={showCheckboxes}>
				<select>
					<option>
						{selectedPositions.length > 0
							? selectedPositions.join(', ')
							: '모집하는 직무를 선택해 주세요.(최대 4개)'}
					</option>
				</select>
				<S.OverSelect></S.OverSelect>
			</S.SelectBox>
			<S.CheckBoxContainer ref={CheckBox} $expanded={expanded}>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					positions.map(el => (
						<S.Label htmlFor={el.name} key={el._id}>
							<input
								type="checkbox"
								id={el.name}
								checked={selectedPositions.includes(el.name)}
								onChange={() => handlePositionChange(el.name)}
							/>
							<span>{el.name}</span>
						</S.Label>
					))
				)}
			</S.CheckBoxContainer>
		</S.MultiselectContainer>
	);
}

export default MultiSelectDropdown;
