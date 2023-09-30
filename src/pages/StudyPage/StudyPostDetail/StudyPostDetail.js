import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './StudyPostDetail.styles';
import Button from 'components/@common/Button';
import EditComments from 'components/pages/StudyPage/EditComments/EditComments';
import useApi from 'hooks/useApi';

import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';

import useFooter from 'hooks/useFooter';
import MESSAGE from 'constants/message';
import Review from 'components/@common/Review';
import LoadingBar from 'components/@common/Loading';

function StudyPostDetail() {
	useFooter();
	const { isAuth } = useRecoilValue(userAtom);
	const { postId } = useParams();
	const [isLoggedIn, setIsLoggedIn] = useState(isAuth);

	const [postDetail, setPostDetail] = useState(null);
	const [user, setUser] = useState(null);
	const [isRecruitClosed, setIsRecruitClosed] = useState(null);
	const navigate = useNavigate();

	const { result: userData } = useApi({
		path: isLoggedIn ? '/users' : '',
		shouldFetch: isLoggedIn,
	});

	useEffect(() => {
		if (userData) {
			setUser(userData);
		}
	}, [userData]);

	const { trigger, isLoading, error, result } = useApi({
		path: `/projectStudies/${postId}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result) {
			setPostDetail(result);
			setIsRecruitClosed(result.recruitsStatus === '모집마감');
		}
	}, [result, postDetail, isRecruitClosed]);

	const isUser = userData._id === result.ownerId;

	const {
		ownerId,
		profileImageUrl,
		recruitsStatus,
		position,
		classification,
		howContactTitle,
		howContactContent,
		createdAt,
		process,
		name,
		nickName,
		recruits,
		deadline,
		title,
		description,
	} = postDetail || {};

	// 수정
	const handleEditClick = () => {
		if (confirm(MESSAGE.POST.EDIT)) {
			navigate(`/study/edit/${postId}`);
		}
	};
	// 마감
	const handleDeadLineClick = async () => {
		if (confirm(MESSAGE.POST.DEADLINE)) {
			try {
				await trigger({
					method: 'put',
					path: `/projectStudies/${postId}`,
					data: {
						recruitsStatus: '모집마감',
					},
					applyResult: true,
				});
				setIsRecruitClosed(true);
			} catch (error) {
				console.error(error);
			}
		}
	};
	// 삭제
	const handleDeleteClick = async () => {
		if (confirm(MESSAGE.POST.DELETE)) {
			await trigger({
				method: 'delete',
				path: `/projectStudies/${postId}`,
			});
			navigate('/study');
		}
	};

	const handleLinkCopy = async () => {
		try {
			await navigator.clipboard.writeText(howContactContent);
			alert(MESSAGE.LINK.COMPLETE);
		} catch (error) {
			console.error(MESSAGE.ERROR.DEFAULT);
		}
	};

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
			<S.Container>
				{!isLoading ? (
					<>
						{/* 게시글 상단 정보 */}
						<S.PostDetailTop>
							<S.TitleContainer>
								<S.RecruitmentStatus
									$recruitsStatus={recruitsStatus}
								>
									{recruitsStatus}
								</S.RecruitmentStatus>

								<S.PostTitle>{title}</S.PostTitle>
							</S.TitleContainer>
							<S.PostInfoContainer>
								{/* 작성자 정보 */}
								<S.UserProfileContainer>
									{/* 프로필 이미지 */}
									<S.UserProfileImage src={profileImageUrl} />
									<S.UserName>{nickName}</S.UserName>
								</S.UserProfileContainer>
								{/* 작성 날짜 */}
								<S.Date>
									{createdAt && dateAndTime(createdAt)}
								</S.Date>
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
											<p>{classification}</p>
										</S.PostDetailBasicItem>

										<S.PostDetailBasicItem>
											<S.PostDetailBasicItemTitle>
												<p>모집 인원</p>
											</S.PostDetailBasicItemTitle>
											<p>{recruits}</p>
										</S.PostDetailBasicItem>

										<S.PostDetailBasicItem>
											<S.PostDetailBasicItemTitle>
												<p>연락 방법</p>
											</S.PostDetailBasicItemTitle>
											<S.ContactBox>
												<S.ContactText>
													{howContactTitle}
												</S.ContactText>
												<S.IconBox
													onClick={handleLinkCopy}
												>
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
											<p>{process}</p>
										</S.PostDetailBasicItem>

										<S.PostDetailBasicItem>
											<S.PostDetailBasicItemTitle>
												<p>마감 기간</p>
											</S.PostDetailBasicItemTitle>

											<p>
												{deadline
													? deadline
															.split('T')[0]
															.replace(/-/g, '. ')
													: ''}
											</p>
										</S.PostDetailBasicItem>

										<S.PostDetailBasicItem>
											<S.PostDetailBasicItemTitle>
												<p>모집 분야</p>
											</S.PostDetailBasicItemTitle>
											<p>
												{position
													? position.join(', ')
													: ''}
											</p>
										</S.PostDetailBasicItem>
									</S.PostDetailBasicList>
								</S.PostDetailBasicContainer>
							</S.PostDetailBasic>

							{/* 상세 내용 */}
							<S.PostDetailMainTextBox>
								<S.PostDetailBottomTitle>
									소개
								</S.PostDetailBottomTitle>
								<S.PostDetailMainText>
									{description}
								</S.PostDetailMainText>
							</S.PostDetailMainTextBox>
							{isUser ? (
								<S.ButtonContainer>
									<Button
										variant={'cancel'}
										shape={'default'}
										size={'normal'}
										onClick={handleDeleteClick}
									>
										삭제
									</Button>
									{isRecruitClosed ? (
										<></>
									) : (
										<>
											<Button
												variant={'primary'}
												shape={'default'}
												size={'normal'}
												onClick={handleEditClick}
											>
												수정
											</Button>

											<Button
												variant={'reverse'}
												shape={'default'}
												size={'normal'}
												onClick={handleDeadLineClick}
											>
												마감
											</Button>
										</>
									)}
								</S.ButtonContainer>
							) : (
								<></>
							)}

							<S.CommentContainer>
								<EditComments
									isLoggedIn={isLoggedIn}
									userData={user}
									title={'댓글'}
								/>
								<Review
									title={'댓글'}
									getUrl={`/projectStudies/${postId}`}
								/>
							</S.CommentContainer>
						</S.PostDetailBottom>
					</>
				) : (
					<LoadingBar />
				)}
			</S.Container>
		</>
	);
}

export default StudyPostDetail;
