import { styled } from 'styled-components';
import { bodyContainer, flexCenter, flexColumn } from '../../../styles/common';
import { Link } from 'react-router-dom';

export const ErrorBox = styled.div`
	${bodyContainer}
	${flexCenter}
    flex-direction: column;
	height: calc(100vh - 115px);

	& img {
		width: 150px;
	}
`;

export const LetterBox = styled.div`
	${flexColumn}
	align-items: center;
	gap: 14px;

	& div {
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	}
`;

export const ButtonBox = styled.div`
	margin-top: 40px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;
