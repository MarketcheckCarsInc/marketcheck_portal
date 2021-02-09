import { FlexRow, FlexCol } from '~/layout'
import SingleFeature from './SingleFeature'

import Free from './free.svg'
import Flexible from './flexible.svg'
import Volume from './volume.svg'

const colsettings = {
  laptop: {
    cols: 4
  },
  phablet: {
    cols: 6
  }
}

export default () =>
  <FlexRow justify='center' wrap>
    <FlexCol {...colsettings}>
      <SingleFeature
        title='Free & Easy'
        text='Make your car search experience as enjoyable as possible'
      >
        <Free />
      </SingleFeature>
    </FlexCol>

    <FlexCol {...colsettings}>
      <SingleFeature
        title='Fast & Flexible'
        text='We fetch and analyse millions of Used and New car listings from all over the web'
      >
        <Flexible />
      </SingleFeature>
    </FlexCol>

    <FlexCol {...colsettings}>
      <SingleFeature
        title='Volume'
        text='Search through 14 Million live and 1 Billion historical listings!'
      >
        <Volume />
      </SingleFeature>
    </FlexCol>
  </FlexRow>
