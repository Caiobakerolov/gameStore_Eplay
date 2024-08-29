import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 16px;
  margin-bottom: 80px;
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
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const NavMobile = styled.nav`
  @media (max-width: ${breakPoints.tablet}) {
    display: none;

    &.is-open {
      display: block;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const LogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-right: auto;
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
  margin-left: auto;

  img {
    margin-left: 8px;
    align-items: center;
  }

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Burgers = styled.div`
  width: 32px;
  cursor: pointer;

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
