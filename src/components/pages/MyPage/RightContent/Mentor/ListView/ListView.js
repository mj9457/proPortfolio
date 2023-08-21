import * as LV from './ListView.styles';

function ListView({ mentoringList, onDelete }) {
	console.log(mentoringList);

	return (
		<>
			{mentoringList.map((item, index) => {
				return (
					<LV.ContentList key={item.id}>
						<LV.ContentNumber>{index + 1}</LV.ContentNumber>
						<LV.ContentCategory>{item.title}</LV.ContentCategory>
						<LV.ContentTitle>{item.title}</LV.ContentTitle>
						<LV.ContentDate>{`~ ${item.id}`}</LV.ContentDate>
						<LV.ButtonBox>
							<LV.DeleteButton onClick={() => onDelete(item.id)}>
								삭제
							</LV.DeleteButton>
						</LV.ButtonBox>
					</LV.ContentList>
				);
			})}
		</>
	);
}

export default ListView;
