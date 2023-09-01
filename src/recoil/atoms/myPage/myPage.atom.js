import { atom } from 'recoil';

export const mentoringItem = atom({
	key: 'mentoringItem',
	default: {
		requested: [],
		accepted: [],
		completed: [],
		rejected: [],
	},
});

export const applyItem = atom({
	key: 'applyItem',
	default: {
		requested: [],
		accepted: [],
		completed: [],
		rejected: [],
	},
});

export const userItem = atom({
	key: 'userItem',
	default: {},
});
