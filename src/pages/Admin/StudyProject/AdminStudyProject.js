import { Pagination, Select, Space, theme } from 'antd';

import { useEffect, useMemo, useState } from 'react';

import AdminTable from 'components/pages/Admin/Table/AdminTable';
import { AdminContent } from 'components/pages/Admin/Common/Common.styles';
import useApi from 'hooks/useApi';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';
import { PaginationWrap } from '../Home/Admin.styles';
import LoadingBar from 'components/@common/Loading/LoadingBar';

const AdminStudyProject = () => {
	// const { Option } = Select;
	const [tableData, setTableData] = useState();
	const [currentclassification, setCurrentClassification] = useState('');
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const { result, trigger, isLoading, error } = useApi({
		path: 'admin/projectStudies',
		shouldFetch: true,
	});
	const columns = [
		{
			title: '번호',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: (
				<Select
					defaultValue={currentclassification}
					style={{ width: 100 }}
					options={[
						{ value: '', label: '전체' },
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
						href={`/study/detail/${record._id}`}
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
					<HandlerButton
						onClick={() => removeHandler(record._id, record.key)}
					>
						삭제
					</HandlerButton>
				</Space>
			),
		},
	];

	// select option이 변경될 때

	useEffect(() => {
		// console.log(result);
		if (result.projectStudies) {
			const startIndex = (currentPage - 1) * 10;
			setTableData(
				result.projectStudies.map((item, index) => ({
					...item,
					key: startIndex + index + 1,
				})),
			);
		}

		setTotalPages(result.totalCount);
	}, [result]);
	const memoColumns = useMemo(() => [], [currentclassification]);
	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		),
		[tableData, memoColumns, currentPage],
	);
	const changeSelectValue = async e => {
		// console.log(currentPage);
		if (e === 'study') {
			trigger({
				data: {
					classification: '스터디',
					skip: 0,
				},
				applyResult: true,
			});
			setCurrentClassification('스터디');
			// Todo 스터디만 가져오는 API
		} else if (e === 'project') {
			trigger({
				data: {
					classification: '프로젝트',
					skip: 0,
				},
				applyResult: true,
			});
			setCurrentClassification('프로젝트');
		} else if (e === '') {
			trigger({
				data: {
					skip: 0,
				},
				applyResult: true,
			});
			setCurrentClassification('');
		}
		setCurrentPage(1);
	};
	const removeHandler = async (key, index) => {
		await trigger({
			path: `/admin/${key}`,
			method: 'delete',
			applyResult: true,
		});
		if (result.projectStudies.length === 1) {
			if (index === 1) {
				await trigger({
					data: {
						skip: (currentPage - 1) * 10 - 10,
						classification: currentclassification,
					},
				});
			} else {
				await trigger({
					data: {
						skip: (currentPage - 1) * 10 - 10,
						classification: currentclassification,
					},
					applyResult: true,
				});
			}
			setCurrentPage(prev => prev - 1);
		} else {
			await trigger({
				data: {
					skip: currentPage * 10 - 10,
					classification: currentclassification,
				},
				applyResult: true,
			});
		}
	};
	// 자세히 보기

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const pageChange = async pageNumber => {
		// console.log(currentclassification);
		// console.log(pageNumber);

		await trigger({
			data: {
				skip: pageNumber * 10 - 10,
				classification: currentclassification,
			},
			applyResult: true,
		});
		setCurrentPage(pageNumber);
	};

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
export default AdminStudyProject;
