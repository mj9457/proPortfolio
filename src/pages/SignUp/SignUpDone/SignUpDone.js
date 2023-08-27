import * as S from './SignUpDone.styles';
import Button from '../../../components/@common/Button/Button';

function SignUpDone() {
	const handleConfirmClick = () => {
		window.location.href = '/';
	};
	return (
		<S.Wrap>
			<S.Contents>
				<img
					src="/assets/img/illustration/highfive.png"
					alt="highfive"
				/>
				<div>
					<p>가입이 완료 되었습니다.</p>
					<p>이제 포폴의 서비스를 이용해 보세요!</p>
				</div>

				<Button
					variant={'primary'}
					shape={'default'}
					size={'big'}
					onClick={handleConfirmClick}
				>
					확인
				</Button>
			</S.Contents>
		</S.Wrap>
	);
}

export default SignUpDone;
