import styled from 'styled-components'
import { em } from 'polished'

import { Container, FlexRow } from '~/layout'
import List from './List'
import seedData from './seedData'

import { mediaMax } from '%/styles/mixins'

const QuickOverview = styled.div`
  padding: ${em(80)} 0 ${em(5)};
  ${mediaMax.desktop`
    padding: ${em(60)} 0 ${em(5)};
  `}
`

export default () =>
  <QuickOverview>
    <Container>
      <FlexRow wrap justify='center'>
        {seedData.map((s, index) =>
          <List
            key={index + s.type}
            type={s.type}
            populars={s.populars}
          />
        )}
      </FlexRow>
    </Container>
  </QuickOverview>
