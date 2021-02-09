import styled from 'styled-components'
// Helpers for styling
import { rem } from 'polished'
import { grid } from '%/styles'
// Helper for the magic
import responsiveStyling from './responsiveStyling'

// Styling helpers
const padding = rem(grid.gutter / 2)

const offset = props => props.offset && `
  margin-left: ${props.offset / grid.columns * 100}%;
`

const FlexColumn = styled.div`
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  max-width: ${props => props.cols ? `${props.cols / grid.columns * 100}%` : '100%'};
  flex-basis: ${props => props.cols ? `${props.cols / grid.columns * 100}%` : '100%'};
  ${responsiveStyling}
  ${offset}
`

export default FlexColumn
