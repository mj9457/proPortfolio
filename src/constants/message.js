const MESSAGE = {
	JOIN: {
		FAILURE: '회원가입에 실패했습니다.',
	},
	LOGIN: {
		FAILURE: '아이디 또는 비밀번호를 다시 확인해 주세요.',
		ERROR: '로그인에 문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.',
	},
	ERROR: {
		DEFAULT: '에러가 발생했습니다. 다시 시도해 주세요',
		EXPIRED: '로그인이 만료되었습니다. 다시 로그인해 주세요.',
	},
	PWEDIT: {
		SUCCESS: '비밀번호 변경이 완료되었습니다.',
		FAILURE: '비밀번호 변경에 실패했습니다.',
	},
	CHECK: {
		POSITION: '직무를 선택해 주세요.',
		COMPANY: '다니는 회사를 입력해 주세요.',
		TITLE: '제목을 작성해 주세요.',
		DESCRIPTION: '소개 내용을 작성해 주세요.',
		COMMUNICATION: '연락 가능한 링크를 입력해 주세요.',
		ALL: '모든 항목을 선택해 주세요.',
	},
	POST: {
		COMPLETE: '게시글 작성이 완료되었습니다.',
		EDIT: '작성한 게시글을 수정하시겠습니까?',
		DELETE: '작성한 게시글을 삭제하시겠습니까?',
	},
	COMMENT: {
		COMPLETE: '댓글을 작성하시겠습니까?',
		EDIT: '',
	},
	REJECT: {
		COMPLETE: '거절 사유 작성이 완료되었습니다.',
	},
	MYPAGE: {
		MENTOR: {
			TITLE: '멘토링 신청 받은 내역',
			SUBTITLE: {
				TOTAL: '신청 받은 건',
				APPLY: '신청 수락 건',
				COMPLETED: '리뷰 완료 건',
				REFUSE: '신청 거절 건',
			},
			CARDTITLE: '포트폴리오 리뷰 신청',
			BUTTONTITLE: {
				APPLY: '수락하기',
				REFUSE: '거절하기',
				EDIT: '첨삭하기',
				MODIFY: '수정하기',
				REFUSECANCLE: '거절 취소하기',
			},
		},

		MENTEE: {
			TITLE: '멘토링 신청 내역',
			SUBTITLE: {
				TOTAL: '신청 완료 건',
				APPLY: '진행 중인 건',
				COMPLETED: '리뷰 완료 건',
				REFUSE: '취소 건',
			},
			BUTTONTITLE: {
				INFOVIEW: '신청서 보기',
				CANCLE: '취소하기',
				EDITVIEW: '리뷰 내용 보기',
				REFUSEVIEW: '취소 사유 보기',
			},
		},
	},
	NODATA: {
		LIST: '내역이 없습니다.',
	},
};

export default MESSAGE;
