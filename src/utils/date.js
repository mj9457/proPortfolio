export const formatDate = (year, month, date) => {
	const formattedMonth = `${month < 10 ? '0' : ''}${month}`;
	const formattedDate = `${date < 10 ? '0' : ''}${date}`;
	return `${year}-${formattedMonth}-${formattedDate}`;
};
