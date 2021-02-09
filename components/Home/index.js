import { LayoutPrimary } from '~/layout'

import PropTypes from 'prop-types'

import Hero from './Hero'
import Features from './Features'
import Deals from './Deals'
import Categories from './Categories'
import Trust from './Trust'
import Testimonials from './Testimonials'
import Makers from './Makers'
import Listings from './Listings'
import Slider from './Slider'
import QuickOverview from './QuickOverview'

const Home = ({
  heroImage,
  heroImageRetina,
  heroCarLinks
}) =>
  <LayoutPrimary>
    <Hero
      image={heroImage}
      imageRetina={heroImageRetina}
      carLinks={heroCarLinks}
    />
    <Features />
    <Deals />
    <Categories />
    <Trust />
    {/*<Testimonials />*/}
    <Makers />
    {/*<Listings />*/}
    {/*<Slider />*/}
    {/*<QuickOverview />*/}
  </LayoutPrimary>

Home.propTypes = {
  heroImage: PropTypes.string,
  heroImageRetina: PropTypes.string,
  heroCarLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired
}

export default Home
