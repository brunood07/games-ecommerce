import { ReactNode } from 'react';

export type BannerProps = {
  img: string;
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: ReactNode;
  ribbonSize?: 'small' | 'normal';
  ribbonColor?: 'primary' | 'secondary';
};
