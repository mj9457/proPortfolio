import * as S from './index.styles';

function Textarea(props) {
	const { size, placeholder, name, ...rest } = props;

	return (
		<S.TextSpace
			name={name}
			size={size}
			placeholder={placeholder}
			{...rest}
		/>
	);
}

export default Textarea;
