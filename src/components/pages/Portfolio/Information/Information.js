import Select from '../../../@common/Select/Select';
import * as S from './Information.styles';

function Information() {
	return (
		<S.InfoBox>
			<S.Contents>
				<S.ContentsTitle>직무</S.ContentsTitle>
				<Select size={'regular'} font={'regular'}>
					<option hidden>선택</option>
					<option>프론트엔드 개발</option>
					<option>백엔드 개발</option>
					<option>풀스택 개발</option>
					<option>안드로이드 개발</option>
					<option>IOS 개발</option>
				</Select>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>이름</S.ContentsTitle>
				<S.Input placeholder="이름을 입력해 주세요." />
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>재직 회사</S.ContentsTitle>
				<S.Input placeholder="회사명을 입력해 주세요." />
			</S.Contents>
		</S.InfoBox>
	);
}

export default Information;
