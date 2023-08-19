import { Table } from 'antd';
import { styled } from 'styled-components';

const MyTable = styled(Table)`
	& table {
		text-align: center;
	}
	& table > thead > tr > th {
		text-align: center !important ;
	}
`;

export { MyTable };
