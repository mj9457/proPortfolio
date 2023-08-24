import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './Review.styles';

import Line from '../Line/Line';

function Review(props) {
	// 댓글 페이지네이션 처리 필요
	// 댓글도 댓글 작성자인 경우만 수정/삭제 버튼 오픈

	const { title } = props;
	const [review, setReview] = useState([]);

	useEffect(() => {
		const getReview = async () => {
			const res = await axios.get('/mock/review.json');
			const data = res.data.data;

			setReview([...data]);
		};

		getReview();
	}, []);

	const handleDelete = async () => {
		const and = title === '후기' ? '를' : '을';

		if (confirm(`${title}${and} 삭제하시겠습니까?`) === true) {
			await axios.delete('');
		}
	};

	const handleEdit = async e => {
		const { name, value } = e.target;

		setReview(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>{title}</strong>
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
								<button onClick={handleDelete}>삭제</button>
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
