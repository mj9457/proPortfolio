import axios from 'axios';
import { useState } from 'react';
import useFooter from '../../../hooks/useFooter';

import * as S from './PortfolioApply.styles';

import Information from '../../../components/pages/Portfolio/Information/Information';
import Button from '../../../components/@common/Button/Button';
import Textarea from '../../../components/@common/Textarea/Textarea';
import Input from '../../../components/@common/Input/Input';
import MESSAGE from '../../../constants/message';
import { useNavigate } from 'react-router-dom';

function PortfolioApply() {
	useFooter();
	const navigate = useNavigate();

	// 유저 정보 중에서 이름, 직무, 회사만 get으로 불러온 후 이름 제외 나머지는 수정 가능하게 처리 후 post로 보내기
	// 정보가 다 들어갔는지 빈칸이 있으면 보내지 못하게 처리 → 우선 성공

	const [mentorPost, setMentorPost] = useState({
		select: '',
		name: '',
		company: '',
		title: '',
		contents: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;

		console.log(name, value);

		setMentorPost(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const check = [
		{
			checked: mentorPost.select.length === 0,
			message: MESSAGE.CHECK.POSITION,
		},
		{
			checked: mentorPost.company.length === 0,
			message: MESSAGE.CHECK.COMPANY,
		},
		{
			checked: mentorPost.title.length === 0,
			message: MESSAGE.CHECK.TITLE,
		},
		{
			checked: mentorPost.title.length > 20,
			message: MESSAGE.CHECK.TITLE,
		},
		{
			checked: mentorPost.contents.length === 0,
			message: MESSAGE.CHECK.DESCRIPTION,
		},
	];

	const handleSubmit = async () => {
		const fail = check.filter(el => el.checked);

		if (fail.length > 0) {
			const errorMessage = fail[0].message;
			alert(errorMessage);
		} else {
			await axios
				.post('https://jsonplaceholder.typicode.com/posts', {
					mentorPost,
				})
				.then(res => console.log(res));
			alert('게시글 작성이 완료되었습니다.');
			navigate(-1);
		}
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
