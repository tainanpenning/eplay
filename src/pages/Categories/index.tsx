import { ProductsList } from '../../components/ProductsList'
import { Game } from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazerd 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    system: 'Windows'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazerd 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00'],
    image: resident,
    system: 'PS5'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazerd 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    system: 'Windows'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazerd 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    system: 'Windows'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um jogo RPG em desenvolvimento pela Blizzard Entretainment...',
    title: 'Diablo IV',
    infos: ['17/05'],
    image: diablo,
    system: 'Windows'
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um jogo RPG em desenvolvimento pela Blizzard Entretainment...',
    title: 'Zelda',
    infos: ['17/05'],
    image: zelda,
    system: 'Nintendo Switch 2'
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo RPG em desenvolvimento pela Blizzard Entretainment...',
    title: 'Star Wars',
    infos: ['17/05'],
    image: starWars,
    system: 'Windows'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um jogo RPG em desenvolvimento pela Blizzard Entretainment...',
    title: 'Residen Evil 4',
    infos: ['17/05'],
    image: resident,
    system: 'Nintendo Switch 2'
  }
]

export const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)
