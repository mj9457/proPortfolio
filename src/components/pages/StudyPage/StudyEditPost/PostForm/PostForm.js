import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PostForm.style';
import Button from '../../../../@common/Button';
import Textarea from '../../../../@common/Textarea';
import useApi from 'hooks/useApi';
import MESSAGE from 'constants/message';

function PostForm({ selectedOptions, postId, postData }) {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		title: '',
		description: '',
	});
	const isTitle = postData.title;
	const isDescription = postData.description;

	useEffect(() => {
		if (isTitle && isDescription) {
			setValues({
				title: postData.title,
				description: postData.description,
			});
		}
	}, [isTitle]);

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const validationChecks = [
		{
			check: !values.title || values.title.trim().length === 0,
			message: MESSAGE.CHECK.TITLE,
		},

		{
			check: values.title && values.title.length > 50,
			message: MESSAGE.CHECK.TITLELENGTH,
		},

		{
			check:
				!values.description || values.description.trim().length === 0,
			message: MESSAGE.CHECK.DESCRIPTION,
		},
		{
			check: values.description && values.description.length > 1000,
			message: MESSAGE.CHECK.DESCRIPTIONLENGTH,
		},
		{
			check:
				!selectedOptions.howContactContent ||
				selectedOptions.howContactContent.trim().length === 0,
			message: MESSAGE.CHECK.COMMUNICATION,
		},
		{
			check: Object.keys(selectedOptions).some(optionKey => {
				const option = selectedOptions[optionKey];
				if (typeof option === 'string') {
					return option.trim().length === 0;
				} else if (Array.isArray(option)) {
					return option.length === 0;
				}
				return false;
			}),
			message: MESSAGE.CHECK.ALL,
		},
	];

	const { trigger, isLoading, error, result } = useApi({
		path: '/projectStudies',
		method: 'post',
	});

	const handleSubmit = async e => {
		const validationFailures = validationChecks.filter(
			condition => condition.check,
		);

		if (validationFailures.length > 0) {
			const errorMessage = validationFailures[0].message;
			alert(errorMessage);
			return;
		}

		try {
			const postData = {
				...selectedOptions,
				title: values.title,
				description: values.description,
			};

			if (postId) {
				await trigger({
					path: `/projectStudies/${postId}`,
					method: 'put',
					data: postData,
				});
			} else {
				await trigger({
					path: '/projectStudies',
					method: 'post',
					data: postData,
				});
			}
			// navigate(`/study/detail/${response.data.id}`)
			navigate(`/study`);
		} catch (error) {
			console.error(error);
		}
	};

	const onClickCancel = e => {
		if (confirm(MESSAGE.POST.CANCEL)) {
			navigate('/study');
		}
	};

	return (
		<S.PostBox>
			<S.PostInput
				placeholder="제목을 입력하세요."
				name="title"
				maxLength={50}
				value={values.title}
				onChange={handleChange}
			/>
			<Textarea
				name="description"
				size={'large'}
				maxLength={1000}
				placeholder="스터디, 프로젝트에 대해 소개해 주세요!"
				value={values.description}
				onChange={handleChange}
			/>

			{/* 하단 버튼 */}
			<S.ButtonWrapper>
				<Button
					variant={'primary'}
					shape={'default'}
					size={'normal'}
					onClick={handleSubmit}
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
