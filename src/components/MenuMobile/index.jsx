import { MagnifyingGlass, X } from '@phosphor-icons/react';
import React from 'react';

import {
  ButtonMenu,
  MenuMobileContainer,
  MenuMobileContent,
  MenuMobileHeader,
  SearchInput,
} from './styles';

export function MenuMobile({ closeMenuMobile, isOpenMenu, signOut }) {
  return (
    <MenuMobileContainer $isopenmenu={isOpenMenu}>
      <MenuMobileHeader>
        <ButtonMenu onClick={closeMenuMobile}>
          <X size={24} />
        </ButtonMenu>
        <span>Menu</span>
      </MenuMobileHeader>
      <MenuMobileContent>
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
        <nav>
          <button onClick={signOut}>Sair</button>
        </nav>
      </MenuMobileContent>
    </MenuMobileContainer>
  );
}
