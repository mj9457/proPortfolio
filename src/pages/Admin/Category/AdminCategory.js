import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Input, Space, theme } from 'antd';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import { AdminContent } from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import { CancelButton, SaveButton, TableInput } from './AdminCategory.styles';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';
import useApi from '../../../hooks/useApi';
import MESSAGE from '../../../constants/message';
const AdminCategory = () => {
	// 수정 중인 행의 key를 저장
	const [editingKey, setEditingKey] = useState(null);
	const [tableData, setTableData] = useState();
	const [tempData, setTempData] = useState({});
	const [inputValue, setInputValue] = useState('');
	const [categoryInput, setCategoryInput] = useState('');

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
		console.log(result);
		if (result && result.length > 0) {
			setTableData(
				result.map(item => ({
					...item,
					key: item._id,
					name: item.name,
				})),
			);
		}
	}, [result]);

	const memoColumns = useMemo(() => [], [tempData, editingKey]);
	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		),
		[tableData, memoColumns],
	);

	// Input onChange Handler
	const handleInputChange = (e, key) => {
		// 새로운 배열에 값 저장
		console.log(key);
		setCategoryInput(e.target.value);
		setTempData({ ...tempData, [key]: e.target.value });
		console.log(tempData);
	};
	// Button Save Handler
	const handleSave = async key => {
		if (!categoryInput.trim()) {
			alert(MESSAGE.CHECK.MODAL);
			return;
		}
		console.log(key);
		await trigger({
			path: `/position/${key}`,
			data: { name: categoryInput },
			method: 'put',
			applyResult: true,
		});
		setEditingKey(null);

		// const updatedData = tableData.map(item =>
		// 	item.key === key ? { ...item, name: tempData[key] } : item,
		// );
		// console.log(updatedData);
		// setTableData(updatedData);
		// Todo 카테고리 수정 API
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
		// setTableData(data => data.filter(item => item.key !== key));

		// setTableData(data => data.filter(items => items.key !== key));
	};
	// 카테고리 추가
	const addCategoryHandler = async () => {
		console.log(inputValue);
		await trigger({
			method: 'post',
			data: { name: inputValue },
			applyResult: true,
		});
		setInputValue('');
		console.log(result);
	};
	// console.log(tableData);

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<SearchInput
				enterButton="추가"
				placeholder="추가 할 카테고리를 입력해주세요"
				onSearch={e => addCategoryHandler(e)}
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			{isLoading ? <h2>로딩중</h2> : memoResult}
			{/* <Searchbar
				type={'ADD'}
				// value={set}
				placeholder="추가 할 카테고리를 입력하세요."
			/>  */}
			{/* {isLoading ? (
				<h2>로딩중</h2>
			) : (
				<AdminTable
					columns={columns}
					dataSource={tableData}
					totalPages={0}
				/>
			)} */}
		</AdminContent>
	);
};
export default AdminCategory;
