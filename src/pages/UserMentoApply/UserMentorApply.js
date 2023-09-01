import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/@common/Button/Button';
import AWS from 'aws-sdk';
import {
	ApplyCard,
	ApplyInput,
	ButtonArea,
	Container,
	ContentArea,
	ContentBox,
	FileButton,
	ImageBox,
	SubTitle,
	Title,
} from './UserMentorApply.styles';
import useFooter from '../../hooks/useFooter';
import MESSAGE from '../../constants/message';
import useApi from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom';

const UserMentorApply = () => {
	useFooter();
	const [selectedFile, setSelectedFile] = useState(null);
	const [inputValue, setInputValue] = useState({
		company: '',
		career: '',
	});
	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	AWS.config.update({
		region: process.env.REACT_APP_REGION,
		accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
		secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
	});
	const { trigger, isLoading, error } = useApi({
		path: '/mentorRequest',
		method: 'post',
	});
	const fileUploadHandler = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	const handleFileChange = e => {
		const file = e.target.files[0];
		const fileExt = file?.name.split('.').pop();
		const rimiteSize = 5000 * 1024; // 5000KB를 바이트 단위로 변환
		// console.log(file.size);
		if (!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(fileExt)) {
			if (file === undefined) {
				return;
			}
			alert(MESSAGE.FILE.UPLOAD);
			return;
		}
		if (file.size >= rimiteSize) {
			alert(
				'이미지 용량이 너무 큽니다. 5000KB 미만의 이미지를 선택해주세요.',
			);
			return;
		}
		setSelectedFile(file);
	};
	const handleOnChange = e => {
		// console.log(e.target.type);
		const { value } = e.target;

		if (e.target.type === 'text') {
			setInputValue(prevState => ({
				...prevState,
				company: value,
			}));
		}
		if (e.target.type === 'number') {
			setInputValue(prevState => ({
				...prevState,
				career: value,
			}));
		}
		// companyRef = e.target.value;
	};
	const handleSubmit = async () => {
		// console.log(inputValue.career === '');
		if (!inputValue.company.trim() || !inputValue.career) {
			alert(MESSAGE.CHECK.MODAL);
			return;
		} else if (selectedFile === null) {
			alert('이미지를 첨부해주세요.');
			return;
		}
		// console.log(inputValue);

		// console.log(selectedFile?.name);

		const now = new Date();
		const getMilliseconds = now.getTime();
		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'pofol-bucket/upload',
				Key: `${getMilliseconds + '_' + selectedFile?.name}`,
				Body: selectedFile,
			},
		});
		// console.log(upload);
		try {
			const result = await upload.promise();
			trigger({
				data: {
					company: inputValue.company,
					career: inputValue.career,
					authenticationImageUrl: result.Location.toString(),
				},
			});
			alert(MESSAGE.APPLY.COMPLETE);
			navigate('/');
			// TODO API
		} catch (error) {
			// console.log(error);
			// TODO 에러 세팅...
			alert('파일의 용량이 너무 큽니다.');
		}
	};
	return (
		<>
			<Container>
				<ApplyCard>
					<Title>멘토 전환 신청</Title>
					<ContentArea>
						<SubTitle>
							1. 멘토님의 기본 정보를 입력해주세요.
						</SubTitle>
						<ContentBox>
							<span>재직회사</span>
							<ApplyInput
								value={inputValue.company}
								placeholder="회사명을 입력해주세요."
								onChange={e => {
									handleOnChange(e);
								}}
							></ApplyInput>
						</ContentBox>
						<ContentBox>
							<span>경력</span>
							<ApplyInput
								value={inputValue.career}
								type="number"
								placeholder="연차를 입력해주세요."
								onChange={handleOnChange}
							></ApplyInput>
						</ContentBox>
						<SubTitle>
							2. 사원증 혹은 재직증명서를 업로드 해 주세요.
						</SubTitle>
						<ImageBox>
							<span>이미지</span>
							<ApplyInput
								readOnly
								placeholder="파일을 업로드해주세요."
								value={selectedFile ? selectedFile.name : ''}
							></ApplyInput>
							<FileButton onClick={fileUploadHandler}>
								파일찾기
							</FileButton>
							<input
								accept="image/*"
								type="file"
								ref={fileInputRef}
								onChange={handleFileChange}
							></input>
						</ImageBox>
						<ButtonArea>
							<Button
								size="big"
								variant="cancel"
								shape="default"
								onClick={() => {
									navigate('/');
								}}
							>
								취소하기
							</Button>
							<Button
								size="big"
								variant="primary"
								shape="default"
								onClick={handleSubmit}
							>
								등록하기
							</Button>
						</ButtonArea>
					</ContentArea>
				</ApplyCard>
			</Container>
		</>
	);
};
export default UserMentorApply;
