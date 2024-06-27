import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  width: 100%;
  height: 800px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  margin-top: 28px;

  .container {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Price = styled.p`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 80px;

  span {
    text-decoration: line-through;
  }
`
