import { useState } from 'react';
import { SearchInput } from '../../../Components/Admin/Searchbar/Searchbar.styles';
import AdminTable from '../../../Components/Admin/Table/AdminTable';
import { AdminContent, Removetag } from '../Home/Admin.styles';
import { Space, theme } from 'antd';
import { Atags } from '../Category/AdminCategory.styles';

const AdminMentorApply = () => {
	const data = [
		{
			key: '1',
			name: '김현규',
			email: 'eilce1@naver.com',
		},
		{
			key: '2',
			name: '김기범',
			email: 'eilce2@naver.com',
		},
		{
			key: '3',
			name: '조아연',
			email: 'eilce3@naver.com',
		},
		{
			key: '4',
			name: '이헤진',
			email: 'eilce4@naver.com',
		},
		{
			key: '5',
			name: '예은선',
			email: 'eilce5@naver.com',
		},
		{
			key: '6',
			name: '박민준',
			email: 'eilce@naver.com',
		},
	];
	const columns = [
		{
			title: '번호',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: '이름',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '이메일',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: '신청서',
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
					<div>
						<Atags
							onClick={() => {
								approveHandler(record.key);
							}}
						>
							승인
						</Atags>
						<Removetag onClick={() => refuseHandler(record.key)}>
							거절
						</Removetag>
					</div>
				</Space>
			),
		},
	];
	// 거절
	const refuseHandler = key => {
		console.log(key);
		// setTableData(data => data.filter(items => items.key !== key));
	};
	// 자세히 보기
	const openApplyModal = () => {
		console.log('OPEN');
	};
	const approveHandler = () => {};
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
export default AdminMentorApply;
