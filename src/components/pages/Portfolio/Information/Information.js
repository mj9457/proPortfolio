import * as S from './Information.styles';

import Input from '../../../@common/Input/Input';
import Position from '../../../@common/Position/Position';

function Information(props) {
	const { onChange, user } = props;
	const { position, name } = user;

	return (
		<S.InfoBox>
			<S.Contents>
				<S.ContentsTitle>직무</S.ContentsTitle>

				<Position
					onChange={onChange}
					position={position}
					size={'regular'}
					font={'regular'}
				/>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>이름</S.ContentsTitle>
				<Input size={'regular'} name="name" value={name} readOnly />
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>재직 회사</S.ContentsTitle>
				<Input
					size={'regular'}
					placeholder="회사명을 입력해 주세요."
					onChange={onChange}
					name="company"
				/>
			</S.Contents>
		</S.InfoBox>
	);
}

export default Information;
