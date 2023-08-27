// import { theme } from 'antd';
// import { Content } from 'antd/es/layout/layout';
// import { styled } from 'styled-components';

import { Button, Input } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

// const PaginationWrap = styled.div`
// 	text-align: center;
// 	margin-top: 30px;
// `;

// const Atags = styled.a`
// 	display: inline-block;
// 	vertical-align: middle;
// 	color: black;
// 	&::after {
// 		content: '|';
// 		display: inline-block;
// 		color: black;
// 		padding: 0 10px;
// 	}
// `;
const TableInput = styled(Input)`
	width: 200px;
`;
const SaveButton = styled(Button)`
	position: absolute;
	right: 150px;
`;
const CancelButton = styled(Button)`
	position: absolute;
	right: 85px;
`;

export { TableInput, SaveButton, CancelButton };
