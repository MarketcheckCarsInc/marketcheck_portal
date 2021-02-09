import { Accordion } from '~/general'
import styled from 'styled-components'
import { number } from '%/format'
import data from './data.json'
import Car from './Car'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 30px !important;
`

// const cars = data.listings

export default (props) =>
  <Accordion title='Similar Local Cars' className={props.className}>
    <Summary>{number(props.numFound)} Similar cars in Your Local Area</Summary>
    {props.cars && props.cars.length > 1 &&
      props.cars.map((car, key) => {
        return <Car
          key={car.id}
          dealer={car.dealer}
          distance={24}
          website={`//${car.source}`}
          name={car.heading}
          price={car.price}
          picture={car.media.photo_links[0]}
          transmission={car.build.transmission}
          miles={car.miles}
          cityMiles={car.build.city_miles}
          highwayMiles={car.build.highway_miles}
          vdpUrl={car.vdp_url}
          rating={props.similarCarsDealerRatings[key]}
          reviews={props.similarCarsDealerReviews[key]}
        />
      }
      )
  }
  </Accordion>
