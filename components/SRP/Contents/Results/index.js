import React, { Component } from 'react'
import styled from 'styled-components'
import Spinner from 'react-loading-animation'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { capitalize, cutString } from '%/format'
import { FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import SearchArgument from './SearchArgument'
import Filters from './Filters'
import AutoCard from './AutoCard'
import Paginator from './Paginator'
import Recommended from './Recommended'
import ListsBy from './ListsBy'
import TotalFound from './TotalFound'

import Result from './data.js'

const StyledFlexCol = styled(FlexCol)`
  ${mediaMax.desktop`
    left: auto;
    max-width: 75%;
  `}
  ${mediaMax.largeTablet`
    left: auto;
    max-width: 70%;
  `}
  ${mediaMax.phone`
    background-color: ${colors.bordergray};
    max-width: 100%;
    padding: 0;
  `}
`

const NoResults = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
  ${mediaMax.phone`
    display: none;
  `}
`

const Button = styled.a`
  cursor: pointer;
  font-size: 13px;
  line-height: 15.6px;
  color: #fff;
  background: ${colors.green};
  text-align: center;
  padding: 10px 12px;
  display: inline-block;
  border-radius: 4px;
`

class Results extends Component {
  constructor (props) {
    super(props)

    this.result = Result()
    this.saveSearch = props.saveSearch
    this.state = {
      ready: false
    }
  }

  searchArgument (state) {
    const argument =
      capitalize(this.props.sessionSearch.filters.car_type) + " " +
      (this.props.sessionSearch.filters.year ? this.props.sessionSearch.filters.year + " " : "" ) +
      (this.props.sessionSearch.filters.make ? this.props.sessionSearch.filters.make + " " : "Cars " ) +
      (this.props.sessionSearch.filters.model ? this.props.sessionSearch.filters.model + " " : "" ) +
      " Cars in " +
      this.props.sessionSearch.location.address + " "
      document.title = argument;
    return argument
  }

  filterTags (state) {
    const listFilters = [
      {
        label: 'Type:',
        filter: capitalize(state.filters.car_type),
        remove: this.props.removeType
      },
      {
        label: 'Make:',
        filter: Array.isArray(state.filters.make) ? state.filters.make.join(',') : state.filters.make,
        remove: this.props.removeMake
      },
      {
        label: 'Model:',
        filter: Array.isArray(state.filters.model) ? state.filters.model.join(',') : state.filters.model,
        remove: this.props.removeModel
      },
      {
        label: 'Year:',
        filter: state.filters.year ? state.filters.year : '',
        remove: this.props.removeYear
      },
      {
        label: 'Deal:',
        filter: state.filters.deal ? state.filters.deal : '',
        remove: this.props.removeDeal
      },

      {
        label: 'Seller:',
        filter: state.filters.seller_type ? state.filters.seller_type : '',
        remove: this.props.removeSellerType
      },
      {
        label: 'Color:',
        filter: state.filters.exterior_color ? state.filters.exterior_color : '',
        remove: this.props.removeExteriorColor
      },
      {
        label: 'Transmission:',
        filter: Array.isArray(state.filters.transmission) ? state.filters.transmission.join(',') : state.filters.transmission,
        remove: this.props.removeTransmission
      },
      {
        label: 'Body:',
        filter: Array.isArray(state.filters.body_type) ? state.filters.body_type.join(',') : state.filters.body_type,
        remove: this.props.removeBody
      },
      {
        label: 'Trim:',
        filter: Array.isArray(state.filters.trim) ? state.filters.trim.join(',') : state.filters.trim,
        remove: this.props.removeTrim
      },
      {
        label: 'Drive Train:',
        filter: Array.isArray(state.filters.drivetrain) ? state.filters.drivetrain.join(',') : state.filters.drivetrain,
        remove: this.props.removeDriveTrain
      },
      {
        label: 'Cylinders:',
        filter: state.filters.cylinders ? state.filters.cylinders : '',
        remove: this.props.removeCylinders
      },
      {
        label: 'Fuel:',
        filter: Array.isArray(state.filters.fuel_type) ? state.filters.fuel_type.join(',') : state.filters.fuel_type,
        remove: this.props.removeFuel
      },
    ]

    return listFilters
  }

  render () {
    return (
      <StyledFlexCol>
        <Wrapper>
          <SearchArgument {...this.props} argument={this.searchArgument(this.props.sessionSearch)} saveSearch={this.saveSearch} location={this.props.sessionSearch.location} total={this.props.responseFactory.num_found} />
          <Filters {...this.props} list={this.filterTags(this.props.sessionSearch)} />
          <TotalFound total={this.props.responseFactory.num_found} />
          {this.props.responseFactory.num_found && this.props.responseFactory.listings.length ?
            this.props.readyRefreshFetch ?
              this.props.responseFactory.listings.map((item, index) =>
                (<AutoCard {...this.props.sessionSearch} key={index} data={item} stats={this.props.responseFactory.stats} />)
              ) :
              <Spinner style={{marginTop: '5vh'}} /> :
            (<div style={{textAlign: 'center', padding: '4em'}}>
              <NoResults>Sorry, we could not get you that!</NoResults>
              <Button href="/">Lets start over</Button>
            </div>)
          }
          {this.props.responseFactory.num_found &&  this.props.responseFactory.num_found > 10 ?
            <Paginator {...this.props} totalFound={this.props.responseFactory.num_found} updateSuperState={this.props.updatePagination} /> :
            null
          }
          {false ? <Recommended /> : null }
          {/*<ListsBy />*/}
        </Wrapper>
      </StyledFlexCol>
    )
  }
}

export default Results
