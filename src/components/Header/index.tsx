import { open } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, LinkItem, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const Header = () => {
  const dispacth = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispacth(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - Produto(s)
        <img src={cart} alt="Cart" />
      </CartButton>
    </HeaderBar>
  )
}
