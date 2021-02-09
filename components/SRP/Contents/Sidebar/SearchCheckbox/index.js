import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'

import SvgIcon from './search-icon.svg'

import Collapsible from '../Collapsible'

const StyledFlexRow = styled(FlexRow)`
  padding-bottom: 0.5em;
`

const StyledFlexCol = styled(FlexCol)`
  max-width: 10%;
`

const SearchBox = styled.div`
  border-bottom: 1px solid ${colors.bordergray};
  margin-bottom: 1em;
`

const SearchIcon = styled(SvgIcon)`
  height: 15px;
  margin-right: 0.5em;
  vertical-align: middle;
  width: 15px;
`

const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search'
})`
  width: 100%;

  &::placeholder {
    color: ${colors.bordergray};
    font-weight: 300;
  }
`

const CheckBox = styled.div`
  border: 2px solid ${colors.bordergray};
  cursor: pointer;
  height: 15px;
  width: 15px;

  &.checked {
    background-color: ${colors.darkengray};
  }
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

class SearchCheckbox extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label

    this.state = {
      modelList: this.props.list,
      listLimit: 5,
      reset: false
    }
  }

  handleResetClick (value) {
    this.setState({
      listLimit: 5,
      reset: value
    }).bind(this)
  }

  handleCheckClick (index, value) {

    const newList = this.state.modelList
    
    newList[index].checked = newList[index].checked ? false : true

    const stateModelList = []

    newList.map(function (model, index){
      if (model.checked) {
        stateModelList.push(model.item)
      }
    })

    this.setState({
      modelList: newList
    })

    this.props.updateSuperState(stateModelList)
  }

  handleOnChange (e) {
    e.preventDefault()

    const newList = this.filterList(this.state.modelList, e.target.value)

    if (e.target.value !== "" || newList.length){
      this.setState({
        modelList: newList
      }, () => {
      })
    } else {
      this.setState({
        modelList: this.props.list
      }, () => {
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

  filterList (array, argument) {
    argument = argument.toLowerCase()

    return array.filter(function(obj) {
      return Object.keys(obj).some(function(k) {
        if (k !== 'count') {
          return obj[k].toLowerCase().indexOf(argument) !== -1;
        }
     })
    })
  }

  componentWillReceiveProps (props) {
    this.setState({
      modelList: props.list,
    })

    if (this.props.resetState) {
      const newList = this.state.modelList

      newList.map(function (model, index){
        model.checked = false
      })

      this.setState({
        modelList: newList
      })
    }
  }

  render () {
    return (
      <Collapsible {...this.props} parentReset={this.handleResetClick.bind(this)}>
        <SearchBox>
          <StyledFlexRow>
            <StyledFlexCol>
              <SearchIcon />
            </StyledFlexCol>
            <FlexCol>
              <SearchInput onChange={this.handleOnChange.bind(this)} />
            </FlexCol>
          </StyledFlexRow>
        </SearchBox>
        {
        this.state.modelList.length ?
          this.state.modelList.map(function (model, index) {
            if (index < this.state.listLimit) {
              return (
                <StyledFlexRow key={index}>
                  <StyledFlexCol>
                    <CheckBox className={model.checked ? 'checked' : ''} onClick={() => this.handleCheckClick.bind(this)(index, model.item)} />
                  </StyledFlexCol>
                  <FlexCol>
                    <Label onClick={() => this.handleCheckClick.bind(this)(index, model.item)}>{model.item}</Label>
                  </FlexCol>
                </StyledFlexRow>
              )
            } else {
              return false
            }
          }.bind(this)) :
        false
        }
        {this.state.modelList.length > this.state.listLimit ?
            <MoreBtn onClick={this.updateListLimit.bind(this)}>More</MoreBtn> :
            false
        }
      </Collapsible>
    )
  }
}

export default SearchCheckbox
