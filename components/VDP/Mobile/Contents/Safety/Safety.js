import { Accordion } from '~/general'
import styled from 'styled-components'
import Rating from './Rating'
import Seller from './Seller'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 45px !important;
`

export default ({ safetyRatings, dealerReviews, dealerRatings, dealerWebsite }) =>
  <Accordion title='Safety Ratings'>
    <Summary>Define Where Data is Coming From</Summary>
    <Rating stars={safetyRatings.overall_rating} name='Overall' />
    <Rating stars={safetyRatings.roll_over_rating} name='Roll Over' />
    <Rating stars={safetyRatings.driver_side_rating} name='Driver Side' />
    <Rating stars={safetyRatings.driver_front_rating} name='Driver Front' />
    <Rating stars={safetyRatings.passenger_front_rating} name='Passenger Front' />

    {Object.keys(dealerRatings).length > 1 &&

      <Seller
        name={dealerReviews.name}
        location={`${dealerReviews.city}, ${dealerReviews.state}`}
        distance={24}
        rating={dealerRatings.overall_rating}
        reviews={dealerReviews.overall_reviews}
        website={dealerWebsite}
      />
    }
  </Accordion>
