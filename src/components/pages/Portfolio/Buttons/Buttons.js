import Button from '../../../@common/Button/Button';
import * as S from './Buttons.styles';

function Buttons() {
	return (
		<S.ButtonBox>
			<div>
				<Button variant={'primary'} shape={'round'} size={'normal'}>
					전체
				</Button>
				<Button variant={'cancel'} shape={'round'} size={'normal'}>
					프론트엔드
				</Button>
				<Button variant={'cancel'} shape={'round'} size={'normal'}>
					백엔드
				</Button>
				<Button variant={'cancel'} shape={'round'} size={'normal'}>
					Android
				</Button>
				<Button variant={'cancel'} shape={'round'} size={'normal'}>
					IOS
				</Button>
			</div>

			<div>
				<a href="/portfolio/apply">
					<Button variant={'add'} shape={'default'} size={'normal'}>
						작성하기
					</Button>
				</a>
			</div>
		</S.ButtonBox>
	);
}

export default Buttons;
