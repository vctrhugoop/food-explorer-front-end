import { AnchorLink } from '../../components/AnchorLink';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { SignUpContainer } from './styles';

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export function SignUp() {
  return (
    <SignUpContainer>
      <div>
        <img src={Logo} />
        <motion.form
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Crie sua conta</h1>
          <div>
            <Label>Seu nome</Label>
            <Input placeholder='Exemplo: Maria da Silva' type='text' required />
          </div>
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
          <Button>Criar conta</Button>
          <NavLink to='/'>
            <AnchorLink>Já tenho uma conta</AnchorLink>
          </NavLink>
        </motion.form>
      </div>
    </SignUpContainer>
  );
}
