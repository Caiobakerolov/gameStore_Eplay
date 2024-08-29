import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.gray};
  padding: 24px;
  margin-top: 96px;
  margin-bottom: 40px;
  border-radius: 8px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
