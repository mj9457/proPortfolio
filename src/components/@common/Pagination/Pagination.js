import React from 'react';

import * as S from './Pagination.styles';

function Pagination(props) {
	const { totalItems, currentPage, onPageChange } = props;

	// 한 번에 표시할 페이지 번호 개수
	const displayPageCount = 5;

	// 페이지 번호 그룹의 시작과 끝 계산
	let startPage = Math.max(1, currentPage - Math.floor(displayPageCount / 2));
	let endPage = startPage + displayPageCount - 1;

	// 만약 끝 페이지가 총 페이지 수를 넘어가면 조정
	if (endPage > totalItems) {
		endPage = totalItems;
		startPage = Math.max(1, endPage - displayPageCount + 1);
	}

	// 이전 페이지로 이동하는 함수
	const goToPrevPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	// 다음 페이지로 이동하는 함수
	const goToNextPage = () => {
		if (currentPage < totalItems) {
			onPageChange(currentPage + 1);
		}
	};

	return (
		<div>
			<S.PaginationBox>
				<S.Button onClick={goToPrevPage}>
					<img src="/assets/img/icons/leftarrow.png" alt="Previous" />
				</S.Button>
				{totalItems === 0 ? (
					<S.Number>1</S.Number>
				) : (
					Array.from(
						{ length: endPage - startPage + 1 },
						(_, index) => (
							<S.Number
								key={startPage + index}
								onClick={() => onPageChange(startPage + index)}
								style={{
									margin: '5px',
									padding: '5px 10px',
									color:
										currentPage === startPage + index
											? '#3377FF'
											: '#585858',
									cursor: 'pointer',
									fontSize: 'large',
								}}
							>
								{startPage + index}
							</S.Number>
						),
					)
				)}
				<S.Button onClick={goToNextPage}>
					<img src="/assets/img/icons/rightarrow.png" alt="Next" />
				</S.Button>
			</S.PaginationBox>
		</div>
	);
}

export default Pagination;
