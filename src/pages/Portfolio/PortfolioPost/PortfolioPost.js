import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as S from './PortfolioPost.styles';
import useFooter from '../../../hooks/useFooter';
import useApi from '../../../hooks/useApi';

import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/@common/Review/Review';
import Line from '../../../components/@common/Line/Line';
import InfoEditModal from '../../../components/@common/ApplyModal/ApplyModal';
import Button from '../../../components/@common/Button/Button';
import MESSAGE from '../../../constants/message';

function PortfolioPost() {
	useFooter(); // footer 제거

	// user role 확인 후 멘토의 경우 수정/삭제 버튼 보여주고 / 일반 유저의 경우 신청하기 버튼 오픈
	// 멘토 중에서도 작성자의 경우만 수정/삭제 버튼이 활성화 되게 로직 작성

	// id 값
	const params = useParams();
	const path = params._id;

	const navigate = useNavigate();

	const [post, setPost] = useState({});
	const [infoModalOpenState, setInfoModalOpenState] = useState(false);

	// axios 통신 → 화면에 그려주는 작업
	const { result, trigger, isLoading, error } = useApi({
		path: `/portfolio/${path}`,
		shouldFetch: true,
	});

	console.log(result);

	useEffect(() => {
		if (result) {
			setPost(result);
			console.log(error);
		}
	}, [result]);

	// 버튼 클릭시 → 모달 open
	const handleOpenModal = () => {
		setInfoModalOpenState(true);
	};

	// 수정하기
	const handleEdit = () => {
		if (confirm(MESSAGE.POST.EDIT)) {
			navigate(`/portfolio/edit/${path}`);
		}
	};

	// axios 통신 → 삭제하기 / 삭제 안 됨 (백엔드: userId 안 찍힘)
	const handleDelete = () => {
		// 삭제 메시지
		if (confirm(MESSAGE.POST.DELETE)) {
			trigger({ path: `/portfolio/${path}`, method: 'delete' });
			alert(MESSAGE.DELETE.COMPLETE);
			navigate('/portfolio');
		}
	};

	const { nickName, title, updatedAt, profileImageUrl } = post;

	// 날짜와 프로필 이미지
	const date = String(updatedAt).slice(0, 19).split('T');
	const image = !profileImageUrl
		? '/assets/img/profile/profileImage.png'
		: profileImageUrl;

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
								<img src={image} />
								<strong>{nickName}</strong>

								<Line size={'height'} />

								<span>
									{date[0]} {date[1]}
								</span>
							</S.NameBox>

							{infoModalOpenState && (
								<InfoEditModal
									setInfoModalOpenState={
										setInfoModalOpenState
									}
									postAddress={''}
									action={'완료'}
								/>
							)}

							<Button
								variant={'primary'}
								shape={'default'}
								size={'normal'}
								onClick={handleOpenModal}
							>
								신청하기
							</Button>
						</S.MentorBox>

						<Line size={'small'} />

						<IntroContents post={post} />

						<Line size={'small'} />

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

						<Review
							title={'후기'}
							putUrl={''}
							delUrl={`/${path}/comments`}
						/>
					</S.ContentsBox>
				</S.PostBox>
			)}
		</>
	);
}

export default PortfolioPost;
