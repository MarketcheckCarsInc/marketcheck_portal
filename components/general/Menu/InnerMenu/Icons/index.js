import Account from './Account'
import Search from './Search'

import styled from 'styled-components'

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export default () => (
  <Icons>
    <Search />
    <Account />
  </Icons>
)
