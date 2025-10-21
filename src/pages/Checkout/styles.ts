import styled from 'styled-components'
import { Colors } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${Colors.white};
    border: 1px solid ${Colors.white};
    border-radius: 4px;
    height: 32px;
    width: 100%;
    padding: 0 8px;
  }
`
