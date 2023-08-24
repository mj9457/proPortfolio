import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './PortfolioPost.styles';
import useFooter from '../../../hooks/useFooter';

import IntroContents from '../../../components/pages/Portfolio/IntroContents/IntroContents';
import Review from '../../../components/@common/Review/Review';
import Line from '../../../components/@common/Line/Line';
import InfoEditModal from '../../../components/@common/ApplyModal/ApplyModal';
import Button from '../../../components/@common/Button/Button';

function PortfolioPost() {
	useFooter();

	// user role 확인 후 멘토의 경우 수정/삭제 버튼 보여주고 / 일반 유저의 경우 신청하기 버튼 오픈
	// 멘토 중에서도 작성자의 경우만 수정/삭제 버튼이 활성화 되게 로직 작성
	// 일반 유저가 신청하기를 하고 모달로 post를 보냈을 경우 신청하기 버튼 비활성화

	const params = useParams();
	const path = params.portfolioId;

	const [contents, setContents] = useState({});
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const getContent = async () => {
			try {
				const res = await axios.get('/mock/mentor.json');
				const data = res.data.data;

				const newData = [...data];
				const dataIndex = newData.find(
					data => data.portfolioId === path,
				);

				setContents(dataIndex);
			} catch (err) {
				console.log(err);
			}
		};

		getContent();
	}, []);

	const handleOpenModal = () => {
		setOpenModal(prev => !prev);
	};

	const handleDelete = async () => {
		if (confirm('게시글을 삭제하시겠습니까?') === true) {
			await axios.delete('', path);
		}
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

						<S.ButtonBox>
							<Button
								variant={'primary'}
								shape={'default'}
								size={'normal'}
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
