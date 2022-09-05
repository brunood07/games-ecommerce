import { RibbonProps } from './Ribbon.types';

import { Wrapper } from './styles';

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <Wrapper color={color} size={size}>
      {children}
    </Wrapper>
  );
};
