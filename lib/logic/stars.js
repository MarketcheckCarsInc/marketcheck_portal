/**
 * Create an array of stars to be used in ratings
 *
 * @param {Number} stars how many stars we have
 * @param {Number} total default 5
 * @returns {Array} StarsArr
 */
const Stars = (stars, total = 5) => {
  const Full = Math.round(stars) // 4
  const Empty = total - Full // 1

  const FullArr = [...Array(Full)].map(e => {
    return {
      full: true
    }
  })

  const EmptyArr = [...Array(Empty)].map(e => {
    return {
      full: false
    }
  })

  const StarsArr = [...FullArr, ...EmptyArr]

  return StarsArr
}

export default Stars
