import React from 'react';
import * as S from './Pagination.styles';

function Pagination(props) {
	const { totalItems, currentPage, onPageChange } = props;

	return (
		<div>
			{/* 페이지네이션 버튼 표시 */}
			<S.PaginationBox>
				{Array.from({ length: totalItems }, (_, index) => (
					<S.Number
						key={index}
						onClick={() => onPageChange(index + 1)} // 페이지 변경 핸들러 호출
						style={{
							margin: '5px',
							padding: '5px 10px',
							color: currentPage === index + 1 ? '#3377FF' : '#585858',
							cursor: 'pointer',
							fontSize: 'large',
						}}
					>
						{index + 1}
					</S.Number>
				))}
			</S.PaginationBox>
		</div>
	);
}

export default Pagination;
