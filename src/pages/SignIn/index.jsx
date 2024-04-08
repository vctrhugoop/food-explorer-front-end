import { AnchorLink } from '../../components/AnchorLink';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { SignInContainer } from './styles';

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();

    signIn({ email, password });
  }

  return (
    <SignInContainer>
      <div>
        <img src={Logo} />
        <form>
          <div>
            <h1>Faça seu login</h1>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                placeholder='Exemplo: exemplo@exemplo.com.br'
                id='email'
                type='email'
                area-label='Email'
                role='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor='password'>Senha</Label>
              <Input
                placeholder='No mínimo 6 caracteres'
                id='password'
                type='password'
                area-label='Senha'
                role='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button onClick={(e) => handleSignIn(e)}>Entrar</Button>
            <NavLink to='/register'>
              <AnchorLink>Crie sua conta</AnchorLink>
            </NavLink>
          </div>
        </form>
      </div>
    </SignInContainer>
  );
}
