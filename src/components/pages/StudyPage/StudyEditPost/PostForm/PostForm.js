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

	const validationChecks = [
		{
			check: values.title.length > 30,
			message: '제목은 30자 이하로 입력해주세요.',
		},
		{
			check: values.title.trim().length === 0,
			message: '제목을 작성해주세요.',
		},
		{
			check: values.content.trim().length === 0,
			message: '소개 내용을 작성해주세요.',
		},
		{
			check: selectedOptions.link.trim().length === 0,
			message: '연락 가능한 링크를 입력해주세요.',
		},
		{
			check: Object.values(selectedOptions).some(option => {
				if (typeof option === 'string') {
					return option.trim().length === 0;
				} else if (Array.isArray(option)) {
					return option.length === 0;
				}
				return false;
			}),
			message: '모든 항목을 선택해주세요.',
		},
	];

	const onClickAddPost = async e => {
		const validationFailures = validationChecks.filter(
			condition => condition.check,
		);

		if (validationFailures.length > 0) {
			const errorMessage = validationFailures[0].message;
			alert(errorMessage);
		}

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
