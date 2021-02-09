import { Accordion } from '~/general'
import styled from 'styled-components'
import { rgba } from 'polished'
import { number } from '%/format'

const Wrapper = styled.div`
  position: relative;
  color: ${rgba('#000', 0.56)};

  strong {
    color: #000;
    text-transform: capitalize;
  }
`

const Intro = styled.h6`
  font-size: 14px;
  line-height: 2;
  margin-bottom: 25px;
  font-weight: 400;
`

export default ({
  type,
  model,
  trim,
  body,
  exteriorColor,
  interiorColor,
  doors,
  brief,
  stockNumber,
  vin,
  miles,
  engine,
  transmission,
  fuel,
  drivetrain,
  cityMiles,
  highwayMiles
}) =>
  <Accordion title='Vehicle Information' blue >
    <Wrapper>
      {/*<Intro>Where to find this data? Raw performance, agility, unparalleled ride and handling...</Intro>*/}

        <p>Type <strong>{type ? type : 'NA'}</strong></p>
        <p>Model <strong>{model ? model : 'NA'}</strong></p>
        <p>Trim <strong>{trim ? trim : 'NA'}</strong></p>
        <p>Body <strong>{body ? body : 'NA'}</strong></p>
        <p>Exterior <strong>{exteriorColor ? exteriorColor : 'NA'}</strong></p>
        <p>Interior <strong>{interiorColor ? interiorColor : 'NA'}</strong></p>
        <p>Doors <strong>{doors ? doors : 'NA'}</strong></p>
        <p>Stock# <strong>{stockNumber ? stockNumber : 'NA'}</strong></p>
        <p>Model # <strong>NA</strong></p>
        <p>VIN # <strong>{vin ? vin : 'NA'}</strong></p>
        <p>Mileage <strong>{miles ? number(miles) : 'NA'}</strong></p>
        <p>Engine <strong>{engine ? engine : 'NA'}</strong></p>
        <p>Transmission <strong>{transmission ? transmission : 'NA'}</strong></p>
        <p>Fuel <strong>{fuel ? fuel : 'NA'}</strong></p>
        <p>Drive <strong>{drivetrain ? drivetrain : 'NA'}</strong></p>
        <p>MPG <strong>{cityMiles && highwayMiles ? (parseInt(cityMiles) + 'City / ' + parseInt(highwayMiles)) + 'Hwy' : 'NA'}</strong></p>
    </Wrapper>
  </Accordion>
