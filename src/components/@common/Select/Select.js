import * as S from './Select.styles';

function Select(props) {
	const { children, size, font, ...rest } = props;

	return (
		<>
			<S.Selected size={size} font={font} {...rest}>
				{children}
			</S.Selected>
		</>
	);
}

export default Select;
