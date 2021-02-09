import Price from '../SVG/price.svg'
import Miles from '../SVG/miles.svg'
import Cal from '../SVG/cal.svg'
import Alert from '../SVG/alert.svg'
import Lock from '../SVG/lock.svg'
import Star from '../SVG/star.svg'
import Check from '../SVG/check.svg'
import { Accordion } from '~/general'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
  }

  a {
    color: #115baa;
    font-weight: 700;
  }
`

export default ({ summaryReport }) =>
  <Accordion title='VIN Summary Report' blue >
    <Wrapper>

      <Price />
      {summaryReport[0].some_text &&
        <p>{summaryReport[0].some_text}</p>
      }
      <Miles />
      {summaryReport[1].some_text &&
      <p>{summaryReport[1].some_text}</p>
      }
      <Cal />
      {summaryReport[2].some_text &&
      <p>{summaryReport[2].some_text}</p>
      }
      <Alert />
      {summaryReport[3].some_text &&
      <p>{summaryReport[3].some_text}</p>
      }
      <Lock />
      {summaryReport[4].some_text &&
      <p>{summaryReport[4].some_text}</p>
      }
      <Star />
      {summaryReport[5].some_text &&
      <p>{summaryReport[5].some_text}</p>
      }
      <Check />
      <p>{summaryReport[6].some_text}</p>
    </Wrapper>
  </Accordion>
