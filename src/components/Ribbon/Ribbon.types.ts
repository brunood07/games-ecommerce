import { ReactNode } from 'react';

export type RibbonColors = 'primary' | 'secondary';

export type RibbonProps = {
  children: ReactNode;
  color?: RibbonColors;
  size?: 'small' | 'normal';
};
