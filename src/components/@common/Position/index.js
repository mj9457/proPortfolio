import { useEffect, useState } from 'react';
import useApi from 'hooks/useApi';

import SelectWithDefault from '../SelectWithDefault';

function Position(props) {
	const { onChange, value } = props;

	const [positions, setPositions] = useState([
		{
			value: '',
			name: '',
		},
	]);

	const { result } = useApi({
		path: '/positions',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.positions && result.positions.length > 0) {
			setPositions(result.positions);
			console.log(positions);
		}
	}, [result.positions, value]);

	return (
		<SelectWithDefault
			options={positions}
			selectedOption={value}
			selectText="직무"
			onChange={onChange}
			name="position"
		/>
	);
}

export default Position;
