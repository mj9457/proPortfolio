import Select from '../../../@common/Select/Select';
import * as S from './Information.styles';

function Information() {
	const OPTIONS = [
		{ value: 'select', name: '선택' },
		{ value: 'frontend', name: '프론트엔드 개발' },
		{ value: 'backend', name: '백엔드 개발' },
		{ value: 'fullstack', name: '풀스택 개발' },
		{ value: 'android', name: '안드로이드 개발' },
		{ value: 'ios', name: 'IOS 개발' },
	];

	return (
		<S.InfoBox>
			<S.Contents>
				<S.ContentsTitle>직무</S.ContentsTitle>
				<Select options={OPTIONS} size={'regular'} font={'regular'} />
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
