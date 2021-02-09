const capitalize = (string) => {
  return string && !Array.isArray(string) ? (string[0].toUpperCase() + string.slice(1)) : false
}

const uppercase = (string) => {
  return string ? string.toUpperCase() : false
}

const cutString = (string, count) => {
  return string && (string.slice(0, count) + (string.length > count ? '...' : ''))
}

export {capitalize, cutString, uppercase}
