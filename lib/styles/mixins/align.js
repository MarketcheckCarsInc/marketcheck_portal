/**
 * Center an element on either or both axis
 * @param {string} direction
 * @returns {string}
 */
export default direction => {
  const horizontal = direction === 'horizontal'
  const vertical = direction === 'vertical'

  return `
    position: absolute;
    transform-style: preserve-3d;
    ${horizontal ? `
    left: 50%;
    transform: translateX(-50%);
    ` : vertical ? `
    top: 50%;
    transform: translateY(-50%);
    ` : `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`
    }`
}
