import styled from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexCenter,
} from '../../../styles/common';

export const Wrapper = styled.div`
	${bodyContainer}
	height: 7.1875rem;
	flex-direction: column;
	align-items: center;
	padding: 0.94rem 0 1.25rem 0;
`;

export const ImgWrapper = styled.div`
	${flexCenter}
	flex-shrink: 0;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 6.25rem;
	height: 3.125rem;
	flex-shrink: 0;
`;

export const NavWrapper = styled.div`
	${flexAlignCenter}
	width: 67.5rem;
	justify-content: space-between;
	align-content: center;
	row-gap: 32.375rem;
	flex-wrap: wrap;
`;

export const NavBar = styled.div`
	display: flex;
	width: 19.6875rem;
	justify-content: space-between;
	align-items: flex-start;
	align-content: flex-start;
	row-gap: 1.9375rem;
	flex-shrink: 0;
	flex-wrap: wrap;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		cursor: pointer;
	}
`;

export const LoginBar = styled.div`
	${flexCenter}
	gap: 1.25rem;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.md};
		cursor: pointer;
	}
`;
