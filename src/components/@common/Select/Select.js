import * as S from './Select.styles';

function Select(props) {
	const { options, size, font } = props;

	const option = options.map(option => (
		<option key={option.value} value={option.value}>
			{option.name}
		</option>
	));

	return (
		<>
			<S.Selected size={size} font={font}>
				{option}
			</S.Selected>
		</>
	);
}

export default Select;
