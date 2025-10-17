import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.image`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${Colors.black};
  font-weight: bold;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
