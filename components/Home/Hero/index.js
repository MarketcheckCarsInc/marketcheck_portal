import { Container, Column, Row } from '~/layout'
import Wrapper from './Wrapper'
import { H2 } from '~/general'
import Phone from './Phone'
import PropTypes from 'prop-types'
import CarLinks from './CarLinks'
import Form from './Form'
import HomeFormContainer from '@/Home/form/HomeFormContainer'
import AlignedContainer from './AlignedContainer'

const Hero = ({
  image,
  imageRetina,
  carLinks,
  onSubmit
}) =>
  <Wrapper id='home' image={imageRetina} imageRetina={imageRetina}>
    <AlignedContainer>
      <Container>
        <Row>
          <Column laptop={{ cols: 8, offset: 2 }} phablet={{ cols: 10, offset: 1 }} >
            <H2>Search over 7 million Used and New Cars</H2>
            <HomeFormContainer onSubmit={onSubmit} />
            <CarLinks links={carLinks} />
            <Phone />
          </Column>
        </Row>
      </Container>
    </AlignedContainer>
  </Wrapper>

Hero.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string,
  carLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired,
  onSubmit: PropTypes.func
}

export default Hero
