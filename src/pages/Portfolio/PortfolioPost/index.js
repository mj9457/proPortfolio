import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';
import useFooter from 'hooks/useFooter';
import useApi from 'hooks/useApi';
import MESSAGE from 'constants/message';

import * as S from './index.styles';

import IntroContents from 'components/pages/Portfolio/IntroContents';
import Review from 'components/@common/Review';
import Line from 'components/@common/Line';
import Button from 'components/@common/Button';
import ApplyModal from 'components/@common/ApplyModal';

function PortfolioPost() {
	useFooter();

	const { isAuth, role, _id } = useRecoilValue(userAtom);
	const navigate = useNavigate();

	// params 가져오기
	const params = useParams();
	const path = params._id;

	// 로그인 유무 & modal open state
	const [post, setPost] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);

	// api 통신
	const { result, trigger, isLoading } = useApi({
		path: `/portfolios/${path}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result) {
			setPost(result);
		}
	}, [result, isAuth]);

	// 버튼 클릭시 → 모달 open
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	// 현재 로그인한 유저 아이디랑 게시글 오너 아이디랑 맞는지 확인
	const userCheck = _id === post.ownerId;

	// 로그인한 유저 아이디의 role 이 유저인지 확인
	const roleCheck = role === 'user';

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

							{isAuth && isModalOpen && (
								<ApplyModal
									setIsModalOpen={setIsModalOpen}
									path={path}
								/>
							)}

							{isAuth && roleCheck && (
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
						{isAuth && userCheck && (
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

						<Review title={'후기'} getUrl={`/portfolios/${path}`} />
					</S.ContentsBox>
				</S.PostBox>
			)}
		</>
	);
}

export default PortfolioPost;
