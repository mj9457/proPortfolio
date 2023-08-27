import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './StudyPostDetail.styles';
import Button from '../../../components/@common/Button/Button';

function StudyPostDetail() {
	const { postId } = useParams();
	const [postDetail, setPostDetail] = useState(null);
	const [user, setUser] = useState(null);

	const navigate = useNavigate();

	console.log('게시글 상세 페이지 PostId 확인 @@', postId);

	const handleEditClick = () => {
		if (confirm('작성한 글을 수정할까요?')) {
			navigate(`/study/edit/${postId}`);
		}
	};

	// 마감한 게시글은 수정 및 마감 취소 불가능 =============================================
	const handleDeadLineClick = async () => {
		if (
			confirm(
				'마감한 게시글은 수정 및 마감 취소가 불가능해요.\n모집을 마감할까요? ',
			)
		) {
			try {
				const URL = '';
				// 마감 api
				const response = await axios.put(URL);
			} catch (error) {
				console.error(error);
			}
		}
	};

	const handleDeleteClick = async () => {
		if (confirm('게시글을 삭제할까요?')) {
			try {
				const URL = '';
				// 삭제 api
				const response = await axios.delete(URL);
			} catch (error) {
				console.error(error);
			}
		}
	};

	const handleLinkCopy = async () => {
		const link = 'https://www.naver.com/'; // 오픈 채팅 링크 가져오는 로직을 여기에 추가
		try {
			await navigator.clipboard.writeText(link);
			alert('링크가 클립보드에 복사되었습니다.');
		} catch (error) {
			console.error('클립보드 복사 실패');
		}
	};

	return (
		<>
			<S.Container>
				{/* 게시글 상단 정보 */}
				<S.PostDetailTop>
					<S.TitleContainer>
						<S.RecruitmentStatus>모집 중</S.RecruitmentStatus>
						<S.PostTitle>타이틀</S.PostTitle>
					</S.TitleContainer>
					<S.PostInfoContainer>
						{/* 작성자 정보 */}
						<S.UserProfileContainer>
							<S.UserProfileImage />
							<S.UserName>김건호</S.UserName>
						</S.UserProfileContainer>
						{/* 작성 날짜 */}
						<S.Date>2023. 08. 17. 목요일</S.Date>
					</S.PostInfoContainer>
				</S.PostDetailTop>
				{/* 게시글 하단 상세 정보 */}
				<S.PostDetailBottom>
					{/* 기본 정보 */}
					<S.PostDetailBasic>
						<S.PostDetailBottomTitle>
							기본 정보
						</S.PostDetailBottomTitle>

						<S.PostDetailBasicContainer>
							{/* 오른쪽 */}
							<S.PostDetailBasicList>
								<S.PostDetailBasicItem>
									<S.PostDetailBasicItemTitle>
										<p>모집 구분</p>
									</S.PostDetailBasicItemTitle>
									<p>프로젝트</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<S.PostDetailBasicItemTitle>
										<p>모집 인원</p>
									</S.PostDetailBasicItemTitle>
									<p>10명</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<S.PostDetailBasicItemTitle>
										<p>연락 방법</p>
									</S.PostDetailBasicItemTitle>
									<S.ContactBox>
										<S.ContactText>오픈 채팅</S.ContactText>
										<S.IconBox onClick={handleLinkCopy}>
											<span className="material-symbols-outlined">
												link
											</span>
										</S.IconBox>
									</S.ContactBox>
								</S.PostDetailBasicItem>
							</S.PostDetailBasicList>
							{/* 왼쪽 */}
							<S.PostDetailBasicList>
								<S.PostDetailBasicItem>
									<S.PostDetailBasicItemTitle>
										<p>진행 방식</p>
									</S.PostDetailBasicItemTitle>
									<p>온/오프라인</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<S.PostDetailBasicItemTitle>
										<p>마감 기간</p>
									</S.PostDetailBasicItemTitle>
									<p>2023-08-17</p>
								</S.PostDetailBasicItem>

								<S.PostDetailBasicItem>
									<S.PostDetailBasicItemTitle>
										<p>모집 분야</p>
									</S.PostDetailBasicItemTitle>
									<p>프론트엔드</p>
								</S.PostDetailBasicItem>
							</S.PostDetailBasicList>
						</S.PostDetailBasicContainer>
					</S.PostDetailBasic>

					{/* 상세 내용 */}
					<S.PostDetailMainTextBox>
						<S.PostDetailBottomTitle>소개</S.PostDetailBottomTitle>
						<S.PostDetailMainText>
							안녕하세요!
							<br />
							PM으로 일하기를 바라는 사람입니다. <br />
							<br />
							취업 위해서 포트폴리오용 사이드프로젝트를 진행하고자
							합니다. 1~3개월 정도 빠르게 진행하고자 합니다!!{' '}
							<br />
							<br />
							구현하고 싶은 서비스는 2개 정도있는데 1.고령화
							시대에 가족을 위한 서비스이며 2.학생들 공부를 위한
							서비스입니다.
							<br />
							<br />
							옾챗으로 연락주시면 자세히 설명드리도록 하겠습니다.{' '}
							<br />
							<br />
							프론트엔드 1명, 백엔드 1명, uxui 디자이너 1명
							<br />
							함께 성장하는 계기가 되었으면 좋겠습니다.
							<br />
							많은 지원 부탁드립니다!!
						</S.PostDetailMainText>
					</S.PostDetailMainTextBox>

					{/* {isUserPost && ( */}
					<S.ButtonContainer>
						<Button
							variant={'primary'}
							shape={'default'}
							size={'normal'}
							onClick={handleEditClick}
						>
							수정
						</Button>
						<Button
							variant={'cancel'}
							shape={'default'}
							size={'normal'}
							onClick={handleDeleteClick}
						>
							삭제
						</Button>
						<Button
							variant={'reverse'}
							shape={'default'}
							size={'normal'}
							onClick={handleDeadLineClick}
						>
							마감
						</Button>
						{/* 수정, 삭제, 마감 버튼 */}
					</S.ButtonContainer>
					{/* )} */}
				</S.PostDetailBottom>
			</S.Container>
		</>
	);
}

export default StudyPostDetail;
