import { Select, Space, theme } from 'antd';

import { useState } from 'react';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';

const AdminMentorBoardList = () => {
	const data = [
		{
			key: '1',
			job: '프론트 엔드',
			maintitle: '프론트 엔드의 기본',
			name: '김현규',
		},
		{
			key: '2',
			job: '백엔드 ',
			maintitle: 'Spring으로 백엔드',
			name: '김기범',
		},
		{
			key: '3',
			job: 'ios 개발',
			maintitle: 'Swift 강의함',
			name: '조아연',
		},
		{
			key: '4',
			job: '백엔드 엔드',
			maintitle: 'node의 모든것',
			name: '이헤진',
		},
		{
			key: '5',
			job: '프론트 엔드 ',
			maintitle: 'React 장인',
			name: '예은선',
		},
		{
			key: '6',
			job: '백엔드 ',
			maintitle: 'Nest.js의 시작',
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
			title: '직무',
			dataIndex: 'job',
			key: 'job',
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
export default AdminMentorBoardList;
