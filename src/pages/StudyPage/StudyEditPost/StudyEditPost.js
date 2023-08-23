import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './StudyEditPost.styles';
import { STUDYOPTIONS } from '../../../constants/study';
import Select from '../../../components/@common/Select/Select';
import Button from '../../../components/@common/Button/Button';
import Textarea from '../../../components/@common/Textarea/Textarea';
import PostForm from '../../../components/pages/StudyPage/StudyEditPost/PostForm/PostForm';
import MultiSelectDropdown from '../../../components/pages/StudyPage/StudyEditPost/MultiSelectDropdown/MultiSelectDropdown';

function StudyEditPost() {
	const [selectedOptions, setSelectedOptions] = useState({
		category: 'study',
		proceed: 'online',
		position: 'frontend',
		personnel: 'one',
		contact: 'discord',
		link: '',
	});

	// 중복 코드?
	const handleSelectChange = (name, value) => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			[name]: value,
		}));
	};

	// 중복 코드?
	const handlePositionsChange = positions => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			position: positions,
		}));
	};

	console.log(selectedOptions);

	return (
		<>
			<S.Container>
				{/* 기본 정보 */}
				<S.BasicInfoBox>
					<S.Title>
						✨ 프로젝트/스터디 기본 정보를 작성 해주세요.
					</S.Title>
					<S.SelectContainer>
						<S.SelectWrapper>
							<S.SelectBox>
								<S.SelectTitle>모집 구분</S.SelectTitle>
								<Select
									options={STUDYOPTIONS.CATEGORY}
									size={'large'}
									font={'regular'}
									onChange={e => {
										handleSelectChange(
											'category',
											e.target.value,
										);
									}}
									value={selectedOptions.category}
								/>
							</S.SelectBox>

							<S.SelectBox>
								<S.SelectTitle>진행 방식</S.SelectTitle>
								<Select
									options={STUDYOPTIONS.PROCEED}
									size={'large'}
									font={'regular'}
									onChange={e => {
										handleSelectChange(
											'proceed',
											e.target.value,
										);
									}}
									value={selectedOptions.proceed}
								/>
							</S.SelectBox>
						</S.SelectWrapper>

						<S.SelectWrapper>
							<S.SelectBox>
								<S.SelectTitle>모집 직무</S.SelectTitle>
								<MultiSelectDropdown
									onPositionsChange={handlePositionsChange}
								/>
							</S.SelectBox>

							<S.SelectBox>
								<S.SelectTitle>모집 인원</S.SelectTitle>
								<Select
									options={STUDYOPTIONS.PERSONNEL}
									size={'large'}
									font={'regular'}
									onChange={e => {
										handleSelectChange(
											'personnel',
											e.target.value,
										);
									}}
									value={selectedOptions.personnel}
								/>
							</S.SelectBox>
						</S.SelectWrapper>

						<S.SelectWrapper>
							<S.SelectBox>
								<S.Deadline>모집 마감일</S.Deadline>
								{/* datepicker */}
							</S.SelectBox>

							<S.SelectBox>
								<S.SelectTitle>연락 방법</S.SelectTitle>
								<Select
									options={STUDYOPTIONS.CONTACT}
									size={'large'}
									font={'regular'}
									onChange={e => {
										handleSelectChange(
											'contact',
											e.target.value,
										);
									}}
									value={selectedOptions.contact}
								/>
							</S.SelectBox>
						</S.SelectWrapper>
						{/* 컴포넌트 */}
						<S.Input
							placeholder="연락 가능한 링크를 입력해주세요. ex) 오픈채팅 링크"
							onChange={e => {
								handleSelectChange('link', e.target.value);
							}}
							required
						/>
					</S.SelectContainer>
				</S.BasicInfoBox>

				{/* 상세 설명 */}
				<S.PostBox>
					<S.Title>✨ 프로젝트/스터디를 소개 해주세요.</S.Title>
					<PostForm selectedOptions={selectedOptions} />
				</S.PostBox>
			</S.Container>
		</>
	);
}

export default StudyEditPost;
