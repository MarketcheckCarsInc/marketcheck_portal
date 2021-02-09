import Section from '~/VDP/Section'
import Rating from './Rating'
import Seller from './Seller'
import { FlexRow, FlexCol } from '~/layout'

export default ({ safetyRatings, dealerReviews, dealerRatings, dealerWebsite }) =>
  <Section id='safetyContainer' title='Safety Ratings' summary='Define Where Data is Coming From'>
    <FlexRow justify='center'>
      <FlexCol cols={8}>
        <FlexRow justify='center' noMargin >
          <Rating stars={safetyRatings.overall_rating} name='Overall' />
        </FlexRow>
        <FlexRow justify='center' noMargin >
          <Rating stars={safetyRatings.roll_over_rating} name='Roll Over' />
          <Rating stars={safetyRatings.driver_side_rating} name='Driver Side' />
          <Rating stars={safetyRatings.driver_front_rating} name='Driver Front' />
          <Rating stars={safetyRatings.passenger_front_rating} name='Passenger Front' />
        </FlexRow>
      </FlexCol>
    </FlexRow>

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
  </Section>
