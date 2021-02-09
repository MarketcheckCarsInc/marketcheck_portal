import styled from 'styled-components'
import Brand from './Brand'
import { em } from 'polished'
import { percentage } from '%/styles/mixins'
import ImageLinkAnchor from '@/Home/makes/ImageLinkAnchor'

const Brands = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${em(40)};
  max-width: ${percentage(10.5, 12)};
  margin-left: auto;
  margin-right: auto;
`

const AllTheCars = [
  { img: '/static/img/home/ford.png', link: '#', name: "Ford" },
  { img: '/static/img/home/chevrolet.png', link: '#', name: "Chevrolet" },
  { img: '/static/img/home/nissan.png', link: '#', name: "Nissan" },
  { img: '/static/img/home/honda.png', link: '#', name: "Honda" },
  { img: '/static/img/home/dodge.png', link: '#', name: "Dodge" },
  { img: '/static/img/home/mazda.png', link: '#', name: "Mazda" },
  { img: '/static/img/home/bmw.png', link: '#', name: "BMW" },
  { img: '/static/img/home/lexus.png', link: '#', name: "Lexus" },
  { img: '/static/img/home/acura.png', link: '#', name: "Acura" },
  { img: '/static/img/home/toyota.png', link: '#', name: "Toyota" }
]
export default () =>
  <Brands>
    {AllTheCars.map((car, index) =>
        <ImageLinkAnchor carData={car}/>
    )}
  </Brands>
