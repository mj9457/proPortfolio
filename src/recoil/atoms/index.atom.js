import { atom } from 'recoil';

// Footer Show State
export const includeFooterState = atom({
	key: 'includeFooterState',
	default: true, // 기본적으로 Footer 포함
});

function getIsToken(name) {
	const value = '; ' + document.cookie;
	const parts = value.split('; ' + name + '=');
	if (parts.length === 2) return parts.pop().split(';').shift();
}

export const userAtom = atom({
	key: 'userAtom',
	default: {
		isAuth: !!getIsToken('isToken'),
		nickName: '',
		role: '',
		_id: '',
		isLoading: false,
	},
});
