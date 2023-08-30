import { useEffect, useState } from 'react';

import * as S from './PortfolioCategory.styles';

import Button from '../../../@common/Button/Button';
import useApi from '../../../../hooks/useApi';

function PortfolioCategory(props) {
	const { variant, shape, size } = props;

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
		<S.ButtonBox>
			<div>
				<Button variant={'primary'} shape={shape} size={size}>
					전체
				</Button>

				{positions.map((position, idx) => (
					<Button
						variant={variant}
						shape={shape}
						size={size}
						key={idx}
					>
						{position.name}
					</Button>
				))}
			</div>
		</S.ButtonBox>
	);
}

export default PortfolioCategory;
