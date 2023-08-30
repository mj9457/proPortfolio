import { Select, Space, theme } from 'antd';

import { useEffect, useMemo, useState } from 'react';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import useApi from '../../../hooks/useApi';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';

const AdminStudyProject = () => {
	// const { Option } = Select;
	const [tableData, setTableData] = useState();
	const [classification, setClassification] = useState('all');

	const { result, trigger, isLoading, error } = useApi({
		path: '/projectStudy',
		shouldFetch: true,
	});
	const columns = [
		{
			title: '글 번호',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: (
				<Select
					defaultValue={classification}
					style={{ width: 100 }}
					options={[
						{ value: 'all', label: '전체' },
						{ value: 'project', label: '프로젝트' },
						{ value: 'study', label: '스터디' },
					]}
					onChange={e => {
						changeSelectValue(e);
					}}
				/>
			),
			key: 'classification',
			dataIndex: 'classification',
		},
		{
			title: '제목',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: '작성자',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '게시글',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<a
						// http://localhost:3000/study/detail/4
						href={`http://localhost:3000/study/detail/${record._id}`}
						// href={`http://34.64.245.195/study/detail/${record._id}`}
						target="_blank"
						rel="noopener noreferrer"
						// onClick={() => {
						// 	openNewWindow(record._id);
						// }}
					>
						자세히 보기
					</a>
				</Space>
			),
		},
		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<HandlerButton onClick={() => removeHandler(record._id)}>
						삭제
					</HandlerButton>
				</Space>
			),
		},
	];

	// select option이 변경될 때

	useEffect(() => {
		console.log(result);
		if (result && result.length > 0) {
			setTableData(
				result.map((item, index) => ({
					...item,
					key: index + 1,
				})),
			);
		}
	}, [result]);
	const memoColumns = useMemo(() => [], [classification]);
	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		),
		[tableData, memoColumns],
	);
	const changeSelectValue = async e => {
		console.log(e);
		if (e === 'study') {
			trigger({
				params: {
					classification: '스터디',
				},
				applyResult: true,
			});
			setClassification('study');
			// Todo 스터디만 가져오는 API
		} else if (e === 'project') {
			trigger({
				params: {
					classification: '프로젝트',
				},
				applyResult: true,
			});
			setClassification('project');
		} else if (e === 'all') {
			trigger({ path: '/projectStudy' });
			setClassification('all');
		}
	};
	const removeHandler = async key => {
		await trigger({
			path: `/admin/${key}`,
			method: 'delete',
			applyResult: true,
		});
	};
	// 자세히 보기

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<SearchInput
				enterButton="검색"
				placeholder=""
				// onSearch={e => addCategoryHandler(e)}
			/>
			{isLoading ? <h2>로딩중</h2> : memoResult}
		</AdminContent>
	);
};
export default AdminStudyProject;
