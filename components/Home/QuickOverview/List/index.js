import { FlexCol } from '~/layout'
import ListType from './ListType'
import Popular from './Popular'

import styled from 'styled-components'
import { em } from 'polished'
import { mediaMax } from '%/styles/mixins'

const List = styled.div`
  margin-bottom: ${em(75)};
  ${mediaMax.tablet`
    text-align: center;
  `}
`

export default ({
  type,
  populars
}) =>
  <FlexCol phablet={{ cols: 6 }} laptop={{ cols: 3 }}>
    <List>
      <ListType>{ type }</ListType>
      { populars.map((p, index) =>
        <Popular
          key={index + p.brand}
          brand={p.brand}
          listings={p.listings}
          startingPrice={p.startingPrice}
        />
      ) }
    </List>
  </FlexCol>
