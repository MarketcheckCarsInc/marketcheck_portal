import { breakpoints, bpKeysArray } from '%/styles'
import { css } from 'styled-components'

/**
 * Easy breakpoint mixin mobile first
 *
 * @returns {Object}
 */
const mediaMin = bpKeysArray.reduce(
  (accumulator, label) => {
    const size = breakpoints[label] + 'px'
    accumulator[label] = (...args) => css`
      @media (min-width: ${size}) {
        ${css(...args)}
      }
    `
    return accumulator
  }, {})

export default mediaMin
