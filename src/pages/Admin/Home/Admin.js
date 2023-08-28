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
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';

const AdminHome = () => {
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
			dataIndex: 'nickName',
			key: 'nickName',
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
					<HandlerButton onClick={() => removeHandler(record._id)}>
						삭제
					</HandlerButton>
				</Space>
			),
		},
	];
	const [userData, setUsersData] = useState([]);
	// const [tableData, setTableData] = useState([]);

	/**
	 * 사용 예시
	 */
	const { result, trigger, isLoading, error } = useApi({
		path: '/admin/user',
		shouldFetch: true,
	});
	console.log(result);
	useEffect(() => {
		getData();
	}, [result]);

	const getData = () => {
		if (result && result.length > 0) {
			const modifiedData = result.map((item, index) => ({
				...item,
				key: index + 1,
				// id: item.id, // 번호 값을 index로부터 생성
			}));
			setUsersData(modifiedData);
		}
	};

	// useEffect(() => {
	// 	console.log('useApi error :: \n', error);
	// }, [error]);

	const removeHandler = async userId => {
		console.log(userId);

		await trigger({
			method: 'delete',
			path: `/admin/user/${userId}`,
		});
		trigger({ method: 'get', path: '/admin/user' });
		// setUsersData(data => data.filter(items => items.id !== id));
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<Searchbar type={'Search'} />
			{/* /로딩 컴포넌트 교체 예정 */}
			{isLoading ? (
				<h2>IsLoading</h2>
			) : (
				<AdminTable
					columns={columns}
					dataSource={userData}
					totalPages={userData.length}
				/>
			)}
		</AdminContent>
	);
};
export default AdminHome;
