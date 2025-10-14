import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContent className="container">
        <S.FooterSection>
          <h4>Contato</h4>
          <p>Email: contato@anaribeiroadvocacia.com.br</p>
          <p>Telefone: (11) 98765-4321</p>
          <p>Endereço: Av. Paulista, 1234, São Paulo, SP</p>
        </S.FooterSection>
        <S.FooterSection>
          <h4>Links Úteis</h4>
          <S.FooterLink href="#servicos">Serviços</S.FooterLink>
          <S.FooterLink href="#sobre">Sobre Mim</S.FooterLink>
          <S.FooterLink href="#faq">Perguntas Frequentes</S.FooterLink>
        </S.FooterSection>
        <S.FooterSection>
          <h4>Redes Sociais</h4>
          <S.FooterLink href="https://linkedin.com">LinkedIn</S.FooterLink>
          <S.FooterLink href="https://instagram.com">Instagram</S.FooterLink>
        </S.FooterSection>
      </S.FooterContent>
      <S.FooterBottom>
        <p>&copy; 2025 Ana Ribeiro Advocacia. Todos os direitos reservados.</p>
      </S.FooterBottom>
    </S.Footer>
  );
};

export default Footer;