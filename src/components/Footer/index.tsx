import * as S from './styles'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <S.Link
            title="Clique aqui para acessar os jogos de RPG"
            to="/categories#rpg"
          >
            RPG
          </S.Link>
          <S.Link
            title="Clique aqui para acessar os jogos de ação"
            to="/categories#action"
          >
            Ação
          </S.Link>
          <S.Link
            title="Clique aqui para acessar os jogos de esportes"
            to="/categories#sports"
          >
            Esportes
          </S.Link>
          <S.Link
            title="Clique aqui para acessar os jogos de simalção"
            to="/categories#simulation"
          >
            Simulação
          </S.Link>
          <S.Link
            title="Clique aqui para acessar os jogos de luta"
            to="/categories#fight"
          >
            Luta
          </S.Link>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <S.Link
            title="Clique aqui para acessar a seção de promoções"
            to="/#on-sale"
          >
            Promoções
          </S.Link>
          <S.Link
            title="Clique aqui para acessar a seção de em breve"
            to="/#coming-soon"
          >
            Em breve
          </S.Link>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)
