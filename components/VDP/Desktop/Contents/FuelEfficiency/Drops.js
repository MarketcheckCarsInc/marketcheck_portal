import styled from 'styled-components'
import { percentage, align } from '%/styles/mixins'
import Drop from './drop.svg'

const DropsRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 -7px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`
const calcTheWidth = props => {
  const colSpan = props.large ? 125 : 85
  return `
  max-width: ${percentage(colSpan, 295)};
  flex-basis: ${percentage(colSpan, 295)};
  `
}

const DropCol = styled.div`
  padding: 0 7px;
  position: relative;
  ${calcTheWidth}
`

const CenteredBox = styled.div`
  ${align()}
  top: 45%;
  text-align: center;
  color: #fff;
`

const Number = styled.h2`
  font-size: ${props => props.large ? '42px' : '27px'};
  font-weight: 500;
  margin-bottom: ${props => props.large ? '3px' : '2px'};
  line-height: 1;
`

const Unit = styled.h4`
  font-size: ${props => props.large ? '12px' : '8px'};
  font-weight: 700;
  margin-bottom: ${props => props.large ? '7px' : '5px'};
  line-height: 1;
`

const Detail = styled.h6`
  font-size: ${props => props.large ? '10px' : '7px'};
  text-transform: uppercase;
  line-height: 1;
`

export default (props) =>
  <DropsRow>
    <DropCol>
      <Drop />
      <CenteredBox>
        <Number>{parseInt(props.city_mileage)}</Number>
        <Unit>MPG</Unit>
        <Detail>City</Detail>
      </CenteredBox>
    </DropCol>

    <DropCol large >
      <Drop />
      <CenteredBox>
        <Number large >{parseInt(props.combined_mileage)}</Number>
        <Unit large >MPG</Unit>
        <Detail large >Combined</Detail>
      </CenteredBox>
    </DropCol>

    <DropCol>
      <Drop />
      <CenteredBox>
        <Number>{parseInt(props.highway_mileage)}</Number>
        <Unit>MPG</Unit>
        <Detail>HWY</Detail>
      </CenteredBox>
    </DropCol>
  </DropsRow>
