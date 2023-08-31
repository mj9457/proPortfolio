import { Table } from 'antd';
import { styled } from 'styled-components';

const MyTable = styled(Table)`
	& table {
		text-align: center;
	}
	& table > thead > tr > th {
		text-align: center !important ;
	}
	& table > thead > tr > th:nth-child(3) {
		min-width: 300px;
	}

	.ant-pagination.ant-table-pagination {
		justify-content: center;
	}
`;

export { MyTable };
