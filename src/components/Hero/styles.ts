import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;

  height: 800px;
  display: block;
  width: 100%;

  margin-top: 28px;
  padding-top: 48px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
    height: 400px;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    height: 100%;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  background-color: ${colors.black};
  font-weight: bold;
  padding: 16px;
  max-width: 290px;
  border-radius: 8px;
  margin-bottom: 80px;
  opacity: 0.6;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`

export const TagCont = styled.div`
  display: flex;
  flex-direction: row;
`
