import React, { useEffect, useMemo, useState } from 'react';
import { Space, theme } from 'antd';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import Searchbar from '../../../components/pages/Admin/Searchbar/Searchbar';
import axios from 'axios';
import { api } from '../../../utils/api';
import useApi from '../../../hooks/useApi';

const AdminHome = () => {
	// const data = [
	// 	{
	// 		key: '1',
	// 		name: '김현규',
	// 		nickname: '닉넴1',
	// 		email: 'eilce1@naver.com',
	// 	},
	// 	{
	// 		key: '2',
	// 		name: '김기범',
	// 		nickname: '닉넴2',
	// 		email: 'eilce2@naver.com',
	// 	},
	// 	{
	// 		key: '3',
	// 		name: '조아연',
	// 		nickname: '닉넴3',
	// 		email: 'eilce3@naver.com',
	// 	},
	// 	{
	// 		key: '4',
	// 		name: '이헤진',
	// 		nickname: '닉넴4',
	// 		email: 'eilce4@naver.com',
	// 	},
	// 	{
	// 		key: '5',
	// 		name: '예은선',
	// 		nickname: '닉넴5',
	// 		email: 'eilce5@naver.com',
	// 	},
	// 	{
	// 		key: '6',
	// 		name: '박민준',
	// 		nickname: '닉넴6',
	// 		email: 'eilce@naver.com',
	// 	},
	// ];
	const columns = [
		{
			title: '번호',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: '이름',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '닉네임',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: '이메일',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Removetag onClick={() => removeHandler(record.id)}>
						삭제
					</Removetag>
				</Space>
			),
		},
	];
	const [userData, setUsersData] = useState([]);
	// const [tableData, setTableData] = useState([]);

	/**
	 * 사용 예시
	 */
	// const { result, trigger, isLoading, error } = useApi({
	// 	path: '/users',
	// 	shouldFetch: true,
	// });

	// useEffect(() => {
	// 	if (result && result.length > 0) {
	// 		const modifiedData = result.map((item, index) => ({
	// 			...item,
	// 			key: index,
	// 			// id: item.id, // 번호 값을 index로부터 생성
	// 		}));
	// 		setUsersData(modifiedData);
	// 	}
	// }, [result]);

	// useEffect(() => {
	// 	console.log('useApi error :: \n', error);
	// }, [error]);

	// if (test1) {
	// }

	const getUserList = async () => {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users',
			);
			console.log(response.data);
			const modifiedData = response.data.map((item, index) => ({
				...item,
				key: index,
				// id: item.id, // 번호 값을 index로부터 생성
			}));
			setUsersData(modifiedData);
		} catch (error) {
			console.error('API 호출 중 오류:', error);
		}
	};
	useEffect(() => {
		getUserList();
	}, []);

	// console.log(userData);
	// console.log(data);

	const removeHandler = id => {
		console.log(id);
		setUsersData(data => data.filter(items => items.id !== id));
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<Searchbar type={'Search'} />
			{/* /로딩 컴포넌트 교체 예정 */}
			{/* {isLoading && <h2>IsLoading</h2>} */}
			<AdminTable
				columns={columns}
				dataSource={userData}
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
