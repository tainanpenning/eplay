import { Action, Item, Items, Modal, ModalContent } from './styles'

import spidermanImg from '../../assets/images/banner-homem-aranha.png'
import hogwartsImg from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spidermanImg
  },
  {
    type: 'image',
    url: hogwartsImg
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=-DkMIyeiJEv434gw'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

export const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Items>
        {mock.map((media, index) => (
          <Item
            key={media.url}
            onClick={() => {
              setModal({
                isVisible: true,
                type: media.type,
                url: media.url
              })
            }}
          >
            <img
              src={getMediaCover(media)}
              alt={`Mídia ${index + 1} de ${name}`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt="Clique para maximar a mídia"
              />
            </Action>
          </Item>
        ))}
      </Items>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              onClick={() => closeModal()}
              src={close}
              alt="Ícone de fechar"
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url}></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}
