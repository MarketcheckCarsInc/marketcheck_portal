import React from 'react'
import SRP from '~/SRP'
import Spinner from 'react-loading-animation'
import urlEncodeParams from '%/factory/urlEncodeParams'
import Factory from '%/factory/fetchingData'
import srpData from './srpdata'
import defaultSearch from './defaultsearch'

const searchFactory = new Factory()

class SrpContainer extends React.Component {
  constructor (props) {
    super(props)

    this.sessionSearch = {}
    this.savedSearch = {}
    this.window = {}

    this.activeFilters = {
      type: false,
      make: false,
      model: false,
      deals: false,
      year: false,
      transmission: false,
      sellerType: false,
      exteriorColor: false,
      bodyType: false,
      trim: false,
      driveTrain: false,
      cylinders: false,
      fuel: false
    }

    this.state = {
      refreshURL: '',
      sessionSearch: srpData(),
      responseFactory: {},
      resetPagination: false,
      readyFirstFetch: false,
      readyRefreshFetch: false,
      readyState: false
    }
  }

  saveSearch () {
    localStorage.setItem("searchSession", JSON.stringify(this.state))
  }

  resetButton () {
    this.sessionSearch = JSON.parse(this.firstSession) ? JSON.parse(this.firstSession) : defaultSearch

    this.setState({
      sessionSearch: srpData(this.sessionSearch),
      resetState: true
    }, () => {
    })

    this.refreshState()
  }

  updateCarType (value) {
    this.sessionSearch.carType = value

    this.activeFilters.type = false

    this.refreshState()
  }

  updateDistance (value) {
    this.sessionSearch.distance = value[0]

    this.refreshState()
  }

  updatePrice (value) {
    this.sessionSearch.price = {
      min: value[0],
      max: value[1]
    }

    this.refreshState()
  }

  updateMilesRange (value) {
    this.sessionSearch.milesRange = {
      min: value[0],
      max: value[1]
    }

    this.refreshState()
  }

  updateDealsRating (value) {
    this.sessionSearch.dealRating = value

    this.activeFilters.deals = false

    this.refreshState()
  }

  updateModelList (value) {
    this.sessionSearch.modelList = value
    this.activeFilters.model = false
    this.refreshState()
  }

    updateMakeList (value) {
      this.sessionSearch.makeList = value
      this.activeFilters.make = false
      this.refreshState()
    }

  updateYear (value) {
    // console.log(value)
    this.sessionSearch.year = value
    this.activeFilters.year = false
    this.refreshState()
  }

  updateSellerType (value) {
    this.sessionSearch.sellerType = value

    this.activeFilters.sellerType = false

    this.refreshState()
  }

  updateColor (value) {
    this.sessionSearch.color = value

    this.activeFilters.exteriorColor = false

    this.refreshState()
  }

  updateTransmission (value) {
    this.sessionSearch.transmission = value

    this.activeFilters.transmission = false

    this.refreshState()
  }

  updateBodyType (value) {
    this.sessionSearch.bodyType = value

    this.activeFilters.bodyType = false

    this.refreshState()
  }

  updatePagination (value) {
    this.sessionSearch.start = value.start
    this.sessionSearch.rows = value.rows

    this.refreshState(true)
  }

  updateTrim (value) {
    this.sessionSearch.trim = value

    this.activeFilters.trim = false

    this.refreshState()
  }

  updateDrivetrain (value) {
    this.sessionSearch.drivetrain = value

    this.activeFilters.driveTrain = false

    this.refreshState()
  }

  updateCylinders (value) {
    this.sessionSearch.cylinders = value

    this.activeFilters.cylinders = false

    this.refreshState()
  }

  updateFuelType (value) {
    this.sessionSearch.fuelType = value

    this.activeFilters.fuel = false

    this.refreshState()
  }

