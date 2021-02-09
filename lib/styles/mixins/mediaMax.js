import { breakpoints, bpKeysArray } from '%/styles'
import { css } from 'styled-components'

/**
 * Easy breakpoint mixin desktop first
 *
 * @returns {Object}
 */
const mediaMax = bpKeysArray.reduce(
  (accumulator, label) => {
    const size = breakpoints[label] + 'px'
    accumulator[label] = (...args) => css`
    @media (max-width: ${size}) {
      ${css(...args)}
    }
  `
    return accumulator
  }, {})

export default mediaMax
