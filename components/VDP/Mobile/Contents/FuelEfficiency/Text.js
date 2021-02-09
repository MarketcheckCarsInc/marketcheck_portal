import styled from 'styled-components'
import { percentage } from '%/styles/mixins'
import { rgba } from 'polished'
import { number } from '%/format'

const Drops = styled.div`
  text-align: center;
  margin-bottom: 5px;
`

const DropRow = styled.div`
  display: flex;
  margin: 0 -5px;
`

const DropCol = styled.div`
  padding: 0 5px;
  max-width: ${percentage(1, 3)};
  flex-basis: ${percentage(1, 3)};
`

const DataText = styled.p`
  font-size: 14px;
  line-height: 2;
  margin-bottom: 8px !important;
`

const SmallText = styled.span`
  font-size: 8px;
  ${props => props.top && `vertical-align: top;`}
`

const DataLabel = styled.p`
  color: ${rgba('#1f2630', 0.56)};
`

export default (props) =>
  <Drops>
    <DropRow>
      <DropCol>
        <DataText>
          56<SmallText top >%</SmallText> / 64<SmallText top >%</SmallText>
        </DataText>
        <DataLabel>City/Hwy</DataLabel>
      </DropCol>
      <DropCol>
        <DataText>{number(props.annual_miles)}</DataText>
        <DataLabel>Annual Miles</DataLabel>
      </DropCol>
      <DropCol>
        <DataText>
          {parseInt(props.city_mileage)}/{parseInt(props.highway_mileage)}<SmallText>mpg</SmallText>
        </DataText>
        <DataLabel>City/Hwy</DataLabel>
      </DropCol>
    </DropRow>
  </Drops>
