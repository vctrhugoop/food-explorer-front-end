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
          <div>
            <h1>Faça seu login</h1>
            <div>
              <Label for='email'>Email</Label>
              <Input
                placeholder='Exemplo: exemplo@exemplo.com.br'
                id='email'
                type='email'
                area-label='Email'
                role='email'
                required
              />
            </div>
            <div>
              <Label for='password'>Senha</Label>
              <Input
                placeholder='No mínimo 6 caracteres'
                id='password'
                type='password'
                area-label='Senha'
                role='password'
                required
              />
            </div>

            <Button>Entrar</Button>
            <NavLink to='/register'>
              <AnchorLink>Crie sua conta</AnchorLink>
            </NavLink>
          </div>
        </form>
      </div>
    </SignInContainer>
  );
}
