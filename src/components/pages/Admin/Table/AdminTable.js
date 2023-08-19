import React from 'react';
import { MyTable } from './AdminTable.styles';
import { Pagination } from 'antd';
import { PaginationWrap } from '../../../../pages/Admin/Home/Admin.styles';

const AdminTable = ({ dataSource, columns }) => {
	return (
		<>
			<MyTable
				columns={columns}
				dataSource={dataSource}
				pagination={false}
			/>
			<PaginationWrap>
				<Pagination defaultCurrent={1} total={1000} />
			</PaginationWrap>
		</>
	);
};

export default AdminTable;
