import * as S from './Review.styles';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Line from '../../../@common/Line/Line';
import Textarea from '../../../@common/Textarea/Textarea';

function Review() {
	const [review, setReview] = useState([]);

	useEffect(() => {
		const getReview = async () => {
			const res = await axios.get('/mock/review.json');
			const data = res.data.data;

			setReview([...data]);
		};

		getReview();
	}, []);

	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>후기</strong>
				<span>{review.length}</span>
			</S.TopBox>

			<S.BottomBox>
				{review.map((review, idx) => (
					<S.CommentBox key={idx}>
						<S.MiddleBox>
							<S.NamingBox>
								<strong>{review.nickName}</strong>
								<span>{review.createdAt}</span>
							</S.NamingBox>

							<S.Buttons>
								<button>수정</button>
								<button>삭제</button>
							</S.Buttons>
						</S.MiddleBox>

						<div>
							{/* <Textarea size={'full'} value={review.content} /> */}

							<S.Contents>{review.content}</S.Contents>
						</div>

						<Line size={'small'} />
					</S.CommentBox>
				))}
			</S.BottomBox>
		</S.ReviewBox>
	);
}

export default Review;
