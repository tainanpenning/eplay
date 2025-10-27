import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${Colors.white};
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  overflow: hidden;
  max-height: 0;
  padding-top: 0;
  transition: all 0.2s ease;

  &.is-open {
    max-height: 200px;
    padding-top: 12px;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${Colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`
