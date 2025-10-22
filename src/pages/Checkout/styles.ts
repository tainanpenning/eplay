import styled from 'styled-components'
import { Colors } from '../../styles'

type InputGroupProps = {
  $maxWidth?: string
}

type TabButtonProps = {
  $isActive: boolean
}

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${Colors.white};
    border: 1px solid ${Colors.white};
    border-radius: 4px;
    height: 32px;
    width: 100%;
    padding: 0 8px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.white};
  background-color: ${(props) =>
    props.$isActive ? Colors.green : Colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;

  img {
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`
