import React from 'react';
import { MyTable } from './AdminTable.styles';
import { Pagination } from 'antd';
import { PaginationWrap } from '../../../../pages/Admin/Home/Admin.styles';

const AdminTable = ({ dataSource, columns, totalPages }) => {
	return (
		<>
			<MyTable
				columns={columns}
				dataSource={dataSource}
				pagination={false}
				// defaultCurrent={1}
				// total={totalPages}
			/>
			{/* <PaginationWrap>
				<Pagination defaultCurrent={1} total={totalPages} />
			</PaginationWrap> */}
		</>
	);
};

export default AdminTable;
