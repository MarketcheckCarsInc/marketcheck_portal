import Menu from '~/general/Menu'
import InnerMenu from '~/general/Menu/InnerMenu'
import Footer from '~/general/Footer'
import { mediaMin } from '%/styles/mixins'

import styled from 'styled-components'

const LayoutSecondary = styled.div`
  padding-top: 61px;
  ${mediaMin.laptop`padding-top: 66px;`}
`

export default ({children}) =>
  <LayoutSecondary>
    <Menu active>
      <InnerMenu />
    </Menu>
    { children }
    <Footer />
  </LayoutSecondary>
