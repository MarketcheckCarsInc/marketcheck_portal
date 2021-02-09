import styled from 'styled-components'

import SvgAirConditionerIcon from './air-conditioner.svg'
import SvgBluetoothIcon from './bluetooth.svg'
import SvgNavigationIcon from './navigation.svg'
import SvgRearCamIcon from './rear-cam.svg'
import SvgWheelsIcon from './wheels.svg'

const Bluetooth = styled(SvgBluetoothIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const AirConditioner = styled(SvgAirConditionerIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const Navigation = styled(SvgNavigationIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const RearCam = styled(SvgRearCamIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

const Wheels = styled(SvgWheelsIcon)`
  display: inline-block;
  height: 20px;
  margin-right: 0.5em;
  width: 20px;
  vertical-align: middle;
`

export {
  AirConditioner,
  Bluetooth,
  Navigation,
  RearCam,
  Wheels
}
