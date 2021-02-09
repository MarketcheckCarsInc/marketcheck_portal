import styled from 'styled-components'
import { currency, number } from '%/format'
import { colors } from '%/styles'
import Arrow from './caret.svg'

const miles = num => `${number(num)} mi`

const StatCol = styled.div`
  margin-right: 20px;
  min-width: 80px;
`

const StatNumber = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
`

const StatPill = styled.span`
  display: flex;
  align-items: center;
  background-color: ${props => props.gain ? colors.green : colors.red};
  padding: 5px 8px;
  border-radius: 4px;

  svg {
    width: 7px;
    height: 4px;
    margin-left: 5px;
    ${props => !props.gain && `
    transform: rotate(180deg);
    transform-origin: center;
    `}
  }
`
const PillNumber = styled.span`
  font-size: 12px;
  color: ${colors.white};
  display: block;
`

const isNumber = (x) => !isNaN(parseFloat(x))

export default ({
  money,
  gain,
  noPill,
  price,
  carMiles,
  priceDifference,
  milesDifference
}) =>
  <StatCol>
    {money &&
    <StatNumber>{isNumber(price) ? currency(price) : 'NA'}</StatNumber>
    }
    {!money &&
      <StatNumber>{isNumber(carMiles) ? miles(carMiles) : 'NA'}</StatNumber>
    }
    {money && isNumber(priceDifference) &&
      <StatPill gain={gain}>
        <PillNumber>{currency(Math.abs(priceDifference)) }</PillNumber>
        <Arrow />
      </StatPill>
    }
    {!money && isNumber(milesDifference) &&
      <StatPill gain={gain}>
        <PillNumber>{miles(Math.abs(milesDifference))}</PillNumber>
        <Arrow />
      </StatPill>
    }
  </StatCol>
