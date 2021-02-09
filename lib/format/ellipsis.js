/**
 * Takes a string a returns a shortened version of it
 * @param {String} String REQUIRED
 * @param {Object} options
 * @param {String} options.type words or chars
 * @param {Number} options.number
 * @param {String} options.ellipsis
 *
 * @returns {String}
 */
const options = {
  type: 'words',
  number: 5,
  ellipsis: ''
}

const ellipsis = (string, opts) => {
  const op = {...options, ...opts}

  const { type, ellipsis, number } = op
  const separator = type === 'words' ? ' ' : ''
  const exploded = string.split(separator)
  const filteredString = exploded.filter((element, index) => index < number).join(separator)
  return filteredString + ellipsis
}

export default ellipsis
