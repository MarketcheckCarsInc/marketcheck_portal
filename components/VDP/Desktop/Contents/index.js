import ContentsWrapper from './ContentsWrapper'
import SummaryReport from './SummaryReport'
import VehicleInformation from './VehicleInformation'
import MarketComparison from './MarketComparison'
import AveragesOverTime from './AveragesOverTime'
import TimeOnMarket from './TimeOnMarket'
import IncludedFeatures from './IncludedFeatures'
import FuelEfficiency from './FuelEfficiency'
import Environmental from './Environmental'
import ModelPopularity from './ModelPopularity'
import Competition from './Competition'
import ResaleValue from './ResaleValue'
import Safety from './Safety'
import Similar from './Similar'
import AveragesOverTimeContainer from '@/VDP/AveragesOverTime/AveragesOverTimeContainer'
import CompetitionContainer from '@/VDP/Competition/CompetitionContainer'
import SimilarContainer from '@/VDP/Similar/SimilarContainer'

export default props =>
  <ContentsWrapper>
    {/*<SummaryReport {...props} />*/}
    <VehicleInformation {...props} />
    <MarketComparison {...props} />
    {/*<AveragesOverTimeContainer id='marketAveragesContainer' {...props} />*/}
    <TimeOnMarket {...props} />
    <IncludedFeatures {...props} />
    {/*<FuelEfficiency {...props} />*/}
    {/*<Environmental {...props} />*/}
    <ModelPopularity {...props} />
    {/*<CompetitionContainer {...props} />*/}
    {/*<ResaleValue {...props} />*/}
    {/*<Safety {...props} />*/}
    <SimilarContainer id='similarContainer' name='similarContainer' {...props} />
  </ContentsWrapper>
