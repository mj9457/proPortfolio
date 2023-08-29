import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import Select from '../Select/Select';

function Position(props) {
	const { onChange, size, font, variant, defaultValue, ...rest } = props;

	const [positions, setPositions] = useState([]);

	const { result, trigger, isLoading, error } = useApi({
		path: '/position',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result && result.length > 0) {
			setPositions([...result]);
			console.log(error);
		}
	}, [result]);

	return (
		<Select
			size={size}
			font={font}
			variant={variant}
			defaultValue={defaultValue}
			onChange={onChange}
			name="position"
			{...rest}
		>
			<option hidden>직무를 선택해 주세요.</option>
			{positions.map((el, idx) => (
				<option value={el.name} key={idx}>
					{el.name}
				</option>
			))}
		</Select>
	);
}

export default Position;
