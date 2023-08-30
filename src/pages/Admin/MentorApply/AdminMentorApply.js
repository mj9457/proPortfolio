import { useEffect, useMemo, useState } from 'react';
import { Button, Space, theme } from 'antd';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import { Atags, HandlerButton } from './AdminMentorApply.styles';
import AdminApplyModal from '../AdminApplyModals/AdminApplyModal';
import useApi from '../../../hooks/useApi';

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
		if (result && result.length > 0) {
			setApplyData(
				result
					.filter(item => item.status === 'requested')
					.map((item, index) => ({
						...item,
						key: index + 1,
					})),
			);
		}
	}, [result]);
	const memoColumns = useMemo(() => [], [selectedKey, isOpen]);
	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={applyData}
				totalPages={0}
			/>
		),
		[applyData, memoColumns],
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
	const refuseHandler = requestId => {
		trigger({
			path: `/mentorRequest/${requestId}`,
			method: 'put',
			data: { status: 'rejected' },
			applyResult: true,
		});

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
		setSelectedKey(null);
		setIsOpen(false);
	};
	const {
		token: { colorBgContainer },
	} = theme.useToken();

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
				{isLoading ? <h2>로딩중</h2> : memoResult}
			</AdminContent>
		</>
	);
};
export default AdminMentorApply;
