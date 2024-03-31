import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { SignInContainer } from './styles';

import Logo from '../../assets/logo.png';
import { Anchor } from '../../components/Anchor';

export function SignIn() {
  return (
    <SignInContainer>
      <div>
        <img src={Logo} />
        <form>
          <h1>Faça seu login</h1>
          <div>
            <Label>Email</Label>
            <Input placeholder='Exemplo: exemplo@exemplo.com.br' />
          </div>
          <div>
            <Label>Senha</Label>
            <Input placeholder='No mínimo 6 caracteres' />
          </div>
          <Button>Entrar</Button>
          <Anchor>Crie sua conta</Anchor>
        </form>
      </div>
    </SignInContainer>
  );
}
