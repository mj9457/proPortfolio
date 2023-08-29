import { Select, Space, theme } from 'antd';

import { useEffect, useMemo, useState } from 'react';

import AdminTable from '../../../components/pages/Admin/Table/AdminTable';
import {
	AdminContent,
	Removetag,
} from '../../../components/pages/Admin/Common/Common.styles';
import { SearchInput } from '../../../components/pages/Admin/Searchbar/Searchbar.styles';
import { HandlerButton } from '../MentorApply/AdminMentorApply.styles';
import useApi from '../../../hooks/useApi';

const AdminMentorBoardList = () => {
	const [tableData, setTableData] = useState();

	// select option이 변경될 때
	const { result, trigger, isLoading, error } = useApi({
		path: '/admin/portfolio',
		shouldFetch: true,
	});
	const columns = [
		{
			title: '글 번호',
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
						href={`http://localhost:3000/portfolio/post/${record._id}`}
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
					<HandlerButton onClick={() => removeHandler(record._id)}>
						삭제
					</HandlerButton>
				</Space>
			),
		},
	];

	useEffect(() => {
		console.log(result);
		if (result && result.length > 0) {
			const modifiedData = result.map((item, index) => ({
				...item,
				key: String(index + 1), // 번호 값을 index로부터 생성
			}));
			setTableData(modifiedData);
		}
	}, [result]);

	const memoResult = useMemo(
		() => (
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		),
		[tableData],
	);
	const changeSelectValue = e => {
		// console.log(modifiedData);
		// // 한 페이지에 나타낼 개수대로 가져오는 api 협의
		// if (e === 'study') {
		// 	// Todo 스터디만 가져오는 API
		// 	setTableData(data.filter(item => item.type === '스터디'));
		// } else if (e === 'project') {
		// 	// Todo 프로젝트만 가져오는 API
		// 	setTableData(data.filter(item => item.type === '프로젝트'));
		// } else {
		// 	// 구분없이 가져오는 API
		// 	setTableData(modifiedData);
		// }
	};
	const removeHandler = async key => {
		await trigger({
			path: `/admin/portfolio/${key}`,
			method: 'delete',
			applyResult: true,
		});
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
			<SearchInput
				enterButton="검색"
				placeholder=""
				// onSearch={e => addCategoryHandler(e)}
			/>
			{isLoading ? <h2>로딩중</h2> : memoResult}
		</AdminContent>
	);
};
export default AdminMentorBoardList;
