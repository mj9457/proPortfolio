import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './PortfolioPost.styles';

import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/pages/Portfolio/Review/Review';

import Line from '../../../components/@common/Line/Line';
import InfoEditModal from '../../../components/@common/ApplyModal/ApplyModal';
import Button from '../../../components/@common/Button/Button';

function PortfolioPost() {
	const location = useLocation();
	const path = location.pathname.split('/')[3];

	const [contents, setContents] = useState({});
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const getContent = async () => {
			const res = await axios.get('/mock/mentor.json');
			const data = res.data.data;

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

						<Review />
					</S.ContentsBox>
				</S.PostBox>
			)}
		</>
	);
}

export default PortfolioPost;
