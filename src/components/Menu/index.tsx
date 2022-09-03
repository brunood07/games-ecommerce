import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import { Logo } from '../Logo';
import { MenuGroup, Wrapper, IconWrapper, LogoWrapper } from './styles';

export const Menu = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <MenuIcon />
      </IconWrapper>
      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>
      <MenuGroup>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCartIcon />
        </IconWrapper>
      </MenuGroup>
    </Wrapper>
  );
};
