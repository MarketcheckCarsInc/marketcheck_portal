import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { em } from 'polished'
import { colors } from '%/styles'
import SvgIcon from './hamburger-icon.svg'

const FilterBy = styled.div`
  display: inline-block;
  margin-right: 6em;
  ${mediaMax.largeTablet`
    margin-right: 4em;
  `}

  svg {
    display: inline-block;
    height: 13px;
    margin-right: ${em(10)};
    vertical-align: middle;
    width: 13px;
  }
`

const Text = styled.span`
  color: ${colors.darkengray};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;
  ${mediaMax.largeTablet`
    font-size: ${em(11)};
  `}
`

export default ({
  name
}) =>
  <FilterBy>
    <SvgIcon />
    <Text>{ name }</Text>
  </FilterBy>
