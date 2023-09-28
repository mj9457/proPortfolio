import * as S from './index.styles';

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
