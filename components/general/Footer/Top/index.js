import { FlexRow } from '~/layout'

import Column from './Column'
import Links from './Links'
import Social from './Social'

import topData from './topData'

export default () =>
  <FlexRow justify='center' wrap>
    {topData.map((d, i) =>
      <Column key={i + d.name}>
        <Links
          section={d.name}
          links={d.links}
        />
      </Column>
    )}
    <Column social>
      <Social />
    </Column>
  </FlexRow>
