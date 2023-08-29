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
	CHECK: {
		POSITION: '직무를 선택해 주세요.',
		COMPANY: '다니는 회사를 입력해 주세요.',
		TITLE: '제목을 작성해 주세요.',
		TITLELENGTH: '제목은 50자 이하로 작성해 주세요.',
		DESCRIPTION: '소개 내용을 작성해 주세요.',
		DESCRIPTIONLENGTH: '내용은 1000자 이하로 작성해 주세요.',
		COMMUNICATION: '연락 가능한 링크를 입력해 주세요.',
		CAREER: '경력을 입력해 주세요.',
		ALL: '모든 항목을 선택해 주세요.',
		MODAL: '항목이 비었습니다.\n다시 한번 확인해 주세요.',
	},
	POST: {
		COMPLETE: '게시글 작성이 완료되었습니다.',
		EDIT: '작성한 글을 수정하시겠습니까?',
		EDITFIN: '게시글 수정이 완료되었습니다.',
		DELETE: '게시글을 삭제하시겠습니까?',
	},
	STUDY: {
		DEADLINE:
			'마감한 게시글은 수정 및 마감 취소가 불가능해요.\n모집을 마감할까요?',
		LINK: '링크가 클립보드에 복사되었습니다.',
	},
	COMMENT: {
		COMPLETE: '댓글을 작성하시겠습니까?',
		EDIT: '댓글을 수정하시겠습니까?',
		DELETE: '댓글을 삭제하시겠습니까?',
	},
	REVIEW: {
		COMPLETE: '후기 작성이 완료되었습니다.',
		CANCEL: '후기 작성을 취소하시겠습니까?',
		DELETE: '후기를 삭제하시겠습니까?',
	},
	MYPAGE: {
		EDIT: '수정이 완료되었습니다.',
		NICKNAME: '',
	},
	REJECT: {
		COMPLETE: '거절 사유 작성이 완료되었습니다.',
		CANCEL: '거절 사유 작성을 취소하시겠습니까?',
	},
	FILE: {
		UPLOAD: 'JPEG, JPG, PNG 파일만 업로드 가능합니다.',
		NOFILE: '이미지를 첨부해 주세요.',
	},
	DELETE: {
		COMPLETE: '삭제가 완료되었습니다.',
	},
};

export default MESSAGE;
