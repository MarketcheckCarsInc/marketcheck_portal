import styled from 'styled-components'
import SVG from './search.svg'
import { rem } from 'polished'
import { mediaMin } from '%/styles/mixins'

const SearchIcon = styled(SVG)`
  fill: #b0bec5;
  width: ${rem(22)};
  margin: auto;
`

const Submit = styled.button`
  cursor: pointer;
  padding-top: ${rem(20)};
  padding-bottom: ${rem(20)};
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  &:active,
  &:focus {
    outline: 1px dotted;
  }

  ${mediaMin.desktop`
    padding: ${rem(20)} ${rem(25)};
  `}
`

export default () =>
  <Submit type='submit'>
    <SearchIcon />
  </Submit>
