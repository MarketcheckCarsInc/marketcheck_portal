const number = num => {
  const formatter = new Intl.NumberFormat()

  return formatter.format(num)
}

export default number
