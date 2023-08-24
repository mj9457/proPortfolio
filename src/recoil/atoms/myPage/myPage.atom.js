import { atom, atomFamily, selector, selectorFamily } from 'recoil';

export const mentoringItem = atom({
	key: 'mentoringItem',
	default: {
		total: [],
		apply: [],
		completed: [],
		refuse: [],
	},
});

// export const mentoringCategory = atom({
// 	key: 'mentoringCategory',
// 	default: {
// 		total: 'total',
// 		apply: 'apply',
// 		completed: 'completed',
// 		refuse: 'refuse',
// 	},
// });

export const userData = atom({
	key: 'userData',
	default: {},
});

// export const modalState = atom({
// 	key: 'modalState',
// 	default: {
// 		isOpen: false,
// 	},
// });

// export const modalState = atomFamily({
// 	key: 'modalState',
// 	default: id => {
// 		return {
// 			id,
// 			title: '',
// 			isOpen: false,
// 		};
// 	},
// 	// default: {
// 	// 	myPage: {
// 	// 		mentor: {
// 	// 			edit: false,
// 	// 			infoView: false,
// 	// 			refuseEdit: false,
// 	// 		},
// 	// 		mentee: {
// 	// 			editView: false,
// 	// 			infoEdit: false,
// 	// 			refuseView: false,
// 	// 		},
// 	// 	},
// 	// },
// });

// const modalsAtomFamily = atomFamily({
// 	key: 'modalsAtomFamily',
// 	default: id => ({
// 		id,
// 		isOpen: false,
// 		title: '',
// 	}),
// });

// export const modalIdsAtom = atom({
// 	key: 'modalIdsAtom',
// 	default: [],
// });

// export const modalsSelectorFamily = selectorFamily({
// 	key: 'modalsSelectorFamily',

// 	get:
// 		modalId =>
// 		({ get }) =>
// 			get(modalsAtomFamily(modalId)),

// 	set:
// 		modalId =>
// 		({ get, set, reset }, modalInfo) => {
// 			if (modalInfo) {
// 				reset(modalsAtomFamily(modalId));
// 				set(modalIdsAtom, prevValue =>
// 					prevValue.filter(item => item !== modalId),
// 				);

// 				return;
// 			}

// 			set(modalsAtomFamily(modalId), modalInfo);
// 			set(modalIdsAtom, prev =>
// 				Array.from(new Set([...prev, modalInfo.id])),
// 			);
// 		},
// });
