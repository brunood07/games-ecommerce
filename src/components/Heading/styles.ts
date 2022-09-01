import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from './Heading.types';

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxs};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.md};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xl};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${({ theme }) => theme.font.sizes.xxl};
    `};

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`;
