import React from 'react';
import * as S from './Pagination.styles';

function Pagination(props) {
	const { totalItems, currentPage, onPageChange } = props;

	return (
		<S.PaginationBox>
			{/* 페이지네이션 버튼 표시 */}
			<div>
				<img src="/assets/img/icons/leftarrow.png" />
				{Array.from({ length: totalItems }, (_, index) => (
					<button
						key={index}
						onClick={() => onPageChange(index + 1)} // 페이지 변경 핸들러 호출
						style={{
							margin: '5px',
							padding: '5px 10px',
							background: currentPage === index + 1 ? 'lightblue' : 'white',
						}}
					>
						{index + 1}
					</button>
				))}

				<img src="/assets/img/icons/rightarrow.png" />
			</div>
		</S.PaginationBox>
	);
}

export default Pagination;
