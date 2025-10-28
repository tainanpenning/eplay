import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'
import { close, remove } from '../../store/reducers/cart'
import { Button } from '../Button'
import { Tag } from '../Tag'
import * as S from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispacth = useDispatch()

  const closeCart = () => {
    dispacth(close())
  }

  const removeItem = (id: number) => {
    dispacth(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((i) => (
                <S.CartItem key={i.id}>
                  <img src={i.media.thumbnail} alt={i.name} />
                  <div>
                    <h3>{i.name}</h3>
                    <Tag>{i.details.category}</Tag>
                    <Tag>{i.details.system}</Tag>
                    <span>{parseToBrl(i.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(i.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um jogo para continuar
            com a compra.
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}
