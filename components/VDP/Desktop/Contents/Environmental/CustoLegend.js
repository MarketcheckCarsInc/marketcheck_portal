import { colors } from '%/styles'
import styled from 'styled-components'

const LegendWrapper = styled.div`
  text-align: center;
`

const Score = styled.h1`
  color: ${colors.black};
  font-size: 34px;
  margin-bottom: 15px;
`
const Rating = styled.h3`
  color: ${props => colors[props.color]};
  font-weight: 500;
  font-size: 17px;
`

const CustoLegend = (props) =>
  <LegendWrapper>
    <Score>{props.score}/10</Score>
    <Rating color={props.color}>{props.text}</Rating>
  </LegendWrapper>

export default CustoLegend
