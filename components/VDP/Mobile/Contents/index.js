import { Container } from '~/layout'
import ContentsWrapper from './ContentsWrapper'
import SummaryReport from './SummaryReport'
import VehicleInformation from './VehicleInformation'
import MarketComparison from './MarketComparison'
import TimeOnMarket from './TimeOnMarket'
import IncludedFeatures from './IncludedFeatures'
import FuelEfficiency from './FuelEfficiency'
import Environmental from './Environmental'
import ModelPopularity from './ModelPopularity'
import ResaleValue from './ResaleValue'
import Safety from './Safety'
import AveragesOverTimeContainer from '@/VDP/AveragesOverTime/AveragesOverTimeContainer'
import CompetitionContainer from '@/VDP/Competition/CompetitionContainer'
import SimilarContainer from '@/VDP/Similar/SimilarContainer'
import Similar from './Similar'

export default props =>
  <ContentsWrapper>
    <Container>
      {/*<SummaryReport {...props} />*/}
      <VehicleInformation {...props} />
      <MarketComparison {...props} />
      {/*<AveragesOverTimeContainer {...props} />*/}
      <TimeOnMarket {...props} />
      <IncludedFeatures {...props} />
      {/*<FuelEfficiency {...props} />*/}
      {/*<Environmental {...props} />*/}
      <ModelPopularity {...props} />
      {/*<CompetitionContainer {...props} />*/}
      {/*<ResaleValue {...props} />*/}
      {/*<Safety {...props} />*/}
      <SimilarContainer  id='similarContainer' name='similarContainer' {...props} />
    </Container>
  </ContentsWrapper>
