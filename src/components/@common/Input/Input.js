import * as S from './Input.styles';

function Input(props) {
	const { size, ...rest } = props;
	return (
		<>
			<S.TextInput size={size} {...rest}></S.TextInput>
		</>
	);
}

export default Input;
