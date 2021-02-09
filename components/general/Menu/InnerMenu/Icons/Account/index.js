import styled from 'styled-components'
import SVG from './user.svg'
import { mediaMax } from '%/styles/mixins'

const A = styled.a`
  display: block;
  margin-left: 80px;
  ${mediaMax.laptop`margin-left: 20px;`}
`

const User = styled(SVG)`
  width: 15px;
`

export default () => <A><User /></A>
