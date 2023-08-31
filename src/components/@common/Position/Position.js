import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';

import Select from '../Select/Select';

function Position(props) {
	const { onChange, size, font, variant, value, ...rest } = props;

	const [positions, setPositions] = useState([]);

	const { result, error } = useApi({
		path: '/position',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.positions && result.positions.length > 0) {
			setPositions(result.positions);
			console.log(error);
		}
	}, [result.positions]);

	return (
		<Select
			size={size}
			font={font}
			variant={variant}
			value={value}
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
