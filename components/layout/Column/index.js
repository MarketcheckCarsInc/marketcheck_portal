import styled from 'styled-components'
// Helpers for styling
import { rem, clearFix } from 'polished'
import { grid, bpKeysArray } from '%/styles'
// Helper for the magic
import responsiveStyling from './responsiveStyling'
import PropTypes from 'prop-types'

// Styling helpers
const padding = rem(grid.gutter / 2)

// The component _per se_
const Column = styled.div`
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: ${props => props.cols ? `${props.cols / grid.columns * 100}%` : '100%'};
  ${clearFix()}
  ${responsiveStyling}
`

Column.propTypes = {}

// Creative proptyping?
bpKeysArray.map(bp => {
  Column.propTypes[bp] = PropTypes.shape({
    cols: PropTypes.number,
    offset: PropTypes.number
  })
})

export default Column
