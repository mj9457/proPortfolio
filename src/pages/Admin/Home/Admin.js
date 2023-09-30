import React, { useEffect, useMemo, useState } from 'react';
import { Pagination, Space, theme } from 'antd';
import { AdminContent } from 'components/pages/Admin/Common/Common.styles';
import AdminTable from 'components/pages/Admin/Table';
import useApi from 'hooks/useApi';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';
import { PaginationWrap } from './Admin.styles';
import LoadingBar from 'components/@common/Loading';

const AdminHome = () => {
	const { result, trigger, isLoading, error } = useApi({
		path: '/admin/users',
		shouldFetch: true,
	});
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
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	// const [tableData, setTableData] = useState([]);

	/**
	 * 사용 예시
	 */

	useEffect(() => {
		console.log(result);
		if (result.users) {
			const startIndex = (currentPage - 1) * 10;
			// console.log(result.users.length);
			setUsersData(
				result.users.map((item, index) => ({
					...item,
					key: startIndex + index + 1,
				})),
			);
		}
		setTotalPages(result.totalCount);
	}, [result]);
	// const memoColumns = useMemo(() => [], [currentPage]);
	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={userData}
				totalPages={totalPages}
			/>
		),
		[userData, totalPages],
	);

	const removeHandler = async userId => {
		await trigger({
			method: 'delete',
			path: `/admin/user/${userId}`,
			applyResult: true,
		});

		// console.log(result);
		if (result.users.length === 1) {
			await trigger({
				data: {
					skip: (currentPage - 1) * 10 - 10,
				},
				applyResult: true,
			});
			setCurrentPage(prev => prev - 1);
		} else {
			await trigger({
				data: {
					skip: currentPage * 10 - 10,
				},
				applyResult: true,
			});
		}
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const pageChange = async pageNumber => {
		// console.log(pageNumber);

		await trigger({
			path: '/admin/users',
			data: {
				skip: pageNumber * 10 - 10,
			},
			applyResult: true,
		});
		setCurrentPage(pageNumber);
		// console.log(pageNumber);
	};
	return (
		<AdminContent background={colorBgContainer}>
			{/* <Searchbar type={'Search'} /> */}
			{/* /로딩 컴포넌트 교체 예정 */}
			{isLoading ? (
				<LoadingBar />
			) : (
				<>
					{memoResult}
					<PaginationWrap>
						<Pagination
							current={currentPage}
							defaultCurrent={currentPage}
							total={totalPages}
							onChange={e => {
								pageChange(e);
							}}
						/>
					</PaginationWrap>
				</>
			)}
		</AdminContent>
	);
};
export default AdminHome;
