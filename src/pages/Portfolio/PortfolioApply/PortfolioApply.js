import axios from 'axios';
import useFooter from '../../../hooks/useFooter';

import * as S from './PortfolioApply.styles';

import Information from '../../../components/pages/Portfolio/Information/Information';
import Button from '../../../components/@common/Button/Button';
import Textarea from '../../../components/@common/Textarea/Textarea';
import Input from '../../../components/@common/Input/Input';
import { useState } from 'react';

function PortfolioApply() {
	const [mentorPost, setMentorPost] = useState({
		select: '',
		name: '',
		company: '',
		title: '',
		contents: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;

		setMentorPost(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async () => {
		await axios
			.post('https://jsonplaceholder.typicode.com/posts', {
				mentorPost,
			})
			.then(res => console.log(res));
	};

	return (
		<S.ApplyBox>
			<S.TitleBox>
				<span>멘토링 신청 게시물 작성</span>
			</S.TitleBox>

			<S.InfoContentsBox>
				<S.ContentsBox>
					<span>1. 멘토 님의 기본 정보를 작성해 주세요.</span>

					<Information onChange={handleChange} />
				</S.ContentsBox>

				<S.ContentsBox>
					<span>2. 멘토링 소개 제목을 작성해 주세요.</span>
					<Input
						size={'large'}
						placeholder="제목을 입력해 주세요."
						onChange={handleChange}
						name="title"
					/>
				</S.ContentsBox>

				<S.ContentsBox>
					<span>3. 멘토링 소개 내용을 작성해 주세요.</span>
					<Textarea
						size={'regular'}
						placeholder={'소개 글 및 경력은 필수로 입력해 주세요.'}
						onChange={handleChange}
						name="contents"
					/>
				</S.ContentsBox>

				<Button
					variant={'primary'}
					size={'full'}
					shape={'default'}
					onClick={handleSubmit}
				>
					등록하기
				</Button>
			</S.InfoContentsBox>
		</S.ApplyBox>
	);
}

export default PortfolioApply;
