import React, { useState, useEffect } from 'react';
import Select from '../../../../@common/Select/Select';
import * as S from './SelectWithDefault.styles';

const defaultSelectProps = {
	size: 'large',
	font: 'regular',
	variant: 'default',
};

function SelectWithDefault({ options, selectedValue, defaultValue, onChange }) {
	return (
		<Select
			{...defaultSelectProps}
			onChange={onChange}
			value={selectedValue}
		>
			<option hidden>{defaultValue}을 선택해주세요.</option>
			{options.map(el => (
				<option key={el.value}>{el.name}</option>
			))}
		</Select>
	);
}

export default SelectWithDefault;
