import Section from '~/VDP/Section'
import Price from '../SVG/price.svg'
import Miles from '../SVG/miles.svg'
import Cal from '../SVG/cal.svg'
import Alert from '../SVG/alert.svg'
import Lock from '../SVG/lock.svg'
import Star from '../SVG/star.svg'
import Check from '../SVG/check.svg'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  a {
    color: #115baa;
    font-weight: 700;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export default ({summaryReport}) =>
  <Section id='summaryContainer' title='VIN Summary Report'>
    <Wrapper>
      {summaryReport[0].some_text &&
      <Row>
        <Price />
        <p>{summaryReport[0].some_text}</p>
      </Row>
    }
      {summaryReport[1].some_text &&
      <Row>
        <Miles />
        <p>{summaryReport[1].some_text}</p>
      </Row>
    }
      {summaryReport[2].some_text &&
      <Row>
        <Cal />
        <p>{summaryReport[2].some_text}</p>
      </Row>
    }
      {summaryReport[3].some_text &&
      <Row>
        <Alert />
        <p>{summaryReport[3].some_text}</p>
      </Row>
    }
      {summaryReport[4].some_text &&
      <Row>
        <Lock />
        <p>{summaryReport[4].some_text}</p>
      </Row>
    }
      {summaryReport[5].some_text &&
      <Row>
        <Star />
        <p>{summaryReport[5].some_text}</p>
      </Row>
    }
      {summaryReport[6].some_text &&
      <Row>
        <Check />
        <p>{summaryReport[6].some_text}</p>
      </Row>
    }
    </Wrapper>
  </Section>
