import ImageLinkAnchor from '@/Home/categories/ImageLinkAnchor'
import { FlexCol, FlexRow } from '~/layout'

const CarsArray = [
  { id: 1, name: 'SUV', pic: '/static/img/home/suv.png', link: '#' },
  { id: 2, name: 'Sedan', pic: '/static/img/home/sedan.png', link: '#' },
  { id: 3, name: 'Pickup', pic: '/static/img/home/pickup.png', link: '#' },
  { id: 4, name: 'Coupe', pic: '/static/img/home/coupe.png', link: '#' },
  { id: 5, name: 'Hatchback', pic: '/static/img/home/hatchback.png', link: '#' },
  { id: 6, name: 'Convertible', pic: '/static/img/home/convertible.png', link: '#' },
  { id: 7, name: 'Wagon', pic: '/static/img/home/wagon.png', link: '#' },
  { id: 8, name: 'Crossover', pic: '/static/img/home/crossover.png', link: '#' }
]

const renderCars = cars =>
  cars.map(c =>
    <FlexCol key={c.id} laptop={{ cols: 3 }} phablet={{ cols: 6 }}>
        <ImageLinkAnchor link={c}/>
    </FlexCol>
  )

export default () =>
  <FlexRow wrap>
    { renderCars(CarsArray) }
  </FlexRow>
