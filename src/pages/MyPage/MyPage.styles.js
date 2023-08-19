import styled from 'styled-components';
import { bodyContainer } from '../../styles/common';

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	${bodyContainer}
`;

export const LightContent = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
`;
