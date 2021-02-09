import { LayoutSecondary } from '~/layout'
import FilterBar from './FilterBar'
import Contents from './Contents'

const SRP = (props) => {
  return (
    <LayoutSecondary>
      <FilterBar {...props} />
      <Contents {...props} />
    </LayoutSecondary>
  )
}

export default SRP
