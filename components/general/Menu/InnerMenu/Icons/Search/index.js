import SVG from './search.svg'
import styled from 'styled-components'

const A = styled.a`
  display: block;
`
const Search = styled(SVG)`
  fill: #fff;
  width: 15px;
`

export default () => <A><Search /></A>
