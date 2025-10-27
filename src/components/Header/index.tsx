import { open } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'

import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

export const Header = () => {
  const dispacth = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispacth(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
          {items.length} <span>- Produto(s)</span>
          <img src={cart} alt="Cart" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}
