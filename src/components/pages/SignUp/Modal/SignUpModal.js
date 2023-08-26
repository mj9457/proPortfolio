import React from 'react';
import * as H from './SignUpModal.styles';
import Naver from '../NaverLogin/NaverLogin';

function SignUpModal({ onClose }) {
	return (
		<H.ModalWrapper>
			<H.ModalContentWrapper>
				<button onClick={onClose}>
					<img src="./assets/img/icons/closebtn.png" alt="닫기" />
				</button>
				<H.Contents>
					<H.Title>포폴에 오신것을 환영합니다 !</H.Title>
					<Naver />
					<p>네이버로 시작하기</p>
				</H.Contents>
			</H.ModalContentWrapper>
		</H.ModalWrapper>
	);
}
export default SignUpModal;
