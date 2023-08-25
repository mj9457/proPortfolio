import React, { useState, useEffect } from 'react';
import * as S from './Chip.styles';

function Chip({ category, status }) {
	const [text, setText] = useState('');

	useEffect(() => {
		if (category === 'project') {
			setText('프로젝트');
		} else if (category === 'study') {
			setText('스터디');
		} else if (status) {
			setText('모집중');
		} else {
			setText('모집완료');
		}
	}, [category, status]);
	return (
		<>
			<S.ChipBox category={category}>
				<S.ChipText>{text}</S.ChipText>
			</S.ChipBox>
		</>
	);
}

export default Chip;
