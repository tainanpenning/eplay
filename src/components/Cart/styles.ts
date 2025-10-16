import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import closeIcon from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${Colors.gray};
  z-index: 1;
  padding: 40px 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    width: 100%;
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.white};
  margin: 32px 0 16px;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Colors.lightGray};
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${Colors.lightGray};
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${Colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${Colors.white};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;

    &:hover {
      cursor: pointer;
    }
  }
`
