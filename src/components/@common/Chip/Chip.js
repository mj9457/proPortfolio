import React, { useState, useEffect } from 'react';
import * as S from './Chip.styles';

function Chip({ classification }) {
	return (
		<>
			<S.ChipBox $category={classification}>
				<S.ChipText>{classification}</S.ChipText>
			</S.ChipBox>
		</>
	);
}

export default Chip;
