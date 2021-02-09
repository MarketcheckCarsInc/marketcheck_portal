import Circle from './Circle.js'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'

const ChartsWrapper = styled.div`
  text-align: center;
`

const CircleWrapper = styled.div`
  margin-bottom: -140px;
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 15px;
  color: #313842;
`

const Info = styled.h6`
  font-size: 14px;
  line-height: 24px;
  color: #39434c;
`

export default ({
  ghg_emissions_rating: emissionsRating,
  ghg_emissions_indicator: emissionsIndicator,
  smog_indicator: smogIndicator,
  smog_rating: smogRating
}) =>
  <ChartsWrapper>
    <FlexRow>
      <FlexCol cols={6}>
        <CircleWrapper>
          <Circle score={emissionsRating} color='green' text={emissionsIndicator} />
        </CircleWrapper>
        <Title>Greenhouse Gas Emissions</Title>
        <Info>This shows the vehicle’s impact on climate change in terms of greenhouse gases / carbondioxide(CO2).</Info>
      </FlexCol>
      <FlexCol cols={6}>
        <CircleWrapper>
          <Circle score={smogRating} color='blue' text={smogIndicator} />
        </CircleWrapper>
        <Title>Smog Rating</Title>
        <Info>This shows the vehicle’s emissions of pollutants known to cause smog and other forms of air pollution.</Info>
      </FlexCol>
    </FlexRow>
  </ChartsWrapper>
