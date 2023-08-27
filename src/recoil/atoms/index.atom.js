import { atom } from 'recoil';

// Footer Show State
export const includeFooterState = atom({
	key: 'includeFooterState',
	default: true, // 기본적으로 Footer 포함
});
