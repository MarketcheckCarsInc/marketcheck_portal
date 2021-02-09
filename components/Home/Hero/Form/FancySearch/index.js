import styled from 'styled-components'
import Geolocation from './GeoLocation'
import { mediaMin } from '%/styles/mixins'
import GoogleAutoComplete from '@/Home/form/fancySearch/input/GoogleAutoComplete'

const FancySearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 5%;
  ${mediaMin.phablet`
  padding: 0 20px;
  `}
`

export default (props) =>
  <FancySearch>
    <Geolocation />
    <GoogleAutoComplete {...props} defaultValue={props.address}/>
  </FancySearch>