  updateDayListed (value) {
    let date = new Date()

    this.sessionSearch.dayListed = date.setDate(date.getDate() - value)

    this.refreshState()
  }

  updateSortOrder (value) {
    let order = value.split('|')
    this.sessionSearch.sort_by = order[0]
    this.sessionSearch.sort_order = order[1]

    this.refreshState(false)
  }

  updateLocation (value) {
        this.sessionSearch.address = value.address
        this.sessionSearch.latitude = value.lat
        this.sessionSearch.longitude = value.lng

        this.refreshState()
  }

  removeMake () {
    this.sessionSearch.makeList = []

    this.activeFilters.make = true

    this.refreshState()

    // window.location.href = '/'
  }

  removeType () {
    this.sessionSearch.carType = 'used'

    this.activeFilters.type = true

    this.refreshState()
  }

  removeModel () {
    this.sessionSearch.modelList = []

    this.activeFilters.model = true

    this.refreshState()
  }

  removeTransmission () {
    this.sessionSearch.transmission = []

    this.activeFilters.transmission = true

    this.refreshState()
  }

  removeDeal () {
    this.sessionSearch.dealRating = []

    this.activeFilters.deals = true

    this.refreshState()
  }

  removeSellerType () {
    this.sessionSearch.sellerType = ''

    this.activeFilters.sellerType = true

    this.refreshState()
  }

  removeExteriorColor () {
    this.sessionSearch.color = ''

    this.activeFilters.exteriorColor = true

    this.refreshState()
  }

  removeBody () {
    this.sessionSearch.bodyType = ''

    this.activeFilters.bodyType = true

    this.refreshState()
  }

  removeTrim () {
    this.sessionSearch.trim = ''

    this.activeFilters.trim = true

    this.refreshState()
  }

  removeDriveTrain () {
    this.sessionSearch.drivetrain = ''

    this.activeFilters.driveTrain = true

    this.refreshState()
  }

  removeCylinders () {
    this.sessionSearch.cylinders = ''

    this.activeFilters.cylinders = true

    this.refreshState()
  }

  removeFuel () {
    this.sessionSearch.fuelType = ''

    this.activeFilters.fuel = true

    this.refreshState()
  }

  removeYear () {
    this.sessionSearch.year = ''

    this.activeFilters.year = true

    this.refreshState()
  }

  getCarsData () {
    let fetchResult = searchFactory.fetching(this.state.sessionSearch.filters)

    fetchResult = fetchResult.then(response =>
      response.json().then(data =>
        ({
          data: data,
          status: response.status
        })
      )
    )
    .then(res => {
      if (res.status === 200 && res.data !== undefined) {
        this.setState({
          responseFactory: res.data,
          readyFirstFetch: true,
          readyRefreshFetch: true
        },
        () => {
        })
      } else {
        this.setState({
          responseFactory: {},
          readyFirstFetch: true,
          readyRefreshFetch: true,
          resetState: false
        },
        () => {
        })
      }
    })

    return fetchResult
  }

  resetSidebarControl (sidebarControl) {
    sidebarControl()
  }

  refreshState (pagination) {
    this.setState({
      readyRefreshFetch: false,
      resetPagination: false
    })

    this.setState({
      sessionSearch: srpData(this.sessionSearch)
    }, () => {
      this.getCarsData()
      this.refreshURL()
    })

    if (!pagination && pagination !== undefined) {
      this.resetPagination()
    }
  }

  resetPagination () {
    this.setState({
      resetPagination: true
    })

    this.sessionSearch.start = 0
    this.sessionSearch.rows = 10
  }

  refreshURL () {
    let newURL = this.state.refreshURL

    this.setState({
      refreshURL: urlEncodeParams(this.state.sessionSearch.filters)
    }, () => {
      window.history.pushState(this.state.sessionSearch.filters, 'Marketcheck SRP', '/srp?' + this.state.refreshURL)
    })
  }

