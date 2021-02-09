import { Container } from '~/layout'
import TopRow from './TopRow'
import Return from './Return'
import CarName from './CarName'
import Slideshow from './Slideshow'
import OverviewWrapper from './OverviewWrapper'
import Brief from './Brief'
import Details from './Details'

export default ({
  name,
  brief,
  sliderPics,
  price,
  discount,
  miles,
  averages,
  vdpUrl,
  stats
}) => {
  return(
    <OverviewWrapper>
      <TopRow>
        <Return />
        <CarName>{name}</CarName>
      </TopRow>
      <Container>
        <Brief>{brief}</Brief>
        <Slideshow slides={sliderPics} />
      </Container>
      <Details stats={stats} price={price} discount={discount} miles={miles} averages={averages} vdpUrl={vdpUrl} />
    </OverviewWrapper>)
  }
