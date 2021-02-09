import React from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { rem, em } from 'polished'
import PinSvg from './pin.svg'

import FancySelect from './FancySelect'
import GoogleAutoComplete from './FancySearch'
import Submit from './Submit'

const Form = styled.form`
  position: relative;
  background: ${colors.white};
  border-radius: ${rem(4)};
  margin-bottom: ${rem(30)};
  display: flex;
  /*overflow: hidden;*/
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  ${mediaMax.tablet`
    max-width: 100%;
  `}
`

const Location = styled.a.attrs({ href: '#' })`
  color: ${colors.softblue};
  font-size: ${em(13)};
  display: inline-block;
  text-align: right;
  vertical-align: bottom;
  ${mediaMax.largeTablet`
    font-size: ${em(12)};
  `}
  ${mediaMax.phone`
    display: none;
  `}
`

const Pin = styled(PinSvg)`
  display: inline-block;
  height: 15px;
  width: 15px;
`

export default ({
  props,
  getState,
  onSubmit,
  models,
  makes,
  carTypeSelect,
  makeSelect,
  modelSelect,
  loadingModels,
  loadingMakers,
  handleChange,
  handleSelect,
  address,
  findLatLng,
  latitude,
  longitude
}) =>
  <Form onSubmit={onSubmit}>
    <FancySelect blue handleSelect={carTypeSelect} showForMobile={true} defaultLabel='Used' defaultValue='used' loading={false} list={[{item: 'new'}, {item: 'used'}, {item: 'certified'}]} />
    <GoogleAutoComplete findLatLng={findLatLng} address={address}/>
    <FancySelect handleSelect={makeSelect} showForMobile={false} defaultLabel='All Makes' defaultValue='' loading={loadingMakers} list={makes} />
    <FancySelect handleSelect={modelSelect} showForMobile={false} defaultLabel='All Models' defaultValue='' loading={loadingModels} list={models} />
    <Submit onClick={onSubmit} />
  </Form>
