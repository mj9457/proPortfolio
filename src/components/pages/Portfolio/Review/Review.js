import Textarea from '../../../@common/Textarea/Textarea';
import * as S from './Review.styles';

function Review() {
	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>후기</strong>
				<span>0</span>
			</S.TopBox>

			<Textarea size={'full'} placeholder={'후기를 입력하세요.'} />

			<S.LastBox>
				<button>후기 등록</button>
			</S.LastBox>
		</S.ReviewBox>
	);
}

export default Review;
