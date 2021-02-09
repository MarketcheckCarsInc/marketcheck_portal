const daysArray = days => [
  { name: 'Rest of year', value: 365 - days },
  { name: 'Listed for sale', value: days }
]

export default daysArray
