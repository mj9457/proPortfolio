import React, { useEffect, useState } from 'react';
import * as S from './index.styles';

function SelectWithDefault({
	onChange,
	options,
	selectText,
	name,
	selectedOption,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [internalSelectedOption, setInternalSelectedOption] = useState(null);

	// console.log(internalSelectedOption, selectedOption);
	const handleSelect = option => {
		// console.log(option.name);
		setInternalSelectedOption(option.name);
		setIsOpen(!isOpen);
		onChange(name, option.name);
	};

	const toggleSelect = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (selectedOption) {
			setInternalSelectedOption(selectedOption);
		}
	}, [selectedOption]);

	return (
		<S.Container>
			<S.SelectDefaultOptionBox onClick={toggleSelect}>
				<S.SelectDefaultOption
					value={internalSelectedOption}
					onChange={onChange}
				>
					{internalSelectedOption ||
						`${selectText}을(를) 선택해 주세요.`}
				</S.SelectDefaultOption>

				<span className="material-symbols-outlined">
					{isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
				</span>
			</S.SelectDefaultOptionBox>
			{isOpen && (
				<S.OptionList>
					{options.map(el => (
						<S.Option
							key={el.value ? el.value : el._id}
							onClick={() => handleSelect(el)}
						>
							{el.name}
						</S.Option>
					))}
				</S.OptionList>
			)}
		</S.Container>
	);
}

export default SelectWithDefault;
