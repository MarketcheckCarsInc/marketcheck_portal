import BottomWrapper from './BottomWrapper'
import Logo from './Logo'
import LargeCol from './LargeCol'
import SmallCol from './SmallCol'
import SmallPrint from './SmallPrint'
import Text from './Text'
import { Row } from '~/layout'

export default () =>
  <BottomWrapper>
    <Row>
      <SmallCol>
        <Logo />
        <Text>2017 MarketCheck ® Inc.</Text>
        <Text>All Rights Reserved.</Text>
      </SmallCol>
      <LargeCol>
        <SmallPrint>
          Disclaimer
        </SmallPrint>
        <SmallPrint>
          All figures are provided as a result of a VIN data lookup. Some data may not be accurate for the vehicle due to factors such as optional equipment
        </SmallPrint>
      </LargeCol>
    </Row>
  </BottomWrapper>
