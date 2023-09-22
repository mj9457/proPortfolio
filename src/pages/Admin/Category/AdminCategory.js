import { useEffect, useMemo, useState } from 'react';
import { Pagination, Space, theme } from 'antd';

import AdminTable from 'components/pages/Admin/Table/AdminTable';
import { AdminContent } from 'components/pages/Admin/Common/Common.styles';
import { SearchInput } from 'components/pages/Admin/Searchbar/Searchbar.styles';
import { CancelButton, SaveButton, TableInput } from './AdminCategory.styles';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';
import { PaginationWrap } from '../Home/Admin.styles';
import { useNavigate } from 'react-router-dom';
import MESSAGE from 'constants/message';
import useApi from 'hooks/useApi';
import LoadingBar from 'components/@common/Loading/LoadingBar';
const AdminCategory = () => {
	const navigate = useNavigate();
	// 수정 중인 행의 key를 저장
	const [editingKey, setEditingKey] = useState(null);
	const [tableData, setTableData] = useState();
	const [tempData, setTempData] = useState({});
	const [inputValue, setInputValue] = useState('');
	const [categoryInput, setCategoryInput] = useState('');
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const { result, trigger, isLoading, error } = useApi({
		path: '/position',
		shouldFetch: true,
	});

	const columns = [
		{
			title: '카테고리 명',
			dataIndex: 'name',
			key: 'name',
			/* onChange={e => handleInputChange(e, record.key)} */
			render: (_, record) => {
				const isEditing = record.key === editingKey;
				return isEditing ? (
					<>
						<TableInput
							value={tempData[record.key]}
							onChange={e => handleInputChange(e, record._id)}
						/>
						<SaveButton
							onClick={() => {
								handleSave(record.key);
							}}
						>
							저장
						</SaveButton>
						<CancelButton onClick={handleCancel}>취소</CancelButton>
					</>
				) : (
					record.name
				);
			},
		},

		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<div>
						{/* <Atags
							onClick={() => {
								handleEdit(record.key);
							}}
							>
							수정
						</Atags> */}
						<HandlerButton
							onClick={() => {
								handleEdit(record.key);
							}}
							type="primary"
						>
							수정
						</HandlerButton>
						<HandlerButton
							onClick={() => removeHandler(record.key)}
						>
							삭제
						</HandlerButton>
						{/* <Removetag onClick={() => removeHandler(record.key)}>
							삭제
						</Removetag> */}
					</div>
				</Space>
			),
		},
	];

	useEffect(() => {
		if (error && result?.positions?.length === tableData?.length) {
			if (error?.response?.data?.result === 'MongoServerError') {
				if (error?.response?.data?.reason.includes('duplicate key')) {
					alert('이미 사용중인 카테고리 이름입니다.');
					return;
					// navigate(0);
				}
			}
		}

		if (result.positions) {
			setTableData(
				result.positions.map(item => ({
					...item,
					key: item._id,
					name: item.name,
				})),
			);
		}
		setTotalPages(result.total);
	}, [result]);

	const memoColumns = useMemo(() => [...columns], [tempData, editingKey]);
	const memoResult = useMemo(
		() => <AdminTable columns={columns} dataSource={tableData} />,
		[tableData, memoColumns],
	);

	// Input onChange Handler
	const handleInputChange = (e, key) => {
		// 새로운 배열에 값 저장
		setCategoryInput(e.target.value);
		setTempData({ ...tempData, [key]: e.target.value });
	};
	// Button Save Handler
	const handleSave = async key => {
		if (!categoryInput.trim()) {
			alert(MESSAGE.CHECK.MODAL);
			return;
		}
		await trigger({
			path: `/position/${key}`,
			data: { name: categoryInput },
			method: 'put',
			showBoundary: false,
			applyResult: true,
		});
		await trigger({
			data: {
				skip: currentPage * 10 - 10,
			},
			applyResult: true,
		});
		setEditingKey(null);
	};
	// 수정 버튼을 눌렀을 때 Edit 상태 업데이트
	const handleEdit = key => {
		setEditingKey(key);

		setTempData({
			...tempData,
			[key]: tableData.find(item => item.key === key).name,
		});
	};
	// 수정 취소
	const handleCancel = () => {
		setEditingKey(null);
	};
	// 삭제
	const removeHandler = async key => {
		await trigger({
			method: 'delete',
			path: `/position/${key}`,
			applyResult: true,
		});
		if (result.positions.length === 1) {
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
	// 카테고리 추가
	const addCategoryHandler = async () => {
		try {
			if (!inputValue.trim()) {
				alert('추가 할 카테고리를 입력해주세요.');
				return;
			}
			await trigger({
				method: 'post',
				data: { name: inputValue },
				showBoundary: false,
				applyResult: true,
			});
			await trigger({
				data: {
					skip: currentPage * 10 - 10,
				},
				applyResult: true,
			});
			setInputValue('');
		} catch (err) {
			console.log(err);
		}
	};
	// console.log(tableData);

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const pageChange = async pageNumber => {
		await trigger({
			path: '/position',
			data: {
				skip: pageNumber * 10 - 10,
			},
			applyResult: true,
		});
		setCurrentPage(pageNumber);
	};

	return (
		<AdminContent background={colorBgContainer}>
			<SearchInput
				enterButton="추가"
				placeholder="추가 할 카테고리를 입력해주세요"
				onSearch={e => addCategoryHandler(e)}
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
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
export default AdminCategory;
