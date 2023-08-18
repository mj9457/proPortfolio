import { SearchInput } from './Searchbar.styles';

const Searchbar = ({ type }) => {
	return type !== 'ADD' ? (
		<SearchInput enterButton="검색" />
	) : (
		<SearchInput
			enterButton="추가"
			placeholder="추가 할 카테고리를 입력해주세요"
			onChange={e => {
				console.log(e.target.value);
			}}
		/>
	);
};
export default Searchbar;
