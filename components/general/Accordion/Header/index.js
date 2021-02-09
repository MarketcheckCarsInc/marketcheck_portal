import styled, { css } from 'styled-components'
import { colors } from '%/styles'
import { rem, rgba } from 'polished'

const Header = styled.div`
  cursor: pointer;
  background-color: #333;
  color: ${colors.white};
  padding: ${rem(15)};
  display: flex;
  align-items: center;
  transition: 0.3s;
  border-bottom: 1px solid ${rgba('#d6d6d6', 0.3)};
  ${props => props.open && css`
    background-color: ${colors.blue};
    padding: ${rem(15)} ${rem(30)};
    border-bottom-color: transparent;
  `}
`

export default Header
