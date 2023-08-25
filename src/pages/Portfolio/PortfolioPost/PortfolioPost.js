import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './PortfolioPost.styles';
import useFooter from '../../../hooks/useFooter';

import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/@common/Review/Review';
import Line from '../../../components/@common/Line/Line';
import InfoEditModal from '../../../components/@common/ApplyModal/ApplyModal';
import Button from '../../../components/@common/Button/Button';
import MESSAGE from '../../../constants/message';

function PortfolioPost() {
	useFooter();

	// user role 확인 후 멘토의 경우 수정/삭제 버튼 보여주고 / 일반 유저의 경우 신청하기 버튼 오픈
	// 멘토 중에서도 작성자의 경우만 수정/삭제 버튼이 활성화 되게 로직 작성
	// 일반 유저가 신청하기를 하고 모달로 post를 보냈을 경우 신청하기 버튼 비활성화

	// id 값
	const params = useParams();
	const path = params._id;

	const navigate = useNavigate();

	const [contents, setContents] = useState({});
	const [infoModalOpenState, setInfoModalOpenState] = useState(false);

	// axios 통신
	useEffect(() => {
		const getContent = async () => {
			try {
				const res = await axios.get(
					`http://localhost:8080/api/portfolio/${path}`,
				);
				const data = res.data;

				setContents(data);
			} catch (err) {
				console.log(err);
			}
		};

		getContent();
	}, []);

	// 모달 open
	const handleOpenModal = () => {
		setInfoModalOpenState(true);
	};

	// 수정하기
	const handleEdit = () => {
		if (confirm(MESSAGE.POST.EDIT)) {
			navigate(`/portfolio/edit/${path}`);
		}
	};

	// 삭제하기
	const handleDelete = async () => {
		if (confirm(MESSAGE.POST.DELETE)) {
			await axios.delete(`http://localhost:8080/api/portfolio/${path}`);
			navigate('/portfolio');
		}
	};

	// contents 구조분해할당
	const { nickName, title, updatedAt, profileImageUrl } = contents;

	// date & profileImage
	const date = String(updatedAt).slice(0, 19).split('T');
	const profileImage = !profileImageUrl
		? '/assets/img/profile/profileImage.png'
		: profileImageUrl;

	return (
		<>
			{contents && (
				<S.PostBox>
					<S.TitleBox>
						<span>{title}</span>
					</S.TitleBox>

					<S.ContentsBox>
						<S.MentorBox>
							<S.NameBox>
								<img src={profileImage} />
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
									postAddress={
										'https://jsonplaceholder.typicode.com/posts'
									}
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

						<IntroContents contents={contents} />

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

						<Review title={'후기'} />
					</S.ContentsBox>
				</S.PostBox>
			)}
		</>
	);
}

export default PortfolioPost;
