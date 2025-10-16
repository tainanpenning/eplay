import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formatPrice } from '../ProductsList'
import { close, remove } from '../../store/reducers/cart'
import { Button } from '../Button'
import { Tag } from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispacth = useDispatch()

  const closeCart = () => {
    dispacth(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, total) => {
      return (acc += total.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispacth(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img src={i.media.thumbnail} alt={i.name} />
              <div>
                <h3>{i.name}</h3>
                <Tag>{i.details.category}</Tag>
                <Tag>{i.details.system}</Tag>
                <span>{formatPrice(i.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(i.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}
