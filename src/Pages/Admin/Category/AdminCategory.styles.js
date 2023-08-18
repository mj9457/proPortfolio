// import { theme } from 'antd';
// import { Content } from 'antd/es/layout/layout';
// import { styled } from 'styled-components';

import { Button, Input } from 'antd';
import Search from 'antd/es/input/Search';
import { styled } from 'styled-components';

// const AdminContent = styled(Content)`
// 	padding: 80px 16px 40px;
// 	margin-left: 20;
// 	margin-top: 80;
// 	width: 100px;
// 	overflow: initial;
// 	background: ${props => props.background};
// `;
// const PaginationWrap = styled.div`
// 	text-align: center;
// 	margin-top: 30px;
// `;
// export { AdminContent, PaginationWrap };

const Atags = styled.a`
	display: inline-block;
	vertical-align: middle;
	color: black;
	&::after {
		content: '|';
		display: inline-block;
		color: black;
		padding: 0 10px;
	}
`;
const Removetag = styled.a`
	vertical-align: middle;
	color: black;
`;
const TableInput = styled(Input)`
	width: 500px;
`;
const SaveButton = styled(Button)`
	position: absolute;
	right: 150px;
`;
const CancelButton = styled(Button)`
	position: absolute;
	right: 85px;
`;
const SearchInput = styled(Search)`
	width: 400px;
	margin-bottom: 20px;
	float: right;
`;

export { Atags, Removetag, TableInput, SaveButton, CancelButton, SearchInput };
