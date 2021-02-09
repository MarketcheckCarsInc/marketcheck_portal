import { Accordion } from '~/general'
import styled from 'styled-components'

import Feature from './Feature.js'

// import {
//   Air,
//   Bluetooth,
//   Brake,
//   Cam,
//   Geo,
//   Keyless,
//   Wheels
// } from './Icons'

const AtAGlance = styled.p`
  opacity: 0.54;
  margin-bottom: 40px !important;
`

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default ({ features, scatterSimilar }) =>
  <Accordion title='Included Features'>
    <AtAGlance>{scatterSimilar.length} Similarly Equiped Carts Curently Available</AtAGlance>
    <Features>
      {features && features.map((feature) => {
        return <Feature /* icon={} */ name={feature} />
      })}
      {/* <Feature icon={Bluetooth} name='Bluetooth' />
      <Feature icon={Cam} name='Rear Cam' />
      <Feature icon={Wheels} name='Alloy wheels' />
      <Feature icon={Geo} name='Navigation' />
      <Feature icon={Air} name='Air Conditioner' />
      <Feature icon={Brake} name='Brake Assistance' />
      <Feature icon={Keyless} name='Keyless Start' /> */}
    </Features>
  </Accordion>
