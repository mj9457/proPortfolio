import * as S from './Textarea.styles';

function Textarea(props) {
	const { size, placeholder } = props;

	return <S.TextSpace size={size} placeholder={placeholder} />;
}

export default Textarea;
