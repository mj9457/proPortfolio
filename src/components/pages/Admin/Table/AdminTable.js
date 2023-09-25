import React from 'react';
import { MyTable } from './AdminTable.styles';

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
		</>
	);
};

export default AdminTable;
