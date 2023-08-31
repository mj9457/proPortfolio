import { useEffect, useMemo, useState } from 'react';
import { Button, Pagination, Space, theme } from 'antd';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import { Atags, HandlerButton } from './AdminMentorApply.styles';
import AdminApplyModal from '../AdminApplyModals/AdminApplyModal';
import useApi from '../../../hooks/useApi';
import { PaginationWrap } from '../Home/Admin.styles';

const AdminMentorApply = () => {
	const { result, trigger, isLoading, error } = useApi({
		path: '/mentorRequest',
		shouldFetch: true,
		params: {
			status: 'requested',
		},
	});
	const [applyData, setApplyData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedKey, setSelectedKey] = useState(null);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

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
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<div>
						{/* <Atags
							onClick={() => {
								approveHandler(record.key);
							}}
						>
						</Atags> */}
						<HandlerButton
							type="primary"
							onClick={() => {
								approveHandler(record.userId, record._id);
							}}
						>
							승인
						</HandlerButton>
						{/* <Removetag onClick={() => refuseHandler(record.key)}>
							거절
						</Removetag> */}
						<HandlerButton
							onClick={() => refuseHandler(record._id)}
						>
							거절
						</HandlerButton>
					</div>
				</Space>
			),
		},
	];
	useEffect(() => {
		console.log(result);
		if (result.mentorRequests && result.mentorRequests.length > 0) {
			const startIndex = (currentPage - 1) * 10;
			setApplyData(
				result.mentorRequests
					.filter(item => item.status === 'requested')
					.map((item, index) => ({
						...item,
						key: index + startIndex + 1,
					})),
			);
		}
		if (result.total) {
			setTotalPages(result.total);
		}
	}, [result]);
	const memoColumns = useMemo(() => [], [selectedKey, isOpen]);
	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={applyData}
				totalPages={totalPages}
			/>
		),
		[applyData, memoColumns, currentPage],
	);

	// 자세히 보기
	const openApplyModal = key => {
		setSelectedKey(key);
		setIsOpen(true);
	};
	const closeModal = () => {
		setSelectedKey(null);
		setIsOpen(false);
	};
	// 거절
	const refuseHandler = async requestId => {
		await trigger({
			path: `/mentorRequest/${requestId}`,
			method: 'put',
			data: { status: 'rejected' },
			applyResult: true,
		});
		if (result.mentorRequests.length === 1) {
			await trigger({
				params: {
					skip: (currentPage - 1) * 10 - 10,
					status: 'requested',
				},
				applyResult: true,
			});
			setCurrentPage(prev => prev - 1);
		} else {
			await trigger({
				params: {
					skip: currentPage * 10 - 10,
					status: 'requested',
				},
				applyResult: true,
			});
		}

		// setTableData(data => data.filter(items => items.key !== key));
		// 모든 처리 후
		setSelectedKey(null);
		setIsOpen(false);
	};
	// 승인
	const approveHandler = async (userId, requestId) => {
		console.log(userId, requestId);
		await trigger({
			path: `/admin/user/${userId}/role`,
			method: 'put',
			data: { role: 'mentor' },
		});
		await trigger({
			path: `/mentorRequest/${requestId}`,
			method: 'put',
			data: { status: 'accepted' },
			applyResult: true,
		});
		if (result.mentorRequests.length === 1) {
			await trigger({
				params: {
					skip: (currentPage - 1) * 10 - 10,
					status: 'requested',
				},
				applyResult: true,
			});
			setCurrentPage(prev => prev - 1);
		} else {
			await trigger({
				params: {
					skip: currentPage * 10 - 10,
					status: 'requested',
				},
				applyResult: true,
			});
		}
		setSelectedKey(null);
		setIsOpen(false);
	};
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const pageChange = async pageNumber => {
		console.log(pageNumber);

		await trigger({
			path: '/mentorRequest',
			params: {
				skip: pageNumber * 10 - 10,
				status: 'requested',
			},
			applyResult: true,
		});
		setCurrentPage(pageNumber);
		// console.log(pageNumber);
	};

	return (
		<>
			{isOpen && (
				<AdminApplyModal
					onClose={closeModal}
					userInfo={selectedKey}
					approveHandler={approveHandler}
					refuseHandler={refuseHandler}
				/>
			)}
			<AdminContent background={colorBgContainer}>
				<SearchInput
					enterButton="검색"
					placeholder=""
					// onSearch={e => addCategoryHandler(e)}
				/>
				{isLoading ? (
					<h2>로딩중</h2>
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
		</>
	);
};
export default AdminMentorApply;
