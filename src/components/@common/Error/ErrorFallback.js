import * as S from './ErrorFallback.styles';

function ErrorFallback({ error }) {
	console.log(error);

	return (
		<S.ErrorBox>
			<div>에러가 발생했습니다!</div>
			<div>요청하신 페이지를 찾을 수 없습니다.</div>

			<a>홈으로 이동</a>
		</S.ErrorBox>
	);
}

export default ErrorFallback;
