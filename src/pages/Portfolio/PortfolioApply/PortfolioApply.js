import Textarea from '../../../components/@common/Textarea/Textarea';
import Information from '../../../components/pages/Portfolio/Information/Information';
import * as S from './PortfolioApply.styles';

function PortfolioApply() {
	return (
		<S.ApplyBox>
			<S.TitleBox>
				<span>멘토링 신청 게시물 작성</span>
			</S.TitleBox>

			<S.InfoContentsBox>
				<S.ContentsBox>
					<span>1. 멘토 님의 기본 정보를 작성해 주세요.</span>

					<Information />
				</S.ContentsBox>

				<S.ContentsBox>
					<span>2. 멘토링 소개 제목을 작성해 주세요.</span>
					<S.Inputs placeholder="제목을 입력해 주세요." />
				</S.ContentsBox>

				<S.ContentsBox>
					<span>3. 멘토링 소개 내용을 작성해 주세요.</span>
					<Textarea
						size={'regular'}
						placeholder={'소개 글 및 경력은 필수로 입력해 주세요.'}
					/>
				</S.ContentsBox>

				<S.Button>등록하기</S.Button>
			</S.InfoContentsBox>
		</S.ApplyBox>
	);
}

export default PortfolioApply;
