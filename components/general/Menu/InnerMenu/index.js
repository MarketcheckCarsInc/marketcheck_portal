import React from 'react'
import Links from './Links'
import Icons from './Icons'
import { Container } from '~/layout'

import styled from 'styled-components'

import { em } from 'polished'

const InnerMenu = styled.div`
  display: flex;
  padding: ${em(20)} 0;
`

export default () => (
  <Container>
    <InnerMenu>
      <Links />
      {/*<Icons />*/}
    </InnerMenu>
  </Container>
)
