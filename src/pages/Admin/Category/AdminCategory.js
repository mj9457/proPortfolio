import { useEffect, useState } from 'react';
import { Button, Input, Space, theme } from 'antd';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import {
	Atags,
	CancelButton,
	SaveButton,
	TableInput,
} from './AdminCategory.styles';
const AdminCategory = () => {
	const data = [
		{
			key: 1,
			name: `백엔드 개발`,
		},
		{
			key: 2,
			name: '프론트 개발',
		},
		{
			key: 3,
			name: '풀 스택 개발',
		},
		{
			key: 4,
			name: '안드로이드 개발',
		},
		{
			key: 5,
			name: 'ios 개발',
		},
		{
			key: 6,
			name: '크로스 플랫폼 앱 개발',
		},
	];
	// 수정 중인 행의 key를 저장
	const [editingKey, setEditingKey] = useState(null);
	const [tableData, setTableData] = useState(data);
	const [tempData, setTempData] = useState({});
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
							value={tempData[record.key] || record.name}
							onChange={e => handleInputChange(e, record.key)}
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
			title: '버튼',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<div>
						<Atags
							onClick={() => {
								handleEdit(record.key);
							}}
						>
							수정
						</Atags>
						<Removetag onClick={() => removeHandler(record.key)}>
							삭제
						</Removetag>
					</div>
				</Space>
			),
		},
	];
	// Input onChange Handler
	const handleInputChange = (e, key) => {
		// 새로운 배열에 값 저장
		setTempData({ ...tempData, [key]: e.target.value });
	};
	// Button Save Handler
	const handleSave = key => {
		console.log(key);
		const updatedData = tableData.map(item =>
			item.key === key ? { ...item, name: tempData[key] } : item,
		);
		console.log(updatedData);
		setTableData(updatedData);
		setEditingKey(null);
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
	const removeHandler = key => {
		setTableData(data => data.filter(items => items.key !== key));
	};
	const addCategoryHandler = e => {
		console.log('추가하기');
		const lastKey = tableData[tableData.length - 1].key;
		const newKey = lastKey + 1;
		setTableData([...tableData, { key: newKey, name: e }]);
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<SearchInput
				enterButton="추가"
				placeholder="추가 할 카테고리를 입력해주세요"
				onSearch={e => addCategoryHandler(e)}
			/>
			{/* <Searchbar
				type={'ADD'}
				// value={set}
				placeholder="추가 할 카테고리를 입력하세요."
			/>  */}
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		</AdminContent>
	);
};
export default AdminCategory;
