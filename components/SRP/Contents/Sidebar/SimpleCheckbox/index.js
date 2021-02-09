import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'

const StyledFlexRow = styled(FlexRow)`
  padding-bottom: 0.5em;
  &.checked {
     .checkboxDiv{
        background-color: ${colors.darkengray};
    }
  }
  
`

const StyledFlexCol = styled(FlexCol)`
  max-width: 10%;
`

const CheckBox = styled.div`
  border: 2px solid ${colors.bordergray};
  cursor: pointer;
  height: 15px;
  width: 15px;
`

const Label = styled.label`
  cursor: pointer;
  font-weight: 300;
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

class SimpleCheckbox extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label

    this.state = {
      checked: false,
      listLimit: 5,
      list: this.props.list,
      reset: false
    }
  }

  handleResetClick (value) {
    this.setState({
      listLimit: 5,
      reset: value
    })

    const newList = this.props.list

    newList.map(function (model, index){
      model.checked = false
    })

    this.setState({
      list: newList
    }, () => {
      this.props.updateSuperState(null)
    })
  }

  handleCheckClick (index, value, checked) {
      const newList = this.props.list

      newList[index].checked = newList[index].checked ? false : true
      let stateModelList = []

      newList.map(function (model, index) {
          if (model.checked) {
              stateModelList.push(model.label)
          }
      })
    if((checked === false || checked === undefined) && checked !== null) {
            this.setState({
            checked: index,
            list: newList
        }, () => {
            this.props.updateSuperState(stateModelList)
        })
    }else {
        this.setState({
            checked: false,
            list: newList
        }, () => {
            this.props.updateSuperState(stateModelList)
        })
    }
  }

  updateListLimit (e) {
    e.preventDefault()

    const limit = this.state.listLimit + 5

    this.setState({
      listLimit: limit
    })
  }

  componentWillReceiveProps (nextProps) {
    const checked = this.state.checked

    let prevList = this.state.list
    let newList = nextProps.list

    if (checked !== false && checked !== undefined && checked !== null) {
      if (prevList[checked] !== undefined) {
        prevList[checked].checked = prevList[checked].checked ? false : true
        newList.map(function (item, index) {
          if (item.label === prevList[checked].label) {
            item.checked = true
          }
        })
      }
    }

    if (nextProps.active) {
      newList.map(function (item, index) {
        item.checked = false
      })
    } else {
        if (checked !== false && checked !== undefined && checked !== null) {
            if (prevList[checked] !== undefined) {
                prevList[checked].checked = prevList[checked].checked ? false : true

                newList.map(function (item, index) {
                    if (item.label === prevList[checked].label) {
                        item.checked = true
                    }
                })
            }
        }
    }

    this.setState({
      list: newList
    }, () => {
    })

    if (nextProps.resetState) {
      const newList = nextProps.list

      newList.map(function (model, index) {
        model.checked = false
      })

      this.setState({
        list: newList
      })
    }
  }

  render () {
    return (

      <Collapsible {...this.props} parentReset={this.handleResetClick.bind(this)}>
        {this.state.list.length ?
          this.state.list.map(function (item, index) {
            if (index < this.state.listLimit) {
              return (
                <StyledFlexRow className={item.checked ? 'checked' : ''} key={index}>
                  <StyledFlexCol>
                    <CheckBox className={"checkboxDiv"} onClick={() => this.handleCheckClick.bind(this)(index, item, item.checked)} />
                  </StyledFlexCol>
                  <FlexCol>
                    <Label onClick={() => this.handleCheckClick.bind(this)(index, item, item.checked)}>{item.label} {item.count ? '('+item.count+')' : ''}</Label>
                  </FlexCol>
                </StyledFlexRow>
              )
            } else {
              return null
            }
          }.bind(this)) :
        false
        }
        { this.props.resetBtn && this.state.list.length > this.state.listLimit ? <MoreBtn onClick={this.updateListLimit.bind(this)}>More</MoreBtn> : ''}
      </Collapsible>
    )
  }
}

export default SimpleCheckbox
