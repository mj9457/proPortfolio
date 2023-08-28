import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import Select from '../Select/Select';

function Position(props) {
	const { onChange } = props;

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
		<>
			<Select
				size={'regular'}
				font={'regular'}
				onChange={onChange}
				name="position"
			>
				<option hidden>선택</option>
				{positions.map((el, idx) => (
					<option value={el.name} key={idx}>
						{el.name}
					</option>
				))}
			</Select>
		</>
	);
}

export default Position;
