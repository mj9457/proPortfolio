import styled, { css } from 'styled-components';

const variantCSS = {
	primary: css`
		background: ${({ theme }) => theme.PALETTE.mainColor};
		color: ${({ theme }) => theme.PALETTE.fontColor};
		cursor: pointer;
		&:disabled {
			background: ${({ theme }) => theme.PALETTE.gray[100]};
			color: rgba(0, 0, 0, 0.1);
		}
	`,
	cancel: css`
		background: ${({ theme }) => theme.PALETTE.gray[200]};
		color: ${({ theme }) => theme.PALETTE.black};

		&:disabled {
			background: ${({ theme }) => theme.PALETTE.gray[100]};
			color: rgba(0, 0, 0, 0.1);
		}
	`,
	add: css`
		background: ${({ theme }) => theme.PALETTE.black};
		color: ${({ theme }) => theme.PALETTE.fontColor};
	`,
	reverse: css`
		border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
		background: ${({ theme }) => theme.PALETTE.white};
		color: ${({ theme }) => theme.PALETTE.mainColor};
	`,
};

const shapeCSS = {
	default: css`
		border-radius: 4px;
	`,
	medium: css`
		border-radius: 10px;
	`,
	round: css`
		border-radius: 50px;
	`,
};

const sizeCSS = {
	comment: css`
		width: 120px;
		padding: 10px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	small: css`
		padding: 6px 15px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	normal: css`
		padding: 12px 48px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	medium: css`
		padding: 14px 30px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	big: css`
		padding: 16px 68px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	bigger: css`
		padding: 16px 84px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
	full: css`
		width: 100%;
		padding: 15px 172px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	`,
};

export const Button = styled.button`
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
`;
