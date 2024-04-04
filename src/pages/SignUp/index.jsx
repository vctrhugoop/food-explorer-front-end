import { AnchorLink } from '../../components/AnchorLink';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { SignUpContainer } from './styles';

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export function SignUp() {
  return (
    <SignUpContainer>
      <div>
        <img src={Logo} />
        <form>
          <div>
            <h1>Crie sua conta</h1>
            <div>
              <Label for='username'>Seu nome</Label>
              <Input
                placeholder='Exemplo: Maria da Silva'
                id='username'
                type='text'
                area-label='Nome'
                role='Name'
                required
              />
            </div>
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
            <Button>Criar conta</Button>
            <NavLink to='/'>
              <AnchorLink>Já tenho uma conta</AnchorLink>
            </NavLink>
          </div>
        </form>
      </div>
    </SignUpContainer>
  );
}
