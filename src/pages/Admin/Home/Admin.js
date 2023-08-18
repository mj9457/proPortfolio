import React, { useEffect, useMemo, useState } from 'react';
import { Space, theme } from 'antd';
import AdminTable from '../../../components/Admin/Table/AdminTable';
import { AdminContent, Removetag } from './Admin.styles';
import Searchbar from '../../../components/Admin/Searchbar/Searchbar';
const AdminHome = () => {
	const data = [
		{
			key: '1',
			name: '김현규',
			nickname: '닉넴1',
			email: 'eilce1@naver.com',
		},
		{
			key: '2',
			name: '김기범',
			nickname: '닉넴2',
			email: 'eilce2@naver.com',
		},
		{
			key: '3',
			name: '조아연',
			nickname: '닉넴3',
			email: 'eilce3@naver.com',
		},
		{
			key: '4',
			name: '이헤진',
			nickname: '닉넴4',
			email: 'eilce4@naver.com',
		},
		{
			key: '5',
			name: '예은선',
			nickname: '닉넴5',
			email: 'eilce5@naver.com',
		},
		{
			key: '6',
			name: '박민준',
			nickname: '닉넴6',
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
			title: '닉네임',
			dataIndex: 'nickname',
			key: 'nickname',
		},
		{
			title: '이메일',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: '버튼',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Removetag onClick={() => removeHandler(record.key)}>
						삭제
					</Removetag>
				</Space>
			),
		},
	];
	const modifiedData = data.map((item, index) => ({
		...item,
		key: String(index + 1), // 번호 값을 index로부터 생성
	}));
	const [tableData, setTableData] = useState(modifiedData);

	// useEffect(() => {
	// 	console.log('RENDER');
	// 	// setTableData(modifiedData);
	// }, [data]);

	const removeHandler = key => {
		console.log(key);
		setTableData(data => data.filter(items => items.key !== key));
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<Searchbar />
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		</AdminContent>
	);
};
export default AdminHome;

// <Layout
// 	style={{
// 		textAlign: 'center',
// 		background: colorBgContainer,
// 		backgroundColor: 'red',
// 	}}
// 	>
// 	</Layout>
// <AdminContent
// 	style={{
// 		// margin: '24px 16px',
// 		overflow: 'initial',
// 	}}
// >
// 	<div
// 		style={{
// 			padding: 24,
// 			textAlign: 'center',
// 			// background: colorBgContainer,
// 		}}
// 	>
// 		{/* {currentView} */}
// 		<AdminTable
// 			columns={columns}
// 			dataSource={data}
// 			totalPages={totalPages}
// 		/>
// 	</div>
// </AdminContent>

// <Layout>
// 	{/* <Layout
// 		className="site-layout"
// 		style={{
// 			marginLeft: 20,
// 			marginTop: 80,
// 			width: '100px',
// 		}}
// 	>

// 	</Layout> */}
// </Layout>
