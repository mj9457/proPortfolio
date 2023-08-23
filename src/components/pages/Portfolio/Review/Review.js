import * as S from './Review.styles';

import Button from '../../../@common/Button/Button';
import Textarea from '../../../@common/Textarea/Textarea';

import ReviewComment from './ReviewComment/ReviewComment';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Review() {
	const [review, setReview] = useState([]);

	useEffect(() => {
		const getReview = async () => {
			const res = await axios.get('/mock/review.json');
			const data = res.data.review;

			setReview([...data]);
		};

		getReview();
	}, []);

	const handleChangeTextarea = e => {
		const value = e.target.value;
	};

	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>후기</strong>
				<span>{review.length}</span>
			</S.TopBox>

			<Textarea
				size={'full'}
				placeholder={'후기를 입력하세요.'}
				onChange={handleChangeTextarea}
			/>

			<S.LastBox>
				<Button variant={'add'} size={'small'} shape={'default'}>
					후기 등록
				</Button>
			</S.LastBox>

			<S.CommentBox>
				<ReviewComment review={review} />
			</S.CommentBox>
		</S.ReviewBox>
	);
}

export default Review;
