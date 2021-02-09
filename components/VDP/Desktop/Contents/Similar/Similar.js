import Section from '~/VDP/Section'
import { number } from '%/format'
import Car from './Car'

// const cars = data.listings

const String = (amount) => {
  return number(amount) + ' Vehicles Within ' + number(100) + ' Miles'
}

export default (props) =>
  <Section id='similarContainer' title='Similar Local Cars' summary={String(props.numFound - 1)} center className={props.className}>
    {props.cars && props.cars.length > 0 &&
    props.cars.map((car, key) => {
            if (props.vin !== car.vin) {
                return <Car
                    key={car.id}
                    dealer={car.dealer}
                    distance={24}
                    website={`//${car.source}`}
                    name={car.heading}
                    price={car.price}
                    pictures={car.media.photo_links}
                    props={car}
                    transmission={car.build.transmission}
                    miles={car.miles}
                    cityMiles={car.build.city_miles}
                    highwayMiles={car.build.highway_miles}
                    vdpUrl={car.vdp_url}
                    stats={props.stats}
                    rating={props.similarCarsDealerRatings[key]}
                    reviews={props.similarCarsDealerReviews[key]}
                />
            }
        }
    )
  }
  </Section>
