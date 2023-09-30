import { Pagination, Select, Space, theme } from 'antd';

import { useEffect, useMemo, useState } from 'react';

import AdminTable from 'components/pages/Admin/Table/AdminTable';
import { AdminContent } from 'components/pages/Admin/Common/Common.styles';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';
import useApi from 'hooks/useApi';
import { PaginationWrap } from '../Home/Admin.styles';
import LoadingBar from 'components/@common/Loading';

const AdminMentorBoardList = () => {
	const [tableData, setTableData] = useState();
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	// select option이 변경될 때
	const { result, trigger, isLoading, error } = useApi({
		path: '/admin/portfolios',
		shouldFetch: true,
	});
	const columns = [
		{
			title: '번호',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: '직무',
			dataIndex: 'position',
			key: 'position',
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
						href={`/portfolio/post/${record._id}`}
						// href={`http://34.64.245.195/study/detail/${record._id}`}
						target="_blank"
						rel="noopener noreferrer"
						// onClick={() => {
						// 	openApplyModal(record);
						// }}
					>
						자세히 보기
					</a>
				</Space>
			),
		},
		{
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<HandlerButton
						onClick={() => removeHandler(record._id, record.key)}
					>
						삭제
					</HandlerButton>
				</Space>
			),
		},
	];

	useEffect(() => {
		// console.log(result);
		if (result.portfolios) {
			const startIndex = (currentPage - 1) * 10;
			const modifiedData = result.portfolios.map((item, index) => ({
				...item,
				key: startIndex + index + 1, // 번호 값을 index로부터 생성
			}));
			setTableData(modifiedData);
		}
		setTotalPages(result.totalCount);
		// if (result.totalCount) {
		// }
	}, [result]);

	const memoResult = useMemo(
		() => (
			<>
				<AdminTable columns={columns} dataSource={tableData} />
			</>
		),
		[tableData],
	);
	const pageChange = async pageNumber => {
		// console.log(pageNumber);

		await trigger({
			path: '/admin/portfolios',
			data: {
				skip: pageNumber * 10 - 10,
			},
			applyResult: true,
		});
		setCurrentPage(pageNumber);
	};
	const removeHandler = async (key, index) => {
		await trigger({
			path: `/admin/portfolio/${key}`,
			method: 'delete',
			applyResult: true,
		});
		if (result.portfolios.length === 1) {
			if (index === 1) {
				await trigger({
					data: {
						skip: (currentPage - 1) * 10 - 10,
					},
				});
			} else {
				await trigger({
					data: {
						skip: (currentPage - 1) * 10 - 10,
					},
					applyResult: true,
				});
			}
			// console.log(currentPage);
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
	// 자세히 보기
	// const openApplyModal = () => {
	// 	console.log('OPEN');
	// };

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			{/* <SearchInput
				enterButton="검색"
				placeholder=""
				// onSearch={e => addCategoryHandler(e)}
			/> */}
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
export default AdminMentorBoardList;
