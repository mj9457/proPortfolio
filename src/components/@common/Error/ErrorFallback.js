import useFooter from '../../../hooks/useFooter';
import Button from '../Button/Button';
import * as S from './ErrorFallback.styles';

function ErrorFallback({ error }) {
	useFooter();
	console.log(error);

	return (
		<S.ErrorBox>
			<div>
				<img src="/assets/img/icons/error.png" />
			</div>

			<S.LetterBox>
				<div>에러가 발생했습니다!</div>
				<div>요청하신 페이지를 찾을 수 없습니다.</div>
			</S.LetterBox>

			<S.ButtonBox>
				<a href="/">
					<Button
						variant={'reverse'}
						shape={'medium'}
						size={'medium'}
					>
						홈으로 이동
					</Button>
				</a>
			</S.ButtonBox>
		</S.ErrorBox>
	);
}

export default ErrorFallback;
