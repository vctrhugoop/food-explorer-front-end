import { AnchorLink } from '../../components/AnchorLink';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { SignInContainer } from './styles';

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export function SignIn() {
  return (
    <SignInContainer>
      <div>
        <img src={Logo} />
        <form>
          <h1>Faça seu login</h1>
          <div>
            <Label>Email</Label>
            <Input
              placeholder='Exemplo: exemplo@exemplo.com.br'
              type='email'
              required
            />
          </div>
          <div>
            <Label>Senha</Label>
            <Input
              placeholder='No mínimo 6 caracteres'
              type='password'
              required
            />
          </div>
          <Button>Entrar</Button>
          <NavLink to='/register'>
            <AnchorLink>Crie sua conta</AnchorLink>
          </NavLink>
        </form>
      </div>
    </SignInContainer>
  );
}
