import * as S from './Select.styles';

function Select(props) {
	const { children, $variant, size, $font, ...rest } = props;

	return (
		<>
			<S.Selected size={size} $font={$font} $variant={$variant} {...rest}>
				{children}
			</S.Selected>
		</>
	);
}

export default Select;
