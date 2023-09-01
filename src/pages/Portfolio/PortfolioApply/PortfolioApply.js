import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useFooter from '../../../hooks/useFooter';
import useApi from '../../../hooks/useApi';
import { check } from '../../../utils/check';
import MESSAGE from '../../../constants/message';

import * as S from './PortfolioApply.styles';

import Information from '../../../components/pages/Portfolio/Information/Information';
import Button from '../../../components/@common/Button/Button';
import Textarea from '../../../components/@common/Textarea/Textarea';
import Input from '../../../components/@common/Input/Input';

function PortfolioApply() {
	useFooter();

	const navigate = useNavigate();

	// params 가져와서 portfolioId 있는지 확인
	const params = useParams();
	const portfolioId = params.portfolioId;

	// 유저 정보 체크
	const [user, setUser] = useState([]);

	// 글 작성
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

	// api 통신
	const { result, trigger } = useApi({
		path: '/user',
		shouldFetch: true,
	});

	const { result: postResult, trigger: postTrigger } = useApi({
		path: portfolioId ? `/portfolio/${portfolioId}` : '',
		shouldFetch: portfolioId,
	});

	// 원래 유저에 들어가 있던 정보 setMentorPost에 넣어주기
	useEffect(() => {
		if (result) {
			setUser(result);

			setMentorPost(prevState => ({
				...prevState,
				ownerId: result._id,
				nickName: result.nickName,
				name: result.name,
				career: result.career,
				company: result.company,
				position: result.position,
				coachingCount: result.coachingCount,
				profileImageUrl: result.profileImageUrl,
			}));
		}
	}, [result]);

	// 글 수정 시 이미 들어가 있던 데이터 불러오는 로직
	useEffect(() => {
		if (postResult) {
			setMentorPost(prevState => ({
				...prevState,
				ownerId: result._id,
				position: postResult.position,
				nickName: postResult.nickName,
				name: postResult.name,
				company: postResult.company,
				career: postResult.career,
				title: postResult.title,
				description: postResult.description,
				coachingCount: postResult.coachingCount,
				profileImageUrl: postResult.profileImageUrl,
			}));
		}
	}, [postResult]);

	const handleChange = e => {
		const { name, value } = e.target;

		setMentorPost(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	// 글 작성하기 & 수정하기 버튼 클릭
	const handleSubmit = () => {
		const fail = check(mentorPost).filter(el => el.checked);

		// 유효성 검사 후
		if (fail.length > 0) {
			const errorMessage = fail[0].message;
			alert(errorMessage);
		} else {
			// url에 portfolioId가 있다면 수정
			if (portfolioId) {
				postTrigger({
					method: 'put',
					path: `/portfolio/${portfolioId}`,
					data: mentorPost,
				});
				alert(MESSAGE.POST.EDITFIN);
				navigate(-1);
			} else {
				// 없다면 작성
				trigger({
					method: 'post',
					path: '/portfolio',
					data: mentorPost,
				});
				alert(MESSAGE.POST.COMPLETE);
				navigate('/portfolio');
			}
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

					<Information
						handleChange={handleChange}
						user={user}
						portfolioId={portfolioId}
						mentorPost={mentorPost}
					/>
				</S.ContentsBox>

				<S.ContentsBox>
					<span>2. 멘토링 소개 제목을 작성해 주세요.</span>
					<Input
						size={'large'}
						placeholder="제목을 입력해 주세요."
						defaultValue={portfolioId ? mentorPost.title : ''}
						onChange={handleChange}
						name="title"
					/>
				</S.ContentsBox>

				<S.ContentsBox>
					<span>3. 멘토링 소개 내용을 작성해 주세요.</span>
					<Textarea
						size={'regular'}
						placeholder={'소개 글 및 경력은 필수로 입력해 주세요.'}
						defaultValue={portfolioId ? mentorPost.description : ''}
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
