import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './ReviewComment.styles';
import Line from '../../../../@common/Line/Line';
import Textarea from '../../../../@common/Textarea/Textarea';

function ReviewComment(props) {
	const { review } = props;

	const [input, setInput] = useState(false);

	return (
		<>
			{review.map((review, idx) => (
				<S.CommentBox key={idx}>
					<S.TopBox>
						<S.NamingBox>
							<strong>{review.nickName}</strong>
							<span>{review.createdAt}</span>
						</S.NamingBox>

						<S.Buttons>
							<button>{input ? '완료' : '수정'}</button>
							<button>삭제</button>
						</S.Buttons>
					</S.TopBox>

					<div>
						{input ? (
							<Textarea size={'full'} value={review.content} />
						) : (
							<S.Contents>{review.content}</S.Contents>
						)}
					</div>

					<Line size={'small'} />
				</S.CommentBox>
			))}
		</>
	);
}

export default ReviewComment;
