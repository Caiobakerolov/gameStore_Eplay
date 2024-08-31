import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;

  margin-top: ${(props) => props.marginTop || '0'};

  @media (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
