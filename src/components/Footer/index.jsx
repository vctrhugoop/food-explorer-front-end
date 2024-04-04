import LogoFooter from '../../assets/logo-footer.svg';
import { FooterContainer, FooterContent } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={LogoFooter} />
        <span>© 2024 - Todos os direitos reservados.</span>
      </FooterContent>
    </FooterContainer>
  );
}
