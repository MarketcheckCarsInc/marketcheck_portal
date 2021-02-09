import React from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'
import { AirConditioner, Navigation, Bluetooth, RearCam, Wheels } from './Icons'
import Switcher from './Switcher.js'

const list = [
  {
    icon: <Bluetooth />,
    label: 'Bluetooth'
  },
  {
    icon: <RearCam />,
    label: 'Rear Cam'
  },
  {
    icon: <Wheels />,
    label: 'Alloy Wheels'
  },
  {
    icon: <Navigation />,
    label: 'Navigation'
  },
  {
    icon: <AirConditioner />,
    label: 'Air Conditioner'
  }
]

const StyledFlexCol = styled(FlexCol)`
  padding: 1em 0;
  max-width: 25%;
`

const Label = styled.span`
  display: inline-block;
  font-weight: 300;
  vertical-align: middle;
`

const MoreBtn = styled.a.attrs({
  href: '#'
})`
  color: ${colors.softblue};
  font-size: 0.8em;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`

class SwitchBtns extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isChecked: null
    }
  }

  componentWillMount () {
    this.setState({ isChecked: this.props.isChecked })
  }

  render () {
    return (
      <Collapsible {...this.props}>
        {list.map(function (item, index) {
          return (
            <FlexRow key={index}>
              <FlexCol>
                {item.icon}
                <Label>
                  {item.label}
                </Label>
              </FlexCol>
              <StyledFlexCol>
                <Switcher />
              </StyledFlexCol>
            </FlexRow>
          )
        })}
        <MoreBtn>More</MoreBtn>
      </Collapsible>
    )
  }
}

export default SwitchBtns
