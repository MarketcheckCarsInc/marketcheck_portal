import { mediaMin } from '%/styles/mixins'
import { grid, bpKeysArray } from '%/styles'

/**
 * Take number and cssKey receive percentage
 * @param {Number} num
 * @param {string} cssKey
 *
 * @returns {string}
 */
const percentageCreator = (num, cssKey) => {
  return num
    ? `${cssKey}: ${(num / grid.columns) * 100}%;`
    : undefined
}

const orderCreator = num => {
  return num
    ? `order: num;`
    : undefined
}

/**
 * Takes props from the breakpoints Object and turns them
 * into columns and offsets of that breakpoint
 *
 * @param {Object} props
 * @returns {string}
 */
const responsiveStyling = props => {
  const usableBreaks = bpKeysArray.filter(bp => props[bp]) // ['laptop']
  return usableBreaks.map(bp => mediaMin[bp]`
    ${percentageCreator(props[bp]['cols'], 'max-width')}
    ${percentageCreator(props[bp]['cols'], 'flex-basis')}
    ${percentageCreator(props[bp]['offset'], 'margin-left')}
    ${orderCreator(props[bp]['order'])}
  `)
}

export default responsiveStyling
