import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './PortfolioPost.styles';

import Line from '../../../components/@common/Line/Line';
import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/pages/Portfolio/Review/Review';
import ReviewComment from '../../../components/pages/Portfolio/Review/ReviewComment/ReviewComment';
import InfoEditModal from '../../../components/@common/ApplyModal/ApplyModal';

function PortfolioPost() {
	const location = useLocation();
	const path = location.pathname.split('/')[3];

	const [contents, setContents] = useState({});
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const getContent = async () => {
			const res = await axios.get('/mock/mentor.json');
			const data = res.data.mentor;

			const newData = [...data];
			const dataIndex = newData.find(data => data.postId === path);

			setContents(dataIndex);
		};

		getContent();
	}, []);

	const handleOpenModal = () => {
		setOpenModal(prev => !prev);
	};

	const { name, title, createdAt } = contents;

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
								<img src="/assets/img/profile/profile3.png" />
								<strong>{name}</strong>

								<Line size={'height'} />

								<span>{createdAt}</span>
							</S.NameBox>

							{openModal && <InfoEditModal />}

							<S.Button onClick={handleOpenModal}>
								신청하기
							</S.Button>
						</S.MentorBox>

						<Line size={'small'} />

						<IntroContents contents={contents} />

						<Line size={'small'} />

						<Review />

						<ReviewComment />
						<ReviewComment />
						<ReviewComment />
					</S.ContentsBox>
				</S.PostBox>
			)}
		</>
	);
}

export default PortfolioPost;
