import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button.types';

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xs};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.sm};
    padding: ${theme.spacings.xxs} ${theme.spacings.md};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.md};
    padding: ${theme.spacings.xxs} ${theme.spacings.xl};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxs};
      }
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.base};
    padding: ${theme.spacings.xxs};

    cursor: pointer;

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`;
