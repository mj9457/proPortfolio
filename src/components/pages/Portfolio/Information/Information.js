import * as S from './Information.styles';

import Input from '../../../@common/Input/Input';
import Select from '../../../@common/Select/Select';

function Information(props) {
	const { onChange } = props;

	return (
		<S.InfoBox>
			<S.Contents>
				<S.ContentsTitle>직무</S.ContentsTitle>
				<Select
					size={'regular'}
					font={'regular'}
					onChange={onChange}
					name="select"
				>
					<option hidden>선택</option>
					<option value="frontend">프론트엔드 개발</option>
					<option value="backend">백엔드 개발</option>
					<option value="fullstack">풀스택 개발</option>
					<option value="android">안드로이드 개발</option>
					<option value="ios">IOS 개발</option>
				</Select>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>이름</S.ContentsTitle>
				<Input
					size={'regular'}
					placeholder="이름을 입력해 주세요."
					onChange={onChange}
					name="name"
					value={'김민수'}
					readOnly
				/>
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
