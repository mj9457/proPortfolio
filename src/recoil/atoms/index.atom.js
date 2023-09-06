import { atom } from 'recoil';

// Footer Show State
export const includeFooterState = atom({
	key: 'includeFooterState',
	default: true, // 기본적으로 Footer 포함
});

export const userAtom = atom({
	key: 'userAtom',
	default: {
		isAuth: false,
		nickName: '',
		role: '',
		_id: '',
		isLoading: false,
	},
});
