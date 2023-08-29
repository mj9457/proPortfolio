import React, { useState, useEffect } from 'react';
import * as S from './Chip.styles';

function Chip({ classification, status }) {
	const [text, setText] = useState('');

	useEffect(() => {
		if (classification === '프로젝트') {
			setText('프로젝트');
		} else if (classification === '스터디') {
			setText('스터디');
		} else if (status) {
			setText('모집중');
		} else {
			setText('모집완료');
		}
	}, [classification, status]);
	return (
		<>
			<S.ChipBox classification={classification}>
				<S.ChipText>{text}</S.ChipText>
			</S.ChipBox>
		</>
	);
}

export default Chip;
