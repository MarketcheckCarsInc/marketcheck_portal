import Section from '~/VDP/Section'
import Text from './Text'
import Drops from './Drops.js'

import {
  PriceHeader,
  Money,
  FuelExpense,
  Separator
} from './Components'

import { FlexRow, FlexCol } from '~/layout'

export default ({ fuelEfficiency }) =>
  <Section id='fuelContainer' title='Fuel Efficiency' summary='Based upon avg. fuel prices across the US.'>
    <FlexRow>
      <FlexCol cols={5}>
        <Drops {...fuelEfficiency} />
      </FlexCol>
      <FlexCol cols={5} offset={1}>
        <PriceHeader>$<Money>{fuelEfficiency.monthly_fuel_expense}</Money></PriceHeader>
        <FuelExpense>Monthly fuel Expense</FuelExpense>
        <Separator />
        {fuelEfficiency.annual_miles &&
        <Text {...fuelEfficiency} />
        }
      </FlexCol>
    </FlexRow>
  </Section>
