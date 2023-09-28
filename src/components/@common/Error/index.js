import useFooter from 'hooks/useFooter';
import Button from '../Button';
import * as S from './index.styles';

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
				<S.StyledLink to="/">
					<Button
						variant={'reverse'}
						shape={'medium'}
						size={'medium'}
					>
						홈으로 이동
					</Button>
				</S.StyledLink>
			</S.ButtonBox>
		</S.ErrorBox>
	);
}

export default ErrorFallback;
