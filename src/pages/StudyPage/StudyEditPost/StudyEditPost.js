import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './StudyEditPost.styles';
import { STUDYOPTIONS } from '../../../constants/study';
import Select from '../../../components/@common/Select/Select';
import MultiSelectDropdown from '../../../components/pages/StudyPage/StudyEditPost/MultiSelectDropdown/MultiSelectDropdown';
import PostForm from '../../../components/pages/StudyPage/StudyEditPost/PostForm/PostForm';

function StudyEditPost() {
	const defaultSelectProps = {
		size: 'large',
		font: 'regular',
	};

	const [selectedOptions, setSelectedOptions] = useState({
		category: '',
		proceed: '',
		position: '',
		personnel: '',
		contact: '',
		link: '',
		deadline: new Date(),
	});

	const handleOptionChange = (name, value) => {
		if (name === 'positions') {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				position: value,
			}));
		} else {
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				[name]: value,
			}));
		}
	};

	const handleDateChange = date => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			deadline: date,
		}));
	};

	const SelectWithDefault = ({
		options,
		selectedValue,
		defaultValue,
		onChange,
	}) => {
		return (
			<Select
				{...defaultSelectProps}
				onChange={onChange}
				value={selectedValue}
			>
				<option hidden>{defaultValue}을 선택해주세요.</option>
				{options.map(el => (
					<option key={el.value}>{el.name}</option>
				))}
			</Select>
		);
	};

	return (
		<S.Container>
			<S.BasicInfoBox>
				<S.Title>✨ 프로젝트/스터디 기본 정보를 작성 해주세요.</S.Title>
				<S.SelectContainer>
					<S.SelectWrapper>
						<S.SelectBox>
							<S.SelectTitle>모집 구분</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.CATEGORY}
								selectedValue={selectedOptions.category}
								defaultValue="모집 구분"
								onChange={e =>
									handleOptionChange(
										'category',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>진행 방식</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.PROCEED}
								selectedValue={selectedOptions.proceed}
								defaultValue="진행 방식"
								onChange={e =>
									handleOptionChange(
										'proceed',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>
					</S.SelectWrapper>

					<S.SelectWrapper>
						<S.SelectBox>
							<S.SelectTitle>모집 직무</S.SelectTitle>
							<MultiSelectDropdown
								onPositionsChange={positions =>
									handleOptionChange('positions', positions)
								}
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>모집 인원</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.PERSONNEL}
								selectedValue={selectedOptions.personnel}
								defaultValue="모집 인원"
								onChange={e =>
									handleOptionChange(
										'personnel',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>
					</S.SelectWrapper>

					<S.SelectWrapper>
						<S.SelectBox>
							<S.Deadline>모집 마감일</S.Deadline>
							<DatePicker
								selected={selectedOptions.deadline}
								onChange={handleDateChange}
								dateFormat="yyyy-MM-dd"
								minDate={new Date()}
								popperPlacement="bottom"
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>연락 방법</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.CONTACT}
								selectedValue={selectedOptions.contact}
								defaultValue="연락 방법"
								onChange={e =>
									handleOptionChange(
										'contact',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>
					</S.SelectWrapper>
					<S.Input
						placeholder="연락 가능한 링크를 입력해주세요. ex) 오픈채팅 링크"
						onChange={e =>
							handleOptionChange('link', e.target.value)
						}
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
	);
}

export default StudyEditPost;
