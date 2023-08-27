import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './Category.styles';

import Button from '../Button/Button';

function Category(props) {
	const { variant, shape, size } = props;

	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		const getCategory = async () => {
			try {
				const res = await axios.get('/mock/category.json');
				const data = res.data.category;

				setCategoryData([...data]);
			} catch (err) {
				console.log(err);
			}
		};

		getCategory();
	}, []);

	return (
		<S.ButtonBox>
			<div>
				<Button variant={'primary'} shape={shape} size={size}>
					전체
				</Button>

				{categoryData.map((category, idx) => (
					<Button
						variant={variant}
						shape={shape}
						size={size}
						key={idx}
					>
						{category.categoryName}
					</Button>
				))}
			</div>
		</S.ButtonBox>
	);
}

export default Category;
