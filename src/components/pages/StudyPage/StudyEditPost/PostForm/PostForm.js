import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './PostForm.style';
import Button from '../../../../@common/Button/Button';
import Textarea from '../../../../@common/Textarea/Textarea';

function PostForm({ selectedOptions }) {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		title: '',
		content: '',
	});

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const onClickAddPost = async e => {
		if (values.title.length > 30) {
			alert('제목은 30자 이하로 입력해주세요.');
		} else if (values.title.trim().length === 0) {
			alert('제목을 작성해주세요.');
		} else if (values.content.trim().length === 0) {
			alert('소개 내용을 작성해주세요.');
		} else if (selectedOptions.link.trim().length === 0) {
			alert('연락 가능한 링크를 입력해주세요.');
		} else {
			try {
				// const URL = '';
				// const response = await axios.post(URL, {
				// 	title,
				// 	content,
				// selectedOptions
				// });

				// console.log(response.data);
				console.log(selectedOptions);
				alert('성공');
				// navigate(`/study/detail/${response.data.id}`)
			} catch (error) {
				console.error(error);
			}
		}
	};

	const onClickCancel = e => {
		if (confirm('작성을 취소할까요?')) {
			navigate('/study');
		}
	};

	return (
		<S.PostBox>
			<S.PostInput
				placeholder="제목을 입력하세요."
				name="title"
				maxLength={30}
				value={values.title}
				onChange={handleChange}
			/>
			<Textarea
				name="content"
				size={'large'}
				placeholder="프로젝트, 스터디에 대해 소개해주세요!"
				value={values.content}
				onChange={handleChange}
			/>

			{/* 하단 버튼 */}
			<S.ButtonWrapper>
				<Button
					variant={'primary'}
					shape={'default'}
					size={'normal'}
					onClick={onClickAddPost}
				>
					작성하기
				</Button>

				<Button
					variant={'cancel'}
					shape={'default'}
					size={'normal'}
					onClick={onClickCancel}
				>
					취소하기
				</Button>
			</S.ButtonWrapper>
		</S.PostBox>
	);
}

export default PostForm;
