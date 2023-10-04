import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './index.styles';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import { STUDYOPTIONS } from 'constants/study';

import MultiSelectDropdown from 'components/pages/StudyPage/StudyEditPost/MultiSelectDropdown';
import PostForm from 'components/pages/StudyPage/StudyEditPost/PostForm';
import useApi from 'hooks/useApi';
import SelectWithDefault from 'components/@common/SelectWithDefault';
import useFooter from 'hooks/useFooter';
import Calendar from 'components/pages/StudyPage/Calendar';

function StudyEditPost() {
	useFooter();
	const [isEdit, setIsEdit] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState({
		classification: '',
		process: '',
		position: [],
		recruits: '',
		howContactTitle: '',
		howContactContent: '',
		deadline: new Date(),
		nickName: '',
		name: '',
		recruitsStatus: '모집중',
		profileImageUrl: '',
	});

	const params = useParams();
	const postId = params.postId;

	// 유저 정보
	const { result: userData, trigger: getUserData } = useApi({
		path: '/users',
		shouldFetch: true,
	});

	// 게시글 정보
	const { result: postData, trigger: getEditPostData } = useApi({
		path: `/projectStudies/${postId}`,
		shouldFetch: !!postId,
	});

	useEffect(() => {
		if (userData) {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				nickName: userData.nickName,
				name: userData.name,
				ownerId: userData._id,
				profileImageUrl: userData.profileImageUrl,
			}));
		}
	}, [userData]);

	useEffect(() => {
		if (postId) {
			getEditPostData({
				path: `/projectStudies/${postId}`,
			});
		}
	}, [postId]);

	useEffect(() => {
		if (postData._id) {
			setIsEdit(true);

			const initialDeadline = new Date(selectedOptions.deadline);
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				classification: postData.classification,
				process: postData.process,
				position: postData.position,
				recruits: postData.recruits,
				howContactTitle: postData.howContactTitle,
				howContactContent: postData.howContactContent,
				deadline: initialDeadline,
				nickName: userData.nickName,
				name: userData.name,
				ownerId: userData._id,
				profileImageUrl: userData.profileImageUrl,
				recruitsStatus: '모집중',
			}));
		}
	}, [postData._id]);

	const handleOptionChange = (name, value) => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			[name]: value,
		}));
	};

	return (
		<S.Container>
			<S.BasicInfoBox>
				<S.Title>
					<img src="/assets/img/icons/stars.svg" alt="별 아이콘" />
					스터디 / 프로젝트 기본 정보를 작성해 주세요.
				</S.Title>
				<S.SelectContainer>
					<S.SelectWrapper>
						<S.SelectBox>
							<S.SelectTitle>모집 구분</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.CLASSIFICATION}
								selectedOption={selectedOptions.classification}
								selectText="모집 구분"
								name="classification"
								onChange={handleOptionChange}
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>진행 방식</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.PROCESS}
								selectedOption={selectedOptions.process}
								selectText="진행 방식"
								name="process"
								onChange={handleOptionChange}
							/>
						</S.SelectBox>
					</S.SelectWrapper>

					<S.SelectWrapper>
						<S.SelectBox>
							<S.SelectTitle>모집 직무</S.SelectTitle>
							<MultiSelectDropdown
								onPositionsChange={position => {
									handleOptionChange('position', position);
								}}
								name="position"
								selectedData={selectedOptions.position}
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>모집 인원</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.RECRUITS}
								selectedOption={selectedOptions.recruits}
								selectText="모집 인원"
								name="recruits"
								onChange={handleOptionChange}
							/>
						</S.SelectBox>
					</S.SelectWrapper>

					<S.SelectWrapper>
						<S.SelectBox>
							<S.Deadline>모집 마감일</S.Deadline>
							<Calendar />
							{/* <DatePicker
								selected={new Date(selectedOptions.deadline)}
								onChange={date =>
									handleOptionChange('deadline', date)
								}
								dateFormat="yyyy-MM-dd"
								minDate={new Date()}
								popperPlacement="bottom"
								name="deadline"
							/> */}
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>연락 방법</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.CONTACT}
								selectedOption={selectedOptions.howContactTitle}
								selectText="연락 방법"
								name="howContactTitle"
								onChange={handleOptionChange}
							/>
						</S.SelectBox>
					</S.SelectWrapper>
					<S.Input
						placeholder="연락 가능한 링크를 입력해 주세요. ex) 오픈채팅 링크"
						name="howContactContent"
						onChange={e =>
							handleOptionChange(
								'howContactContent',
								e.target.value,
							)
						}
						required
						value={selectedOptions.howContactContent || ''}
					/>
				</S.SelectContainer>
			</S.BasicInfoBox>

			{/* 상세 설명 */}
			<S.PostBox>
				<S.Title>
					{' '}
					<img src="/assets/img/icons/stars.svg" alt="별 아이콘" />
					스터디 / 프로젝트를 소개해 주세요.
				</S.Title>
				<PostForm
					selectedOptions={selectedOptions}
					postId={postId}
					postData={postData}
				/>
			</S.PostBox>
		</S.Container>
	);
}

export default StudyEditPost;
