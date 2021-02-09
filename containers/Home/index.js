import Home from '~/Home'

const carLinks = [
  { name: 'SUV', route: 'javascript:;' },
  { name: 'Sedan', route: 'javascript:;' },
  { name: 'Pickup', route: 'javascript:;' },
  { name: 'Coupe', route: 'javascript:;' },
  { name: 'Hatchback', route: 'javascript:;' },
  { name: 'Convertible', route: 'javascript:;' },
  { name: 'Wagon', route: 'javascript:;' },
  { name: 'Crossover', route: 'javascript:;' }
]

export default () =>
  <Home
    heroImage='/static/img/home/hero.jpg'
    heroImageRetina='/static/img/home/hero@2x.jpg'
    heroCarLinks={carLinks}
  />
