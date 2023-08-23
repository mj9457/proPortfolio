import { useEffect, useRef, useState } from 'react';
import Button from '../../components/@common/Button/Button';
import Input from '../../components/@common/Input/Input';
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
import { useSetRecoilState } from 'recoil';
import { includeFooterState } from '../../recoil/atoms/index.atom';
import { v4 } from 'uuid';

const UserMentorApply = () => {
	const setIncludeFooter = useSetRecoilState(includeFooterState);
	const [selectedFile, setSelectedFile] = useState(null);
	const [imageSrc, setImageSrc] = useState(null);
	const fileInputRef = useRef(null);
	AWS.config.update({
		region: process.env.REACT_APP_REGION,
		accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
		secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
	});

	const UUID = v4();
	// console.log(v4());
	useEffect(() => {
		setIncludeFooter(false);
		return () => {
			setIncludeFooter(true);
		};
	}, [setIncludeFooter]);
	const fileUploadHandler = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	const handleFileChange = async e => {
		const file = e.target.files[0];
		const fileExt = file?.name.split('.').pop();
		if (!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(fileExt)) {
			if (file === undefined) {
				return;
			}
			alert('jpg,png,jpg 파일만 업로드 가능합니다.');
			return;
		}

		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'pofol-bucket',
				// Key: `upload/${file.name}`,
				Key: `${UUID + '_' + file.name}`,
				Body: file,
			},
		});
		console.log(upload);
		// upload.promise().then(data => {
		// 	console.log(data);
		// });
		try {
			const result = await upload.promise();
			console.log(result.Location);
		} catch (error) {
			console.log(error);
		}
		// promise.then((data)=> {
		//     console.log(data);
		// }).catch(e)
		//     console.log(e);

		// reader.readAsDataURL(file);
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
							<ApplyInput placeholder="회사명을 입력해주세요."></ApplyInput>
						</ContentBox>
						<ContentBox>
							<span>경력</span>
							<ApplyInput placeholder="연차를 입력해주세요."></ApplyInput>
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
							<Button size="big" variant="cancel" shape="default">
								취소하기
							</Button>
							<Button
								size="big"
								variant="primary"
								shape="default"
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
