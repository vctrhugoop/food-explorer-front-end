import { AnchorLink } from '../../components/AnchorLink';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { SignUpContainer } from './styles';

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { api } from '../../services/api';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    console.log(name, email, password);

    if (!name || !email || !password) {
      // TODO: add toast message
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('erro');
        }
      });
  }

  return (
    <SignUpContainer>
      <div>
        <img src={Logo} />
        <form>
          <div>
            <h1>Crie sua conta</h1>
            <div>
              <Label htmlFor='username'>Seu nome</Label>
              <Input
                placeholder='Exemplo: Maria da Silva'
                id='username'
                type='text'
                area-label='Nome'
                role='Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                placeholder='Exemplo: exemplo@exemplo.com.br'
                id='email'
                type='email'
                area-label='Email'
                role='email'
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </div>
            <Button onClick={(e) => handleSignUp(e)}>Criar conta</Button>
            <NavLink to='/'>
              <AnchorLink>Já tenho uma conta</AnchorLink>
            </NavLink>
          </div>
        </form>
      </div>
    </SignUpContainer>
  );
}
