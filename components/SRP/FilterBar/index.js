import { OutContainer, FlexRow, FlexCol } from '~/layout'
import { currency } from '%/format'
import { mediaMax } from '%/styles/mixins'
import Wrapper from './Wrapper'
import FilterBy from './FilterBy'
import ResetBtn from './ResetBtn'
import Averages from './Averages'
import SortBy from './SortBy'

import styled from 'styled-components'

const FlexColLeft = styled(FlexCol)`
  text-align: left;
  ${mediaMax.desktop`
    max-width: 30%;
  `}
`

const FlexColRight = styled(FlexCol)`
  text-align: right;
  ${mediaMax.desktop`
    max-width: 70%;
  `}
`

const list = [
  {
    label: 'Nearest first',
    value: 'dist|asc'
  },
  {
    label: 'Farthest first',
    value: 'dist|desc'
  },
  {
    label: 'Lowest price first',
    value: 'price|asc'
  },
  {
    label: 'Highest price first',
    value: 'price|desc'
  },
  {
    label: 'Lowest mileage first',
    value: 'miles|asc'
  },
  {
    label: 'Highest mileage first',
    value: 'miles|desc'
  },
  {
      label: 'Newest first',
      value: 'last_seen|desc'
  },
  {
    label: 'Oldest first',
    value: 'last_seen|asc'
  },

  {
      label: 'DOM Newest first',
      value: 'dom_active|asc'
  },
  {
    label: 'DOM Oldest first',
    value: 'dom_active|desc'
  }
  // {
  //   label: 'Newest listings first',
  //   value: 'last_seen|asc'
  // },
  // {
  //   label: 'Oldest listings first',
  //   value: 'last_seen|desc'
  // }
]

export default (props) => {
  return (
    <Wrapper>
      <OutContainer>
        <FlexRow>
          <FlexColLeft>
            <FilterBy name='Filter by' />
            <ResetBtn name='Reset' resetBtn={props.resetButton} />
          </FlexColLeft>
          <FlexColRight>
            <Averages label='Avg. Miles' miles={props.responseFactory.stats.miles.mean ? Math.round(props.responseFactory.stats.miles.mean) : '-' + ' mi'} />
            <Averages label='Avg. Price' miles={props.responseFactory.stats.price.mean? currency(Math.round(props.responseFactory.stats.price.mean)) : '-'} />
            <SortBy label='Sort By' items={list} updateSuperState={props.updateSortOrder} />
          </FlexColRight>
        </FlexRow>
      </OutContainer>
    </Wrapper>
  )
}