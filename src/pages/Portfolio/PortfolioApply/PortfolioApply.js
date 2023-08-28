import { useEffect, useState } from 'react';
import useFooter from '../../../hooks/useFooter';

import * as S from './PortfolioApply.styles';

import Information from '../../../components/pages/Portfolio/Information/Information';
import Button from '../../../components/@common/Button/Button';
import Textarea from '../../../components/@common/Textarea/Textarea';
import Input from '../../../components/@common/Input/Input';
import MESSAGE from '../../../constants/message';
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import { check } from '../../../utils/check';

function PortfolioApply() {
	useFooter();

	const navigate = useNavigate();
	const params = useParams();

	// axios 통신 → user Info 가져오기
	const [user, setUser] = useState([]);

	const { result, trigger, isLoading, error } = useApi({
		path: '/user',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result) {
			setUser(result);

			setMentorPost(prevState => ({
				...prevState,
				ownerId: result._id,
				nickName: result.nickName,
				name: result.name,
				career: result.career ? result.career : '0', // 숫자로 보내주도록 백엔드에 요청
				coachingCount: '0', // 숫자로 보내주도록 백엔드에 요청
				profileImageUrl: result.profileImageUrl
					? result.profileImageUrl
					: '',
			}));
		}
	}, [result]);

	// 글 작성하기
	const [mentorPost, setMentorPost] = useState({
		ownerId: '',
		position: '',
		nickName: '',
		name: '',
		company: '',
		career: '',
		title: '',
		description: '',
		coachingCount: '',
		profileImageUrl: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;

		setMentorPost(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	// 글 작성하기 버튼 클릭
	const handleSubmit = async () => {
		const fail = check(mentorPost).filter(el => el.checked);

		if (fail.length > 0) {
			const errorMessage = fail[0].message;
			alert(errorMessage);
		} else {
			trigger({
				method: 'post',
				path: '/portfolio',
				data: mentorPost,
			});

			alert(MESSAGE.POST.COMPLETE);
			navigate('/portfolio');
		}
	};

	// 글 수정하기
	const {
		result: postResult,
		trigger: postTrigger,
		isLoading: postIsLoading,
		error: postError,
	} = useApi({
		path: `/portfolio/${params.portfolioId}`,
		shouldFetch: true,
	});

	console.log(postResult);

	return (
		<S.ApplyBox>
			<S.TitleBox>
				<span>멘토링 신청 게시물 작성</span>
			</S.TitleBox>

			<S.InfoContentsBox>
				<S.ContentsBox>
					<span>1. 멘토 님의 기본 정보를 작성해 주세요.</span>

					<Information onChange={handleChange} user={user} />
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
						name="description"
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
