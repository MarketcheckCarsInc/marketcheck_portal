const popular = {
  brand: 'New Buick Encore',
  listings: 25208,
  startingPrice: 16236,
  link: '#'
}

const populars = [
  { ...popular },
  { ...popular },
  { ...popular }
]

const seedData = [
  {
    type: 'Popular Makers',
    populars: [...populars]
  },
  {
    type: 'Popular New Cars',
    populars: [...populars]
  },
  {
    type: 'Popular Sedans',
    populars: [...populars]
  },
  {
    type: 'Popular SUVs',
    populars: [...populars]
  },
  {
    type: 'Popular Pickup Trucks',
    populars: [...populars]
  },
  {
    type: 'Popular Minivans',
    populars: [...populars]
  },
  {
    type: 'Popular Convertibles',
    populars: [...populars]
  },
  {
    type: 'Popular Coupes',
    populars: [...populars]
  }
]

export default seedData
