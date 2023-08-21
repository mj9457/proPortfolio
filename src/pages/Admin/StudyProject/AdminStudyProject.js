import { Select, Space, theme } from 'antd';

import { useState } from 'react';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';

const AdminStudyProject = () => {
	const { Option } = Select;
	const data = [
		{
			key: '1',
			type: '프로젝트',
			maintitle: '쇼핑몰 프로젝트 모집',
			name: '김현규',
		},
		{
			key: '2',
			type: '스터디',
			maintitle: '공부하실분',
			name: '김기범',
		},
		{
			key: '3',
			type: '스터디',
			maintitle: '프론트 스터디 모집',
			name: '조아연',
		},
		{
			key: '4',
			type: '스터디',
			maintitle: 'JavaScript 알고리즘 스터디',
			name: '이헤진',
		},
		{
			key: '5',
			type: '프로젝트',
			maintitle: '클론 프로젝트 팀원 모집',
			name: '예은선',
		},
		{
			key: '6',
			type: '스터디',
			maintitle: '백엔드 스터디 모집',
			name: '박민준',
		},
	];
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
			key: 'type',
			dataIndex: 'type',
		},
		{
			title: '제목',
			dataIndex: 'maintitle',
			key: 'maintitle',
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
						onClick={() => {
							openApplyModal(record);
						}}
					>
						자세히 보기
					</a>
				</Space>
			),
		},
		{
			title: '버튼',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Removetag onClick={() => refuseHandler(record.key)}>
						삭제
					</Removetag>
				</Space>
			),
		},
	];
	// select option이 변경될 때
	const changeSelectValue = e => {
		console.log(modifiedData);
		// 한 페이지에 나타낼 개수대로 가져오는 api 협의
		if (e === 'study') {
			// Todo 스터디만 가져오는 API
			setTableData(data.filter(item => item.type === '스터디'));
		} else if (e === 'project') {
			// Todo 프로젝트만 가져오는 API
			setTableData(data.filter(item => item.type === '프로젝트'));
		} else {
			// 구분없이 가져오는 API
			setTableData(modifiedData);
		}
	};
	const refuseHandler = key => {
		// Todo
		// 거절 후 filter로 재배열
		// 처리한 신청서는 없어져야함
	};
	// 자세히 보기
	const openApplyModal = () => {
		console.log('OPEN');
	};
	const modifiedData = data.map((item, index) => ({
		...item,
		key: String(index + 1), // 번호 값을 index로부터 생성
	}));
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const [tableData, setTableData] = useState(modifiedData);

	return (
		<AdminContent background={colorBgContainer}>
			<SearchInput
				enterButton="검색"
				placeholder=""
				// onSearch={e => addCategoryHandler(e)}
			/>
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		</AdminContent>
	);
};
export default AdminStudyProject;
