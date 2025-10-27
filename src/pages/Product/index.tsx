import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'
import { Loading } from '../../styles'

export const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery
          name={game.name}
          defaultCover={game.media.cover}
          items={game.media.gallery}
        />
      </Section>
    </>
  )
}
