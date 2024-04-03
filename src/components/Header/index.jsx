import { List, Receipt } from '@phosphor-icons/react';
import { HeaderContainer } from './styles';

import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <button>
        <List size={32} />
      </button>
      <div>
        <img src={Logo} />
        <span>admin</span>
      </div>
      <button>
        <Receipt size={32} />
        <span>0</span>
      </button>
    </HeaderContainer>
  );
}
