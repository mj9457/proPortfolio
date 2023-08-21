import Select from '../../../components/@common/Select/Select';
import * as S from './StudyEditPost.styles';

function StudyPost() {
	const OPTIONS = [
		{ name: '스터디', value: '스터디' },
		{ name: '프로젝트', value: '프로젝트' },
	];
	return (
		<>
			<S.Container>
				{/* 기본 정보 */}
				<S.BasicInfoBox>
					<S.Title>
						✨ 프로젝트/스터디 기본 정보를 작성 해주세요.
					</S.Title>
					<S.SelectContainer>
						<S.SelectWrapper>
							<S.SelectBox>
								<S.SelectTitle>모집 구분</S.SelectTitle>
								<Select
									options={OPTIONS}
									size={'large'}
									font={'regular'}
								/>
							</S.SelectBox>

							<S.SelectBox>
								<S.SelectTitle>진행 방식</S.SelectTitle>
								<Select
									options={OPTIONS}
									size={'large'}
									font={'regular'}
								/>
							</S.SelectBox>
						</S.SelectWrapper>

						<S.SelectWrapper>
							<S.SelectBox>
								<S.SelectTitle>모집 직무</S.SelectTitle>
								<Select
									options={OPTIONS}
									size={'large'}
									font={'regular'}
								/>
							</S.SelectBox>

							<S.SelectBox>
								<S.SelectTitle>모집 인원</S.SelectTitle>
								<Select
									options={OPTIONS}
									size={'large'}
									font={'regular'}
								/>
							</S.SelectBox>
						</S.SelectWrapper>

						<S.SelectWrapper>
							<S.SelectBox>
								<S.Deadline>모집 마감일</S.Deadline>
								<Select
									options={OPTIONS}
									size={'large'}
									font={'regular'}
								/>
							</S.SelectBox>

							<S.SelectBox>
								<S.SelectTitle>연결 방법</S.SelectTitle>
								<Select
									options={OPTIONS}
									size={'large'}
									font={'regular'}
								/>
							</S.SelectBox>
						</S.SelectWrapper>
						{/* 컴포넌트 */}
						<S.Input placeholder="연락 가능한 링크를 입력해주세요. ex) 오픈채팅 링크" />
					</S.SelectContainer>
				</S.BasicInfoBox>
				{/* 상세 설명 */}
				<S.PostBox>
					<S.Title>✨ 프로젝트/스터디를 소개 해주세요.</S.Title>
					<S.PostInput placeholder="제목을 입력하세요." />
					{/* 컴포넌트 */}
					<S.PostTextarea></S.PostTextarea>
				</S.PostBox>
			</S.Container>
		</>
	);
}

export default StudyPost;
