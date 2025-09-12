import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <Link>RPG</Link>
          <Link>Ação</Link>
          <Link>Aventura</Link>
          <Link>Esportes</Link>
          <Link>Simulação</Link>
          <Link>Estratégia</Link>
          <Link>FPS</Link>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <Link>Novidades</Link>
          <Link>Promoções</Link>
          <Link>Em breve</Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)
