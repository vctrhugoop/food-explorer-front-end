import { List, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';
import { MenuMobile } from '../../components/MenuMobile';
import {
  ButtonMenu,
  ButtonOrder,
  ButtonSignOut,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  SearchInput,
} from './styles';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut } = useAuth();
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  function handleToggleMenuMobile() {
    setOpenMenuMobile(!openMenuMobile);
  }

  return (
    <>
      <MenuMobile
        isOpenMenu={openMenuMobile}
        closeMenuMobile={handleToggleMenuMobile}
        signOut={signOut}
      />
      <HeaderContainer>
        <HeaderContent>
          <ButtonMenu onClick={handleToggleMenuMobile}>
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
            <label htmlFor='search' className='sr-only'>
              Busque por pratos ou ingredientes
            </label>
            <input
              placeholder='Busque por pratos ou ingredientes'
              id='search'
              type='text'
              aria-label='Busca'
              role='search'
            />
          </SearchInput>
          <ButtonOrder>
            <Receipt size={32} />
            <p>Pedidos (0)</p>
            <span>0</span>
          </ButtonOrder>
          <ButtonSignOut onClick={SignOut}>
            <SignOut size={32} />
          </ButtonSignOut>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
