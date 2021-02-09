import React, { Component } from 'react'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { em } from 'polished'
import { colors } from '%/styles'
import SvgArrow from './arrow-down.svg'

const SortBy = styled.div`
  display: inline-block;
  position: relative;
`

const Label = styled.span`
  color: ${colors.gray};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  margin-right: 1em;
  vertical-align: middle;
  ${mediaMax.desktop`
   font-size: ${em(11)};
  `}
`

const Selected = styled.span`
  color: ${colors.black};
  cursor: pointer;
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;
  ${mediaMax.desktop`
   font-size: ${em(11)};
  `}
`

const DropdownContent = styled.div`
  ${props => props.visible ? 'display: block;' : 'display: none;'}
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 9999999999;
  ${mediaMax.desktop`
   min-width: 130px;
  `}
`

const DropdownItem = styled.a`
  color: black;
  cursor: pointer;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  min-width: 180px;
  ${mediaMax.desktop`
   font-size: ${em(12)};
  `}

  &:hover {
    background-color: ${colors.gray};
  }
`

const Btn = styled.button`
  cursor: pointer;
  padding: 0 1em;
`

const ArrowStyled = styled(SvgArrow)`
  display: inline-block;
  vertical-align: middle;
  width: 10px;
`

class Dropdown extends Component {
  constructor (props) {
    super(props)
      var pairs = location.search.slice(1).split('&');

    var sortby_selected = ""
      var result = {};
      pairs.forEach(function(pair) {
          pair = pair.split('=');
          if(pair[0] == "make"){pair[0] = "selectedMake"}
          if(pair[0] == "model"){pair[0] = "selectedModel"}

          result[pair[0]] = decodeURIComponent(pair[1] || '');
      });
      result = JSON.parse(JSON.stringify(result))

      var selected_index = 0
      sortby_selected = result.sort_by + "|" + result.sort_order
      if((result.sort_by && result.sort_by !== "") || (result.sort_order && result.sort_order !== "")){

          props.items.forEach(function(pair) {
              if(pair['value'] === sortby_selected ){
                  selected_index = props.items.indexOf(pair)
              }
          })
      }else{

      }

    this.label = this.props.label
    this.items = this.props.items

      this.state = {
          open: false,
          selected: selected_index
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
      open: false
    })

    this.props.updateSuperState(value)
  }

  render () {
    return (
      <SortBy>

        <Label>{this.label}</Label>
        <Selected onClick={this.handleOpenClick.bind(this)}>{this.items[this.state.selected].label}</Selected>
        <Btn onClick={this.handleOpenClick.bind(this)}>
          <ArrowStyled />
        </Btn>

        <DropdownContent visible={this.state.open}>
          {this.items.map(function (item, index) {
            return <DropdownItem key={index} value={item.value} onClick={() => this.handleSelectClick.bind(this)(item.value, index)}>{item.label}</DropdownItem>
          }.bind(this))}
        </DropdownContent>
      </SortBy>
    )
  }
}

export default Dropdown
