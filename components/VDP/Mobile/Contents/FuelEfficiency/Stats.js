import styled from 'styled-components'
import Text from './Text.js'
import Drops from './Drops.js'

const Stats = styled.div`
  margin-bottom: 40px;
`

export default (props) =>
  <Stats>
    <Text {...props} />
    <Drops {...props} />
  </Stats>
