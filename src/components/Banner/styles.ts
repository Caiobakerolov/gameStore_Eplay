import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakPoints } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 800px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  margin-top: 28px;
  position: relative;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
    height: 400px;
  }

  .container {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
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
