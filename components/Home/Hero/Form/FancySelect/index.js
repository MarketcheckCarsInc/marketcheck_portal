import React, { Component } from 'react'
import { capitalize, number } from '%/format'
import SelectWrapper from './SelectWrapper'
import {Selected, DropdownContent, DropdownItem} from './Select'
import Caret from './Caret'


class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.items = this.props.items

    this.state = {
      open: false,
      label: this.props.defaultLabel,
      selected: 0,
      selectedValue: this.props.defaultValue
    }
  }

  handleOpenClick () {
    if (this.state.open) {
      this.setState({
        open: false
      }, function () {
      })
    } else {
      this.setState({
        open: true
      }, function () {
      })
    }
  }

  handleSelectClick (value, index) {
    this.setState({
      selected: index,
      label: value,
      selectedValue: value,
      open: false
    })

    this.props.handleSelect(value)
  }

  render () {
    return (
      <SelectWrapper blue={this.props.blue} showForMobile={this.props.showForMobile}>
        <Selected {...this.props} onClick={this.handleOpenClick.bind(this)}>
            {!this.props.loading ? capitalize(this.state.label) : 'Loading...'}
        </Selected>
        <DropdownContent visible={this.state.open}>
          {this.props.list !== undefined && Array.isArray(this.props.list) && !this.props.loading ? this.props.list.map((data, index) => {
             return <DropdownItem key={index} onClick={() => this.handleSelectClick.bind(this)(data.item, index)}>{capitalize(data.item)}{data.count ? ' ('+number(data.count)+')' : ''}</DropdownItem>
          }) :
             false
          }
        </DropdownContent>
        <Caret onClick={this.handleOpenClick.bind(this)} />
      </SelectWrapper>
    )
  }
}

export default Dropdown