import * as S from './Information.styles';

import Input from '../../../@common/Input/Input';
import Position from '../../../@common/Position/Position';

function Information(props) {
	const { handleChange, user, mentorPost, portfolioId } = props;
	const { position, name, career, company } = user;

	return (
		<S.InfoBox>
			<S.Contents>
				<S.ContentsTitle>직무</S.ContentsTitle>

				<Position
					variant={'default'}
					size={'regular'}
					font={'regular'}
					value={portfolioId ? mentorPost.position : position}
					onChange={handleChange}
				/>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>이름</S.ContentsTitle>
				<Input
					size={'regular'}
					name="name"
					value={portfolioId ? mentorPost.name : name}
					readOnly
				/>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>재직 회사</S.ContentsTitle>
				<Input
					size={'regular'}
					placeholder="회사명을 입력해 주세요."
					name="company"
					defaultValue={portfolioId ? mentorPost.company : company}
					onChange={handleChange}
				/>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>경력</S.ContentsTitle>
				<Input
					size={'regular'}
					placeholder="경력을 입력해 주세요."
					name="career"
					defaultValue={portfolioId ? mentorPost.career : career}
					onChange={handleChange}
				/>
			</S.Contents>
		</S.InfoBox>
	);
}

export default Information;
