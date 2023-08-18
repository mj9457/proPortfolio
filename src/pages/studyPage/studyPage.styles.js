import styled from 'styled-components';
import { bodyContainer } from '../../styles/common';

const Container = styled.div`
	padding: 4.7rem 0 7.35rem;
	${bodyContainer}
`;

const Title = styled.h2`
	margin-bottom: 0.5rem;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
`;

const SubTitle = styled.h3`
	margin-bottom: 2.5rem;
`;

const TitleWrapper = styled.div``;

export { Container, Title, SubTitle, TitleWrapper };