  componentDidMount () {
    var pairs = location.search.slice(1).split('&');

    var result = {};
          pairs.forEach(function(pair) {
              pair = pair.split('=');
              if(pair[0] == "make"){pair[0] = "selectedMake"}
              if(pair[0] == "model"){pair[0] = "selectedModel"}

              result[pair[0]] = decodeURIComponent(pair[1] || '');
          });
      
      this.props.url.query.refreshURL = this.props.url.asPath.replace("/srp?","")
      this.props.url.query.bodyType = this.props.url.query.body_type
      this.props.url.query.makeList = [this.props.url.query.make]
      this.props.url.query.modelList = [this.props.url.query.model]
      this.props.url.query.distance = this.props.url.query.radius
      this.props.url.query.carType = this.props.url.query.car_type
      localStorage.removeItem("searchSession")
      sessionStorage.removeItem("searchSession")
      sessionStorage.setItem("searchSession", JSON.stringify(this.props.url.query))
      // window.location.href = "/srp?" + this.state.refreshURL;

    const searchParams = window.sessionStorage.getItem('searchSession')
    this.sessionSearch = JSON.parse(searchParams) ? JSON.parse(searchParams) : JSON.parse(JSON.stringify(result));
    this.savedSearch = JSON.parse(window.localStorage.getItem('searchSession'))

    this.setState(

      this.savedSearch ?
      this.savedSearch :
      {
        sessionSearch: srpData(this.sessionSearch),
        saveSearch: this.saveSearch.bind(this),
        updateCarType: this.updateCarType.bind(this),
        updateDistance: this.updateDistance.bind(this),
        updatePrice: this.updatePrice.bind(this),
        updateMilesRange: this.updateMilesRange.bind(this),
        updateDealsRating: this.updateDealsRating.bind(this),
        updateMakeList: this.updateMakeList.bind(this),
        updateModelList: this.updateModelList.bind(this),
        updateYear: this.updateYear.bind(this),
        updateColor: this.updateColor.bind(this),
        updateSellerType: this.updateSellerType.bind(this),
        updateTransmission: this.updateTransmission.bind(this),
        updateBodyType: this.updateBodyType.bind(this),
        updateTrim: this.updateTrim.bind(this),
        updateDrivetrain: this.updateDrivetrain.bind(this),
        updateCylinders: this.updateCylinders.bind(this),
        updateFuelType: this.updateFuelType.bind(this),
        updateDayListed: this.updateDayListed.bind(this),
        updateSortOrder: this.updateSortOrder.bind(this),
        updatePagination: this.updatePagination.bind(this),
        updateLocation: this.updateLocation.bind(this),
        removeMake: this.removeMake.bind(this),
        removeModel: this.removeModel.bind(this),
        removeType: this.removeType.bind(this),
        removeTransmission: this.removeTransmission.bind(this),
        removeDeal: this.removeDeal.bind(this),
        removeSellerType: this.removeSellerType.bind(this),
        removeExteriorColor: this.removeExteriorColor.bind(this),
        removeBody: this.removeBody.bind(this),
        removeTrim: this.removeTrim.bind(this),
        removeDriveTrain: this.removeDriveTrain.bind(this),
        removeCylinders: this.removeCylinders.bind(this),
        removeFuel: this.removeFuel.bind(this),
        removeYear: this.removeYear.bind(this),
        // removePrice: this.removePrice.bind(this),
        resetSidebarControl: this.resetSidebarControl.bind(),
        readyRefreshFetch: this.state.readyRefreshFetch,
        readyState: true,
        activeFilters: this.activeFilters
      },
      () => {
        this.getCarsData()
        this.refreshURL()
      }
    )
  }

  render () {
    const {readyState, readyFirstFetch} = this.state
    return readyState && readyFirstFetch
    ? (<SRP {...this.state} />)
    : (<Spinner style={{marginTop: '35vh'}} />)
  }
}

export default SrpContainer
