import { Select, Space, theme } from 'antd';

import { useEffect, useState } from 'react';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import useApi from '../../../hooks/useApi';
import { useNavigate } from 'react-router-dom';

const AdminStudyProject = () => {
	const naviagte = useNavigate();
	const { Option } = Select;
	// const data = [
	// 	{
	// 		key: '1',
	// 		type: '프로젝트',
	// 		maintitle: '쇼핑몰 프로젝트 모집',
	// 		name: '김현규',
	// 	},
	// 	{
	// 		key: '2',
	// 		type: '스터디',
	// 		maintitle: '공부하실분',
	// 		name: '김기범',
	// 	},
	// 	{
	// 		key: '3',
	// 		type: '스터디',
	// 		maintitle: '프론트 스터디 모집',
	// 		name: '조아연',
	// 	},
	// 	{
	// 		key: '4',
	// 		type: '스터디',
	// 		maintitle: 'JavaScript 알고리즘 스터디',
	// 		name: '이헤진',
	// 	},
	// 	{
	// 		key: '5',
	// 		type: '프로젝트',
	// 		maintitle: '클론 프로젝트 팀원 모집',
	// 		name: '예은선',
	// 	},
	// 	{
	// 		key: '6',
	// 		type: '스터디',
	// 		maintitle: '백엔드 스터디 모집',
	// 		name: '박민준',
	// 	},
	// ];
	const columns = [
		{
			title: '글 번호',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: (
				<Select
					defaultValue="all"
					style={{ width: 100 }}
					options={[
						{ value: 'all', label: '전체' },
						{ value: 'project', label: '프로젝트' },
						{ value: 'study', label: '스터디' },
					]}
					onChange={e => {
						changeSelectValue(e);
					}}
				>
					<Option value="all">전체</Option>
					<Option value="project">프로젝트</Option>
					<Option value="study">스터디</Option>
				</Select>
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
					<Removetag onClick={() => removeHandler(record._id)}>
						삭제
					</Removetag>
				</Space>
			),
		},
	];
	const [tableData, setTableData] = useState();

	// select option이 변경될 때
	const { result, trigger, isLoading, error } = useApi({
		path: '/admin',
		shouldFetch: true,
	});
	useEffect(() => {
		if (result && result.length > 0) {
			const modifiedData = result.map((item, index) => ({
				...item,
				key: index + 1,
				// id: item.id, // 번호 값을 index로부터 생성
			}));
			setTableData(modifiedData);
		}
	}, [result]);
	console.log(tableData);
	const changeSelectValue = e => {
		// console.log(modifiedData);
		// // 한 페이지에 나타낼 개수대로 가져오는 api 협의
		// if (e === 'study') {
		// 	// Todo 스터디만 가져오는 API
		// 	setTableData(data.filter(item => item.type === '스터디'));
		// } else if (e === 'project') {
		// 	// Todo 프로젝트만 가져오는 API
		// 	setTableData(data.filter(item => item.type === '프로젝트'));
		// } else {
		// 	// 구분없이 가져오는 API
		// 	setTableData(modifiedData);
		// }
	};
	const removeHandler = async key => {
		await trigger({
			path: `/admin/${key}`,
			method: 'delete',
		});
		trigger({ method: 'get', path: '/admin' });
		// Todo
		// 거절 후 filter로 재배열
		// 처리한 신청서는 없어져야함
	};
	// 자세히 보기
	const openNewWindow = () => {
		// console.log('OPEN');
		// naviagte('/stu')
	};
	// const modifiedData = data.map((item, index) => ({
	// 	...item,
	// 	key: String(index + 1), // 번호 값을 index로부터 생성
	// }));
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
			{isLoading ? (
				<h2>로딩중</h2>
			) : (
				<AdminTable
					columns={columns}
					dataSource={tableData}
					totalPages={0}
				/>
			)}
		</AdminContent>
	);
};
export default AdminStudyProject;
