import Line from '../../../../@common/Line/Line';
import * as S from './ReviewComment.styles';

function ReviewComment() {
	return (
		<S.CommentBox>
			<S.TopBox>
				<S.NamingBox>
					<strong>마라탕</strong>
					<span>2023-08-23 10:50:44</span>
				</S.NamingBox>

				<S.Buttons>
					<button>수정</button>
					<button>삭제</button>
				</S.Buttons>
			</S.TopBox>

			<div>
				<S.Contents>
					세세하게 코치 해주시고 너무 좋았습니다. 정리를 잘해주세요.
					ㄱㅅ. 세세하게 코치 해주시고 너무 좋았습니다. 정리를
					잘해주세요. ㄱㅅ. 세세하게 코치 해주시고 너무 좋았습니다.
					정리를 잘해주세요. ㄱㅅ. 세세하게 코치 해주시고 너무
					좋았습니다. 정리를 잘해주세요. ㄱㅅ. 세세하게 코치 해주시고
					너무 좋았습니다. 정리를 잘해주세요. ㄱㅅ. 세세하게 코치
					해주시고 너무 좋았습니다. 정리를 잘해주세요. ㄱㅅ. 세세하게
					코치 해주시고 너무 좋았습니다. 정리를 잘해주세요. ㄱㅅ.
				</S.Contents>
			</div>

			<Line size={'small'} />
		</S.CommentBox>
	);
}

export default ReviewComment;
