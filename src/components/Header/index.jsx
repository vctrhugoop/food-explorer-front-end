import { List, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';
import {
  ButtonMenu,
  ButtonOrder,
  ButtonSignOut,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  SearchInput,
} from './styles';

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ButtonMenu>
          <List size={32} />
        </ButtonMenu>
        <LogoContainer>
          <NavLink to='/'>
            <img src={Logo} />
          </NavLink>
          <span>admin</span>
        </LogoContainer>
        <SearchInput>
          <MagnifyingGlass size={24} />
          <input placeholder='Busque por pratos ou ingredientes' />
        </SearchInput>
        <ButtonOrder>
          <Receipt size={32} />
          <p>Pedidos (0)</p>
          <span>0</span>
        </ButtonOrder>
        <ButtonSignOut>
          <SignOut size={32} />
        </ButtonSignOut>
      </HeaderContent>
    </HeaderContainer>
  );
}
