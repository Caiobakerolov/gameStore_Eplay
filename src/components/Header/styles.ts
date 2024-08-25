import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakPoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Burgers = styled.div`
  width: 32px;

  span {
    display: block;
    background-color: ${colors.white};
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
  }

  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`
