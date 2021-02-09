import { Accordion } from '~/general'
import styled from 'styled-components'
import { colors } from '%/styles'
import { rgba } from 'polished'
import Stats from './Stats.js'

const Summary = styled.p`
  opacity: 0.54;
  margin-bottom: 60px !important;
`

const PriceHeader = styled.h1`
  font-size: 64px;
  text-align: center;
  font-weight: 700;
  color: #414c56;
  margin-bottom: 6px;
`

const Money = styled.span`
  color: ${colors.softblue};
`

const FuelExpense = styled.h6`
  font-size: 14px;
  text-align: center;
  color: ${rgba('#1F2630', 0.56)};
  margin-bottom: 25px;
`

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #d6d6d6;
  margin-bottom: 20px;
`

export default ({ fuelEfficiency }) =>
  <Accordion title='Fuel Efficiency'>
    <Summary>Based upon avg. fuel prices across the US.</Summary>
    <PriceHeader>$<Money>{fuelEfficiency.monthly_fuel_expense}</Money></PriceHeader>
    <FuelExpense>Monthly fuel Expense</FuelExpense>
    <Separator />
    <Stats {...fuelEfficiency} />
  </Accordion>
