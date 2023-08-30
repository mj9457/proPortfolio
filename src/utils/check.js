import MESSAGE from '../constants/message';

export const check = ex => {
	return [
		{
			checked: ex.position.length === 0,
			message: MESSAGE.CHECK.POSITION,
		},
		{
			checked: ex.company.length === 0,
			message: MESSAGE.CHECK.COMPANY,
		},
		{
			checked: ex.career.length === 0,
			message: MESSAGE.CHECK.CAREER,
		},
		{
			checked: !ex.title || ex.title.length === 0,
			message: MESSAGE.CHECK.TITLE,
		},
		{
			checked: ex.title && ex.title.length > 50,
			message: MESSAGE.CHECK.TITLELENGTH,
		},
		{
			checked: !ex.description || ex.description.length === 0,
			message: MESSAGE.CHECK.DESCRIPTION,
		},
		{
			checked: ex.description && ex.description.length > 1000,
			message: MESSAGE.CHECK.DESCRIPTIONLENGTH,
		},
	];
};
