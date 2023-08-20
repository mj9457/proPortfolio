import Select from '../../../components/@common/Select/Select';
import { Textarea } from '../../../components/@common/Textarea/Textarea.styles';
import * as S from './MentoringApply.styles';

function Apply() {
	const OPTIONS = [
		{ value: 'select', name: '선택' },
		{ value: 'frontend', name: '프론트엔드 개발' },
		{ value: 'backend', name: '백엔드 개발' },
		{ value: 'fullstack', name: '풀스택 개발' },
		{ value: 'android', name: '안드로이드 개발' },
		{ value: 'ios', name: 'IOS 개발' },
	];

	return (
		<>
			<S.ApplyWrapper>
				<S.ApplyTitle>
					<span>멘토링 신청 게시물 작성</span>
				</S.ApplyTitle>

				<S.ApplyContent>
					<S.BasicInfo>
						<span>1. 멘토 님의 기본 정보를 작성해 주세요.</span>
						<S.Wrapper>
							<S.InfoSelect>
								<S.InfoSelectTitle>직무</S.InfoSelectTitle>
								<Select
									options={OPTIONS}
									size={'regular'}
									font={'regular'}
								/>
							</S.InfoSelect>
							<S.InfoSelect>
								<S.InfoSelectTitle>이름</S.InfoSelectTitle>
								<S.Input placeholder="이름을 입력해 주세요." />
							</S.InfoSelect>
							<S.InfoSelect>
								<S.InfoSelectTitle>재직 회사</S.InfoSelectTitle>
								<S.Input placeholder="회사명을 입력해 주세요." />
							</S.InfoSelect>
						</S.Wrapper>
					</S.BasicInfo>

					<S.BasicInfo>
						<span>2. 멘토링 소개 제목을 작성해 주세요.</span>
						<S.Inputs placeholder="제목을 입력해 주세요." />
					</S.BasicInfo>

					<S.BasicInfo>
						<span>3. 멘토링 소개 내용을 작성해 주세요.</span>
						<Textarea
							size={'regular'}
							placeholder={
								'소개글 및 경력은 필수로 입력해 주세요.'
							}
						/>
					</S.BasicInfo>
				</S.ApplyContent>
				<S.Button>등록하기</S.Button>
			</S.ApplyWrapper>
		</>
	);
}

export default Apply;
