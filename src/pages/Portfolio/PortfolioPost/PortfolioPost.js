import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userAtom } from '../../../recoil/atoms/index.atom';
import useFooter from '../../../hooks/useFooter';
import useApi from '../../../hooks/useApi';
import MESSAGE from '../../../constants/message';

import * as S from './PortfolioPost.styles';

import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/@common/Review/Review';
import Line from '../../../components/@common/Line/Line';
import Button from '../../../components/@common/Button/Button';
import ApplyModal from '../../../components/@common/ApplyModal/ApplyModal';

function PortfolioPost() {
	useFooter();

	const navigate = useNavigate();

	// params 가져오기
	const params = useParams();
	const path = params._id;

	// 로그인 유저 체크
	const { isAuth, role } = useRecoilValue(userAtom);

	// post list
	const [post, setPost] = useState({});

	// role === mentor
	const [isMentor, setIsMentor] = useState(false);

	// userId
	const [isUserId, setIsUserId] = useState('');

	// modal open state
	const [isModalOpen, setIsModalOpen] = useState(false);

	// api 통신
	const { result, trigger, isLoading } = useApi({
		path: `/portfolio/${path}`,
		shouldFetch: true,
	});

	const { result: userResult } = useApi({
		path: '/user',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result) {
			setPost(result);
		}

		if (userResult) {
			setIsUserId(userResult._id);
		}

		// 로그인 한 아이디와 글 주인의 아이디가 같은지 확인

		// 로그인 한 유저의 롤이 멘토인지 확인
		if (role === 'mentor') {
			setIsMentor(true);
		} else setIsMentor(false);
	}, [result, isUserId]);

	const checkUserId = isUserId === post.ownerId;

	// 버튼 클릭시 → 모달 open
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	// 게시글 수정
	const handleEdit = () => {
		if (confirm(MESSAGE.POST.EDIT)) {
			navigate(`/portfolio/edit/${path}`);
		}
	};

	// 게시글 삭제
	const handleDelete = () => {
		if (confirm(MESSAGE.POST.DELETE)) {
			trigger({ path: `/portfolio/${path}`, method: 'delete' });
			alert(MESSAGE.DELETE.COMPLETE);
			navigate('/portfolio');
		}
	};

	const { nickName, title, updatedAt, profileImageUrl } = post;

	// 날짜와 프로필 이미지
	const dateAndTime = updatedAt => {
		const serverDate = new Date(updatedAt);
		const date = serverDate.toLocaleDateString('ko-KR');
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		};
		const time = serverDate.toLocaleTimeString('en-US', options);

		return `${date} ${time}`;
	};

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<>
			{isLoading && <p>로딩 중입니다.</p>}
			{post && (
				<S.PostBox>
					<S.TitleBox>
						<span>{title}</span>
					</S.TitleBox>

					<S.ContentsBox>
						<S.MentorBox>
							<S.NameBox>
								<img src={profileImageUrl} />
								<strong>{nickName}</strong>

								<Line size={'height'} />

								<span>{dateAndTime(updatedAt)}</span>
							</S.NameBox>

							{isModalOpen && (
								<ApplyModal
									setIsModalOpen={setIsModalOpen}
									path={path}
								/>
							)}

							{isAuth && isMentor === false && (
								<Button
									variant={'primary'}
									shape={'default'}
									size={'normal'}
									onClick={handleOpenModal}
								>
									신청하기
								</Button>
							)}
						</S.MentorBox>

						<Line size={'small'} />

						<IntroContents post={post} />

						<Line size={'small'} />

						{isAuth && isMentor && checkUserId && (
							<S.ButtonBox>
								<Button
									variant={'primary'}
									shape={'default'}
									size={'normal'}
									onClick={handleEdit}
								>
									수정
								</Button>
								<Button
									variant={'cancel'}
									shape={'default'}
									size={'normal'}
									onClick={handleDelete}
								>
									삭제
								</Button>
							</S.ButtonBox>
						)}

						<Review title={'후기'} getUrl={`/portfolio/${path}`} />
					</S.ContentsBox>
				</S.PostBox>
			)}
		</>
	);
}

export default PortfolioPost;
