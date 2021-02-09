import { colors } from '%/styles'
import styled from 'styled-components'

const LegendWrapper = styled.div`
  text-align: center;
`

const BlueText = styled.p`
  color: ${colors.blue};
  margin-bottom: 0;
`
const NormalText = styled.p`
  color: ${colors.gray};
  margin-bottom: 0;
`

const CustoLegend = (props) =>
  <LegendWrapper>
    <BlueText>{props.days} days</BlueText>
    <NormalText>{props.text}</NormalText>
  </LegendWrapper>

export default CustoLegend
